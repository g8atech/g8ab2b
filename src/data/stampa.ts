// Rassegna stampa: ogni testata con il link all'articolo che parla di G8A.
// h = altezza a cui mostrare il logo (px), per far sembrare i loghi della stessa "taglia".
import fortune from '../assets/press-fortune-italia.png';
import economy from '../assets/press-economy.png';
import cde from '../assets/press-corriere-economia.png';
import vn from '../assets/press-varesenews.png';
import teleborsa from '../assets/press-teleborsa.png';
import borsa from '../assets/press-borsaitaliana.png';
import repubblica from '../assets/press-repubblica.png';
import lastampa from '../assets/press-lastampa.png';
import ansa from '../assets/press-ansa.png';
import ff from '../assets/press-finanzaflash.png';
import italwire from '../assets/press-italwire.png';

export type Uscita = { testata: string; logo: ImageMetadata; h: number; url: string; titolo: string; data: string };

const LANCIO = 'Digitale italiano a 84,4 miliardi, ma resta divario con PMI';

export const STAMPA: Uscita[] = [
  { testata: 'Fortune Italia', logo: fortune, h: 18, data: '23 settembre 2026', titolo: "Il “noleggio assistito” spiegato da Antonio e Giuseppe Arrigo", url: 'https://www.fortuneita.com/2026/09/23/in-italia-le-piccole-e-medie-imprese-rappresentano-la-spina-dorsale-del-tessuto-produttivo-eppure-la-gestione-dellinfrastruttura-informatica-resta-uno-dei-punti-di-maggiore-fragilita-un-computer-c/' },
  { testata: 'la Repubblica', logo: repubblica, h: 22, data: '21 settembre 2026', titolo: LANCIO, url: 'https://finanza.repubblica.it/News/2026/09/21/digitale_italiano_a_844_miliardi_ma_resta_divario_con_pmi-183/' },
  { testata: 'La Stampa', logo: lastampa, h: 16, data: '21 settembre 2026', titolo: LANCIO, url: 'https://finanza.lastampa.it/News/2026/09/21/digitale-italiano-a-84-4-miliardi-ma-resta-divario-con-pmi/MTgzXzIwMjYtMDktMjFfVExC' },
  { testata: 'ANSA', logo: ansa, h: 22, data: '21 settembre 2026', titolo: LANCIO, url: 'https://teleborsa.ansa.it/notiziario/economia/digitale-italiano-a-844-miliardi-ma-resta-divario-con-pmi/' },
  { testata: 'Borsa Italiana', logo: borsa, h: 24, data: '21 settembre 2026', titolo: LANCIO, url: 'https://www.borsaitaliana.it/borsa/notizie/teleborsa/economia/digitale-italiano-a-844-miliardi-ma-resta-divario-con-pmi-183_2026-09-21_TLB.html' },
  { testata: 'Economy', logo: economy, h: 21, data: '22 settembre 2026', titolo: 'Noleggio IT a canone fisso: il modello innovativo per le PMI', url: 'https://www.economymagazine.it/noleggio-it-a-canone-fisso-il-modello-innovativo-per-le-pmi/' },
  { testata: 'Teleborsa', logo: teleborsa, h: 20, data: '21 settembre 2026', titolo: LANCIO, url: 'https://www.teleborsa.it/News/2026/09/21/digitale-italiano-a-84-4-miliardi-ma-resta-divario-con-pmi-183.html' },
  { testata: 'Finanza Flash', logo: ff, h: 20, data: '22 settembre 2026', titolo: 'Digitale italiano a 84,4 miliardi, ma resta il gap delle PMI. G8A punta sul noleggio assistito IT', url: 'https://finanzaflash.com/2026/09/22/digitale-italiano-a-844-miliardi-ma-resta-il-gap-delle-pmi-g8a-punta-sul-noleggio-assistito-it/' },
  { testata: 'ItalWire', logo: italwire, h: 22, data: '22 settembre 2026', titolo: 'Italian Digital Market Surges, Yet SMEs Lag Behind; G8A Technology Bets on Assisted IT Leasing', url: 'https://italwire.com/2026/09/italian-digital-market-surges-yet-smes-lag-behind-g8a-technology-bets-on-assisted-it-leasing/' },
  { testata: "Corriere dell'Economia", logo: cde, h: 30, data: '24 ottobre 2025', titolo: 'Antonio Arrigo, con G8A il noleggio assistito diventa garanzia di continuità per le imprese', url: 'https://www.corrieredelleconomia.it/2025/10/24/antonio-arrigo-con-g8a-il-noleggio-assistito-diventa-garanzia-di-continuita-per-le-imprese/' },
  { testata: 'VareseNews', logo: vn, h: 20, data: '21 gennaio 2026', titolo: 'Dal garage alla rivoluzione dell’assistenza informatica: la storia (varesina) di G8A Technology', url: 'https://www.varesenews.it/2026/01/dal-garage-alla-rivoluzione-dellassistenza-informatica-la-storia-varesina-di-g8a-technology/2413969/' },
];
