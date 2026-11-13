// Movimento del sito: scroll fluido (Lenis), animazioni legate allo scroll (GSAP)
// e piccoli effetti (titoli parola per parola, pulsanti magnetici, card con luce).
// Con "riduci movimento" attivo non parte niente: il sito resta statico e completo.
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

gsap.registerPlugin(ScrollTrigger);

declare global {
  interface Window { lenis?: Lenis }
}

if (!reduce) {
  document.documentElement.classList.add('motion');
  const lenis = new Lenis({ lerp: 0.085, anchors: { offset: -90 } });
  window.lenis = lenis;
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  heroIntro();
  pageHeroIntro();
  splitHeadings();
  stepsLine();
  scrollReveals();
  if (finePointer) { magneticButtons(); spotlightCards(); tiltCards(); }
  window.addEventListener('load', () => ScrollTrigger.refresh());
}

// Apertura della home: titolo parola per parola, robot che entrano, chip che "atterrano".
function heroIntro() {
  const hero = document.querySelector<HTMLElement>('.hero');
  if (!hero) return;
  const h1 = hero.querySelector('.hero__h1');
  const words = h1 ? splitWords([h1], '.hero__tag') : [];
  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
  tl.from(hero.querySelector('.hero__tag'), { y: 16, opacity: 0, duration: 0.6 })
    .from(words, { yPercent: 115, rotate: 5, duration: 1, stagger: 0.045 }, 0.08)
    .from(hero.querySelectorAll('.hero__lead, .hero__actions, .hero__links'), { y: 24, opacity: 0, duration: 0.8, stagger: 0.07 }, 0.4)
    .from(hero.querySelector('.hero__tv'), { opacity: 0, duration: 0.8 }, 0.6)
    .from(hero.querySelector('.robots'), { y: 60, scale: 0.92, opacity: 0, duration: 1.3 }, 0.1)
    .from(hero.querySelectorAll('.stage__ring, .stage__mark'), { scale: 0.6, opacity: 0, duration: 1.4, stagger: 0.1 }, 0)
    .from(hero.querySelectorAll('.chip-float'), { y: -30, opacity: 0, scale: 0.8, duration: 0.9, stagger: 0.12, ease: 'back.out(2)' }, 0.7);

  gsap.to(hero.querySelector('.hero__visual'), {
    yPercent: -12, ease: 'none',
    scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
  });
  gsap.to(hero.querySelector('.hero__copy'), {
    yPercent: -8, opacity: 0.3, ease: 'none',
    scrollTrigger: { trigger: hero, start: 'center top+=25%', end: 'bottom top', scrub: true },
  });
}

// Apertura delle pagine interne (blocco PageHero).
function pageHeroIntro() {
  const head = document.querySelector<HTMLElement>('.b-hero');
  if (!head) return;
  const h1 = head.querySelector('h1');
  const words = h1 ? splitWords([h1], '.kicker') : [];
  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
  tl.from(head.querySelectorAll('.b-crumbs, .b-hero__kicker'), { y: 12, opacity: 0, duration: 0.6, stagger: 0.08 })
    .from(words, { yPercent: 115, rotate: 5, duration: 1, stagger: 0.04 }, 0.1)
    .from(head.querySelectorAll('.b-hero__lead, .b-actions, .b-hero__note'), { y: 22, opacity: 0, duration: 0.8, stagger: 0.07 }, 0.35)
    .from(head.querySelector('.b-hero__visual'), { x: 60, opacity: 0, scale: 0.95, duration: 1.2 }, 0.15)
    .from(head.querySelectorAll('.b-chip'), { y: -24, opacity: 0, scale: 0.85, duration: 0.8, stagger: 0.12, ease: 'back.out(2)' }, 0.7);
  gsap.to(head.querySelector('.b-hero__visual'), {
    yPercent: -10, ease: 'none',
    scrollTrigger: { trigger: head, start: 'top top', end: 'bottom top', scrub: true },
  });
}

// Titoli di sezione che salgono parola per parola.
function splitHeadings() {
  document.querySelectorAll<HTMLElement>('main h2.h:not([data-nosplit])').forEach((h) => {
    if (h.closest('.hero, .mon')) return;
    const words = splitWords([h]);
    gsap.from(words, {
      yPercent: 110, rotate: 4, duration: 1, ease: 'expo.out', stagger: 0.05,
      scrollTrigger: { trigger: h, start: 'top 88%', once: true },
    });
  });
}

// "Come funziona": la linea si riempie scorrendo e i passi si accendono uno dopo l'altro.
function stepsLine() {
  const sec = document.querySelector<HTMLElement>('#come-funziona');
  const line = sec?.querySelector<HTMLElement>('.line');
  if (!sec || !line) return;
  line.classList.add('line--scrub');
  const steps = sec.querySelectorAll<HTMLElement>('.steps li');
  ScrollTrigger.create({
    trigger: sec, start: 'top 70%', end: 'bottom 60%', scrub: true,
    onUpdate: (st) => {
      line.style.setProperty('--fill', st.progress.toFixed(3));
      steps.forEach((li, i) => li.classList.toggle('is-lit', st.progress >= i / steps.length + 0.02));
    },
  });
}

// Comparsa automatica dei contenuti di tutte le pagine.
function scrollReveals() {
  const sel = [
    'main details', 'main .b-inc > *', 'main .sedi > *', 'main table tbody tr', 'main .prose > :is(p, ul, ol, h2, h3, figure)',
    'main .section li', 'main .section img',
  ].join(',');
  const items = gsap.utils.toArray<HTMLElement>(sel).filter((el) =>
    !el.closest('[data-reveal], .hero, .b-hero, .mon, .tk, .hdr, nav, .sect__tabs, .sect__panel, .steps') && el.getBoundingClientRect().top > window.innerHeight * 0.9);
  gsap.set(items, { y: 30, opacity: 0 });
  ScrollTrigger.batch(items, {
    start: 'top 92%', once: true,
    onEnter: (batch) => gsap.to(batch, { y: 0, opacity: 1, duration: 0.9, ease: 'expo.out', stagger: 0.06, overwrite: true }),
  });
}

function magneticButtons() {
  document.querySelectorAll<HTMLElement>('main .btn').forEach((b) => {
    const x = gsap.quickTo(b, 'x', { duration: 0.5, ease: 'power3' });
    const y = gsap.quickTo(b, 'y', { duration: 0.5, ease: 'power3' });
    b.addEventListener('pointermove', (e) => {
      const r = b.getBoundingClientRect();
      x((e.clientX - r.left - r.width / 2) * 0.28);
      y((e.clientY - r.top - r.height / 2) * 0.35);
    });
    b.addEventListener('pointerleave', () => { x(0); y(0); });
  });
}

// Alone rosso che segue il cursore sulle card.
function spotlightCards() {
  document.querySelectorAll<HTMLElement>('main :is(.glow, .quotes figure, details, .price__list li, .sede)').forEach((el) => {
    el.classList.add('spot');
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });
}

// Card che si inclinano verso il cursore.
function tiltCards() {
  document.querySelectorAll<HTMLElement>('main :is(.inc__card, .more__card, .quotes figure)').forEach((el) => {
    gsap.set(el, { transformPerspective: 800 });
    const rx = gsap.quickTo(el, 'rotationX', { duration: 0.6, ease: 'power3' });
    const ry = gsap.quickTo(el, 'rotationY', { duration: 0.6, ease: 'power3' });
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      ry(((e.clientX - r.left) / r.width - 0.5) * 9);
      rx(-((e.clientY - r.top) / r.height - 0.5) * 9);
    });
    el.addEventListener('pointerleave', () => { rx(0); ry(0); });
  });
}

// Avvolge ogni parola in due span (maschera + parola) senza toccare il resto del markup.
// Il testo resta identico per Google.
function splitWords(roots: Iterable<Element>, skip?: string): HTMLElement[] {
  const out: HTMLElement[] = [];
  for (const root of roots) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => ((skip && n.parentElement?.closest(skip)) || n.parentElement?.closest('.red') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
    });
    const nodes: Text[] = [];
    while (walker.nextNode()) nodes.push(walker.currentNode as Text);
    for (const node of nodes) {
      const parts = (node.textContent ?? '').split(/(\s+)/);
      const frag = document.createDocumentFragment();
      for (const p of parts) {
        if (!p) continue;
        if (/^\s+$/.test(p)) { frag.append(document.createTextNode(p)); continue; }
        const mask = document.createElement('span');
        mask.className = 'w-mask';
        const w = document.createElement('span');
        w.className = 'w';
        w.textContent = p;
        mask.append(w);
        frag.append(mask);
        out.push(w);
      }
      node.replaceWith(frag);
    }
    // Le parti in rosso (testo a gradiente) entrano come blocco unico, così il gradiente resta intero
    root.querySelectorAll<HTMLElement>('.red').forEach((red) => {
      if (skip && red.closest(skip)) return;
      const mask = document.createElement('span');
      mask.className = 'w-mask';
      red.replaceWith(mask);
      mask.append(red);
      red.classList.add('w');
      out.push(red);
    });
  }
  return out;
}
