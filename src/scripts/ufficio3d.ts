// Ufficio 3D del calcolatore: un diorama isometrico che si riempie mentre il visitatore aggiunge dispositivi.
// Tutto costruito in codice (nessun modello esterno). Caricato solo quando la sezione è visibile.
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import markUrl from '../assets/g8a-mark.png?url';

export type Ufficio3D = { update: (q: Record<string, number>) => void; dispose: () => void };

const RED = 0xe30613;
const easeOutBack = (t: number) => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); };

type Anim = { obj: THREE.Object3D; on: boolean; p: number; y: number; drop: number; t0: number; onTick?: (a: Anim, t: number) => void };

export function webglOk() {
  try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch { return false; }
}

export async function mountUfficio3D(host: HTMLElement): Promise<Ufficio3D | null> {
  if (!webglOk()) return null;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.domElement.className = 'ufc__gl';
  host.prepend(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0b0b0d);
  scene.fog = new THREE.Fog(0x0b0b0d, 26, 40);

  // Camera isometrica
  const cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 100);
  const camBase = new THREE.Vector3(13, 11, 13);
  cam.position.copy(camBase);
  const target = new THREE.Vector3(-0.2, 0.9, -0.3);
  cam.lookAt(target);

  // Luci: la stanza si accende man mano che si riempie
  const hemi = new THREE.HemisphereLight(0xdfe6ff, 0x1a0a0a, 0.35);
  scene.add(hemi);
  const key = new THREE.DirectionalLight(0xffffff, 1.4);
  key.position.set(6, 10, 4);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  Object.assign(key.shadow.camera, { left: -8, right: 8, top: 8, bottom: -8 });
  key.shadow.radius = 4;
  scene.add(key);
  const redFill = new THREE.PointLight(RED, 6, 14, 1.6);
  redFill.position.set(-1, 2.6, 0);
  scene.add(redFill);

  const mat = (color: number, o: Partial<THREE.MeshStandardMaterialParameters> = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.6, metalness: 0.1, ...o });
  const glow = (color: number, intensity = 2) => new THREE.MeshStandardMaterial({ color: 0x000000, emissive: color, emissiveIntensity: intensity });
  const box = (w: number, h: number, d: number, m: THREE.Material, shadow = true) => {
    const g = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
    g.castShadow = shadow; g.receiveShadow = true; return g;
  };

  // Stanza
  const room = new THREE.Group(); scene.add(room);
  const floorTex = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 256;
    const x = c.getContext('2d')!; x.fillStyle = '#26262d'; x.fillRect(0, 0, 256, 256);
    x.strokeStyle = 'rgba(255,255,255,0.05)'; x.lineWidth = 2; x.strokeRect(0, 0, 256, 256);
    const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(10, 7); t.colorSpace = THREE.SRGBColorSpace; return t;
  })();
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(10, 7), new THREE.MeshStandardMaterial({ map: floorTex, roughness: 0.35, metalness: 0.2 }));
  floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; room.add(floor);
  const wallM = mat(0x2e2e36, { roughness: 0.9 });
  const back = box(10, 3.2, 0.12, wallM, false); back.position.set(0, 1.6, -3.56); room.add(back);
  const left = box(0.12, 3.2, 7, wallM, false); left.position.set(-5.06, 1.6, 0); room.add(left);
  // Strisce LED rosse a filo pavimento
  const stripM = glow(RED, 0.4);
  const s1 = box(10, 0.04, 0.04, stripM, false); s1.position.set(0, 0.05, -3.48); room.add(s1);
  const s2 = box(0.04, 0.04, 7, stripM, false); s2.position.set(-4.98, 0.05, 0); room.add(s2);
  // Logo G8A sulla parete
  const mark = await new THREE.TextureLoader().loadAsync(markUrl).catch(() => null);
  if (mark) {
    mark.colorSpace = THREE.SRGBColorSpace;
    const logo = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.93), new THREE.MeshBasicMaterial({ map: mark, transparent: true, opacity: 0.18 }));
    logo.position.set(-2.2, 2.25, -3.49); room.add(logo);
  }

  // Scrivanie: due file
  const deskM = mat(0x3a3a44, { roughness: 0.4, metalness: 0.3 });
  const legM = mat(0x111114, { metalness: 0.6, roughness: 0.4 });
  const ROWS = [-1.15, 1.35];
  ROWS.forEach((z) => {
    const top = box(6.6, 0.08, 1.0, deskM); top.position.set(0.25, 0.75, z); room.add(top);
    [-3, 3.5].forEach((x) => { const l = box(0.06, 0.75, 0.9, legM); l.position.set(x, 0.375, z); room.add(l); });
  });

  // Rack sempre visibile, i dispositivi compaiono dentro
  const rack = new THREE.Group(); rack.position.set(4.15, 0, -2.95); room.add(rack);
  const rackM = new THREE.MeshStandardMaterial({ color: 0x2a2a33, roughness: 0.4, metalness: 0.6, transparent: true, opacity: 0.35 });
  const rackLight = new THREE.PointLight(0xffffff, 5, 4, 1.5); rackLight.position.set(3.2, 2.2, -1.6); room.add(rackLight);
  const frame = box(1.1, 2.7, 0.9, rackM); frame.position.y = 1.35; rack.add(frame);
  const rackTop = box(1.12, 0.04, 0.92, glow(RED, 1.6), false); rackTop.position.y = 2.72; rack.add(rackTop);
  const rackBase = box(1.12, 0.04, 0.92, glow(RED, 0.8), false); rackBase.position.y = 0.02; rack.add(rackBase);

  const anims: Anim[] = [];
  const reg = (obj: THREE.Object3D, drop = 1.4, onTick?: Anim['onTick']) => {
    obj.visible = false; obj.scale.setScalar(0.0001);
    const a: Anim = { obj, on: false, p: 0, y: obj.position.y, drop, t0: 0, onTick };
    anims.push(a); return a;
  };

  // Texture schermi
  const screenTex = (kind: 'g8a' | 'own' | 'phone') => {
    const c = document.createElement('canvas'); c.width = 256; c.height = 160;
    const x = c.getContext('2d')!;
    if (kind === 'g8a') {
      const g = x.createLinearGradient(0, 0, 256, 160); g.addColorStop(0, '#ff2a2a'); g.addColorStop(0.55, '#a3101a'); g.addColorStop(1, '#2a0508');
      x.fillStyle = g; x.fillRect(0, 0, 256, 160);
      if (mark?.image) x.drawImage(mark.image as CanvasImageSource, 88, 45, 80, 50);
    } else if (kind === 'own') {
      x.fillStyle = '#16181d'; x.fillRect(0, 0, 256, 160);
      x.fillStyle = '#16c172'; x.beginPath(); x.moveTo(128, 40); x.lineTo(155, 52); x.lineTo(155, 80); x.quadraticCurveTo(155, 105, 128, 120); x.quadraticCurveTo(101, 105, 101, 80); x.lineTo(101, 52); x.closePath(); x.fill();
      x.strokeStyle = '#06381f'; x.lineWidth = 8; x.beginPath(); x.moveTo(114, 80); x.lineTo(125, 92); x.lineTo(144, 70); x.stroke();
    } else {
      const g = x.createLinearGradient(0, 0, 0, 160); g.addColorStop(0, '#3fb6ff'); g.addColorStop(1, '#1b4fd1'); x.fillStyle = g; x.fillRect(0, 0, 256, 160);
    }
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  };
  const texG8A = screenTex('g8a'), texOwn = screenTex('own'), texPhone = screenTex('phone');

  // PC G8A Zenith (All in One) e PC del cliente gestito
  const darkM = mat(0x16161a, { roughness: 0.3, metalness: 0.6 });
  const silverM = mat(0xb9bcc4, { roughness: 0.25, metalness: 0.9 });
  const makePC = (own: boolean) => {
    const g = new THREE.Group();
    const base = box(0.42, 0.03, 0.3, own ? mat(0x55585f) : darkM); base.position.y = 0.015; g.add(base);
    const neck = box(0.06, 0.38, 0.05, own ? mat(0x6b6f7a) : silverM); neck.position.set(0, 0.2, -0.06); g.add(neck);
    const body = box(0.98, 0.62, 0.06, own ? mat(0x3a3d46) : darkM); body.position.set(0, 0.6, -0.02); g.add(body);
    const sm = new THREE.MeshStandardMaterial({ map: own ? texOwn : texG8A, emissive: 0xffffff, emissiveMap: own ? texOwn : texG8A, emissiveIntensity: 0, roughness: 0.2 });
    const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.92, 0.55), sm); screen.position.set(0, 0.61, 0.012); g.add(screen);
    const chairM = mat(own ? 0x2b2d33 : 0x1a1a1f, { roughness: 0.5 });
    const seat = box(0.46, 0.07, 0.44, chairM); seat.position.set(0, -0.32, 0.85); g.add(seat);
    const backr = box(0.46, 0.5, 0.06, chairM); backr.position.set(0, -0.05, 1.07); g.add(backr);
    const accent = box(0.46, 0.04, 0.02, own ? mat(0x16c172) : glow(RED, 1.5), false); accent.position.set(0, 0.19, 1.1); g.add(accent);
    const stem = box(0.05, 0.4, 0.05, legM); stem.position.set(0, -0.56, 0.85); g.add(stem);
    return { g, sm };
  };
  const SLOT_X = [-2.35, -1.2, -0.05, 1.1, 2.25];
  const slots = Array.from({ length: 10 }, (_, i) => {
    const x = SLOT_X[i % 5], z = ROWS[i < 5 ? 0 : 1] - 0.2;
    const mk = (own: boolean) => {
      const { g, sm } = makePC(own); g.position.set(x, 0.79, z); room.add(g);
      return reg(g, 1.8, (a, t) => { const k = Math.min(1, (t - a.t0) / 0.9); sm.emissiveIntensity = a.on ? (k < 0.3 ? k * 4 : k < 0.45 ? 0.3 : 0.9 + Math.sin(t * 1.4 + i) * 0.08) : 0; });
    };
    const phone = new THREE.Group();
    const pb = box(0.13, 0.015, 0.24, mat(0x1b1d23)); phone.add(pb);
    const ps = new THREE.Mesh(new THREE.PlaneGeometry(0.11, 0.21), new THREE.MeshStandardMaterial({ map: texPhone, emissive: 0xffffff, emissiveMap: texPhone, emissiveIntensity: 1.1 }));
    ps.rotation.x = -Math.PI / 2; ps.position.y = 0.009; phone.add(ps);
    phone.position.set(x + 0.6, 0.8, z + 0.25); phone.rotation.y = -0.4; room.add(phone);
    return { g8a: mk(false), own: mk(true), phone: reg(phone, 1) };
  });

  // Stampante multifunzione
  const printer = new THREE.Group(); printer.position.set(-4.1, 0, 2.3); room.add(printer);
  const pm = mat(0xc9cbd1, { roughness: 0.6 });
  const pBody = box(0.85, 0.9, 0.75, pm); pBody.position.y = 0.45; printer.add(pBody);
  const pTop = box(0.85, 0.22, 0.75, mat(0xd4d6db)); pTop.position.y = 1.02; printer.add(pTop);
  const pPanel = box(0.3, 0.02, 0.18, glow(0x3fb6ff, 1.2)); pPanel.position.set(0.2, 1.14, 0.25); printer.add(pPanel);
  const paper = box(0.5, 0.01, 0.6, mat(0xf4f4f4), false); paper.position.set(0, 0.95, 0.2); printer.add(paper);
  printer.rotation.y = Math.PI / 2.6;
  const aPrinter = reg(printer, 1.4, (a, t) => { const k = (t * 0.45) % 1; paper.position.z = 0.1 + k * 0.55; paper.position.y = 0.93 - k * 0.05; });

  // Rack: firewall, NAS, UPS
  const fw = new THREE.Group(); fw.position.set(0, 2.25, 0.05); rack.add(fw);
  fw.add(box(1.0, 0.16, 0.8, mat(0x1d1f25, { metalness: 0.6, roughness: 0.3 })));
  const fwLeds = Array.from({ length: 5 }, (_, i) => { const l = box(0.05, 0.05, 0.02, glow(RED, 0), false); l.position.set(-0.05 + i * 0.1, 0, 0.41); fw.add(l); return l; });
  const fwShield = box(0.1, 0.09, 0.02, glow(RED, 2.5), false); fwShield.position.set(-0.35, 0, 0.41); fw.add(fwShield);
  const aFw = reg(fw, 1.2, (_a, t) => fwLeds.forEach((l, i) => ((l.material as THREE.MeshStandardMaterial).emissiveIntensity = ((t * 3 - i * 0.35) % 1.75) < 0.5 ? 3 : 0.05)));

  const nas = new THREE.Group(); nas.position.set(0, 1.45, 0.05); rack.add(nas);
  nas.add(box(0.9, 0.55, 0.8, mat(0x2a2d35, { metalness: 0.5, roughness: 0.35 })));
  const nasLeds = Array.from({ length: 4 }, (_, i) => {
    const bay = box(0.17, 0.4, 0.02, mat(0x15171c), false); bay.position.set(-0.3 + i * 0.2, 0, 0.41); nas.add(bay);
    const l = box(0.04, 0.04, 0.02, glow(0x16c172, 2), false); l.position.set(-0.3 + i * 0.2, -0.14, 0.43); nas.add(l); return l;
  });
  const aNas = reg(nas, 1.2, (_a, t) => nasLeds.forEach((l, i) => ((l.material as THREE.MeshStandardMaterial).emissiveIntensity = Math.sin(t * (6 + i * 2.3)) > 0.2 ? 2.5 : 0.2)));

  const ups = new THREE.Group(); ups.position.set(0, 0.35, 0.05); rack.add(ups);
  ups.add(box(0.95, 0.55, 0.8, mat(0x1d1f25, { metalness: 0.5, roughness: 0.35 })));
  const bar = box(0.6, 0.12, 0.02, glow(0x16c172, 2.2), false); bar.position.set(-0.05, 0, 0.41); ups.add(bar);
  const aUps = reg(ups, 1.2, (_a, t) => { const k = 0.25 + ((t * 0.4) % 1) * 0.75; bar.scale.x = k; bar.position.x = -0.35 + 0.3 * k; });

  // Fibra FibraHero: presa a muro, cavo al neon e pacchetti di luce
  const plate = new THREE.Group(); plate.position.set(-4.98, 1.5, -1.6); plate.rotation.y = Math.PI / 2; room.add(plate);
  plate.add(box(0.7, 0.42, 0.05, mat(0xf2f3f5)));
  const port = new THREE.Mesh(new THREE.CircleGeometry(0.11, 32), glow(RED, 4)); port.position.set(-0.18, 0, 0.03); plate.add(port);
  const label = (() => {
    const c = document.createElement('canvas'); c.width = 256; c.height = 128; const x = c.getContext('2d')!;
    x.fillStyle = '#0b0b0d'; x.font = '900 46px Archivo, system-ui, sans-serif'; x.fillText('FIBRA', 8, 56); x.fillStyle = '#e30613'; x.fillText('HERO', 8, 106);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  })();
  const lab = new THREE.Mesh(new THREE.PlaneGeometry(0.36, 0.18), new THREE.MeshBasicMaterial({ map: label, transparent: true })); lab.position.set(0.12, 0, 0.03); plate.add(lab);
  const aPlate = reg(plate, 0.6);

  const tube = (pts: THREE.Vector3[], color: number, r: number, inten: number) => {
    const curve = new THREE.CatmullRomCurve3(pts, false, 'catmullrom', 0.05);
    const m = new THREE.Mesh(new THREE.TubeGeometry(curve, 160, r, 8, false), new THREE.MeshStandardMaterial({ color: 0x000000, emissive: color, emissiveIntensity: inten, transparent: true, opacity: 0 }));
    room.add(m);
    const packets = Array.from({ length: 6 }, () => { const s = new THREE.Mesh(new THREE.SphereGeometry(r * 2.4, 12, 12), glow(color, inten * 2.2)); s.visible = false; room.add(s); return s; });
    return { curve, m, packets };
  };
  const fibra = tube([new THREE.Vector3(-4.94, 1.5, -1.6), new THREE.Vector3(-4.94, 2.25, -1.6), new THREE.Vector3(-4.94, 2.25, -3.44), new THREE.Vector3(3.6, 2.25, -3.44), new THREE.Vector3(3.62, 2.25, -2.95)], RED, 0.03, 3);
  const backup = tube([new THREE.Vector3(-4.9, 2.95, 0.6), new THREE.Vector3(-4.9, 2.95, -3.4), new THREE.Vector3(3.6, 2.95, -3.4), new THREE.Vector3(3.6, 2.4, -3.4), new THREE.Vector3(3.62, 2.3, -2.95)], 0xffa21a, 0.022, 2.2);
  const lan = [
    tube([new THREE.Vector3(3.6, 0.03, -2.5), new THREE.Vector3(3.9, 0.03, -1.0), new THREE.Vector3(-3.0, 0.03, -1.0)], 0xff3a3a, 0.018, 1.4),
    tube([new THREE.Vector3(3.9, 0.03, -1.0), new THREE.Vector3(3.9, 0.03, 1.5), new THREE.Vector3(-3.0, 0.03, 1.5)], 0xff3a3a, 0.018, 1.4),
  ];
  const line = { fibra: { ...fibra, on: false, k: 0, speed: 0.32 }, backup: { ...backup, on: false, k: 0, speed: 0.2 }, lan0: { ...lan[0], on: false, k: 0, speed: 0.28 }, lan1: { ...lan[1], on: false, k: 0, speed: 0.28 } };

  // Antenna 5G per la linea di backup
  const ant = new THREE.Group(); ant.position.set(-4.9, 2.95, 0.6); room.add(ant);
  const pole = box(0.05, 0.5, 0.05, silverM); pole.position.y = 0.2; ant.add(pole);
  const tip = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 16), glow(0xffa21a, 3)); tip.position.y = 0.5; ant.add(tip);
  const aAnt = reg(ant, 0.8, (_a, t) => ((tip.material as THREE.MeshStandardMaterial).emissiveIntensity = 1.5 + Math.sin(t * 6) * 1.4));

  // Wi-Fi: access point a parete con onde
  const ap = new THREE.Group(); ap.position.set(0.6, 2.75, -3.47); room.add(ap);
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.06, 40), mat(0xf2f3f5)); disc.rotation.x = Math.PI / 2; ap.add(disc);
  const apLed = new THREE.Mesh(new THREE.CircleGeometry(0.04, 16), glow(0x3fb6ff, 4)); apLed.position.z = 0.035; ap.add(apLed);
  const rings = Array.from({ length: 3 }, () => { const r = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.012, 8, 64), new THREE.MeshBasicMaterial({ color: 0x3fb6ff, transparent: true, opacity: 0 })); r.position.z = 0.05; ap.add(r); return r; });
  const aAp = reg(ap, 0.6, (_a, t) => rings.forEach((r, i) => { const k = (t * 0.6 + i / 3) % 1; r.scale.setScalar(1 + k * 2.2); (r.material as THREE.MeshBasicMaterial).opacity = (1 - k) * 0.8; }));

  // Centralino cloud: nuvola sopra il rack che "squilla"
  const cloud = new THREE.Group(); cloud.position.set(3.0, 3.55, -2.9); room.add(cloud);
  const cm = mat(0xffffff, { emissive: 0xffffff, emissiveIntensity: 0.05, roughness: 0.8 });
  [[0, 0, 0, 0.32], [0.32, -0.06, 0, 0.24], [-0.32, -0.08, 0, 0.22], [0.12, 0.18, 0, 0.24]].forEach(([x, y, z, r]) => { const s = new THREE.Mesh(new THREE.SphereGeometry(r, 24, 24), cm); s.position.set(x, y, z); cloud.add(s); });
  const ringC = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.025, 8, 48), new THREE.MeshBasicMaterial({ color: RED, transparent: true })); ringC.position.z = 0.35; cloud.add(ringC);
  const dotC = new THREE.Mesh(new THREE.CircleGeometry(0.11, 24), glow(RED, 3)); dotC.position.z = 0.33; cloud.add(dotC);
  const aCloud = reg(cloud, 0.8, (_a, t) => { const k = (t * 0.8) % 1; ringC.scale.setScalar(1 + k * 2.2); (ringC.material as THREE.MeshBasicMaterial).opacity = 1 - k; cloud.position.y = 3.55 + Math.sin(t * 1.2) * 0.05; });

  // Postprocessing: bagliore neon
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, cam));
  const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.6, 0.45, 0.9);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());

  // Dimensioni
  const fit = () => {
    const w = host.clientWidth, h = host.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    composer.setSize(w, h);
    const aspect = w / h, view = 6.3;
    const vw = Math.max(13.2, view * 1.5 * aspect), vh = vw / aspect;
    cam.left = -vw / 2; cam.right = vw / 2; cam.top = vh / 2; cam.bottom = -vh / 2; cam.updateProjectionMatrix();
  };
  const ro = new ResizeObserver(fit); ro.observe(host); fit();

  // Parallasse con mouse o dito
  const look = { x: 0, y: 0, tx: 0, ty: 0 };
  const onMove = (e: PointerEvent) => { const r = host.getBoundingClientRect(); look.tx = ((e.clientX - r.left) / r.width - 0.5) * 2; look.ty = ((e.clientY - r.top) / r.height - 0.5) * 2; };
  const onLeave = () => { look.tx = 0; look.ty = 0; };
  host.addEventListener('pointermove', onMove); host.addEventListener('pointerleave', onLeave);

  // Ciclo di rendering, in pausa quando la scena non si vede
  let visible = true, life = 0, lifeT = 0, raf = 0, last = performance.now();
  const io = new IntersectionObserver((es) => { visible = es[0].isIntersecting; if (visible) { last = performance.now(); raf = requestAnimationFrame(loop); } }, { threshold: 0 });
  io.observe(host);
  const clock = new THREE.Clock();
  function loop(now: number) {
    if (!visible) return;
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    const t = clock.getElapsedTime();
    // camera
    look.x += (look.tx - look.x) * 0.05; look.y += (look.ty - look.y) * 0.05;
    const ang = Math.sin(t * 0.15) * 0.06 + look.x * 0.12;
    const r = Math.hypot(camBase.x, camBase.z);
    cam.position.set(Math.sin(Math.PI / 4 + ang) * r, camBase.y - look.y * 1.2, Math.cos(Math.PI / 4 + ang) * r);
    cam.lookAt(target);
    // luci
    life += (lifeT - life) * 0.04;
    hemi.intensity = 0.55 + life * 1.0; key.intensity = 1.1 + life * 1.4;
    redFill.intensity = 2 + life * 10 + Math.sin(t * 2) * 0.5;
    stripM.emissiveIntensity = 0.3 + life * 2.6;
    // comparse
    anims.forEach((a) => {
      const prev = a.p;
      a.p = Math.max(0, Math.min(1, a.p + (a.on ? dt * 1.9 : -dt * 3)));
      if (a.on && prev === 0 && a.p > 0) a.t0 = t;
      a.obj.visible = a.p > 0.001;
      if (!a.obj.visible) return;
      const s = a.on ? Math.max(0.0001, easeOutBack(a.p)) : a.p;
      a.obj.scale.setScalar(s);
      a.obj.position.y = a.y + (1 - Math.min(1, a.p * 1.15)) * a.drop;
      a.onTick?.(a, t);
    });
    // cavi e pacchetti
    Object.values(line).forEach((l) => {
      l.k = Math.max(0, Math.min(1, l.k + (l.on ? dt * 1.2 : -dt * 2)));
      const m = l.m.material as THREE.MeshStandardMaterial; m.opacity = l.k; l.m.visible = l.k > 0.01;
      l.packets.forEach((p, i) => {
        p.visible = l.k > 0.5;
        if (p.visible) p.position.copy(l.curve.getPointAt(((t * l.speed) + i / l.packets.length) % 1));
      });
    });
    composer.render();
    raf = requestAnimationFrame(loop);
  }
  raf = requestAnimationFrame(loop);

  const set = (a: Anim, v: boolean) => { a.on = v; };
  return {
    update(q) {
      const n = (k: string) => q[k] || 0;
      const pc = Math.min(n('pc'), 10), tot = Math.min(n('pc') + n('gestione'), 10), tel = Math.min(n('smartphone'), 10);
      slots.forEach((s, i) => { set(s.g8a, i < pc); set(s.own, i >= pc && i < tot); set(s.phone, i < tel); });
      set(aPrinter, n('stampanti') > 0); set(aFw, n('firewall') > 0); set(aNas, n('nas') > 0); set(aUps, n('ups') > 0);
      set(aPlate, n('fibra') > 0); set(aAnt, n('backup') > 0); set(aAp, n('wifi') > 0); set(aCloud, n('centralino') > 0);
      line.fibra.on = n('fibra') > 0; line.backup.on = n('backup') > 0;
      const net = tot > 0 && (n('fibra') > 0 || n('firewall') > 0 || n('nas') > 0);
      line.lan0.on = net; line.lan1.on = net && tot > 5;
      const devices = Object.values(q).reduce((a, b) => a + b, 0);
      lifeT = Math.min(1, devices / 12);
    },
    dispose() {
      cancelAnimationFrame(raf); ro.disconnect(); io.disconnect();
      host.removeEventListener('pointermove', onMove); host.removeEventListener('pointerleave', onLeave);
      renderer.dispose(); renderer.domElement.remove();
    },
  };
}
