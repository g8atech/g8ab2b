// Dati generali del sito g8a.it. Tutto ciò che è da confermare è segnato con TODO.
export const SITE = {
  name: 'G8A Technology',
  tagline: 'Tu pensi alla tua azienda. Al resto ci pensiamo noi.',
  url: 'https://www.g8a.it',
  company: 'G8A Technology S.r.l.',
  email: 'info@g8a.it',
  // Numero della sede: telefono e WhatsApp Business.
  phone: '0331 139 0950',
  phoneIntl: '+3903311390950',
  whatsapp: '3903311390950',
  whatsappText: 'Ciao, vi scrivo dal sito g8a.it, vorrei informazioni per la mia azienda.',
  vat: '03981970126',
  legalAddress: 'Via Caronno Varesino 33, 21048 Solbiate Arno (VA)',
  rea: 'VA-393252',
  capital: '€ 10.000,00',
  ticket: 'https://g8a.rmmservice.eu/connect/',
  rmmLogin: 'https://g8a.rmmservice.eu/auth/#/login',
};

// Negozi con pagina propria (/store-...): telefono, email e orari presi dalle pagine del vecchio sito.
export type Negozio = { slug: string; phone: string; phoneIntl: string; whatsapp: string; email: string; zona: string };
export type Sede = { city: string; address: string; cap: string; province: string; operativa?: boolean; negozio?: Negozio };

export const ORARI = [
  { giorni: 'Lunedì – Venerdì', ore: '9:00 – 13:00 · 15:00 – 19:00' },
  { giorni: 'Sabato', ore: '9:00 – 13:00' },
  { giorni: 'Domenica', ore: 'Chiuso' },
];
// Formato schema.org per i dati strutturati.
export const ORARI_LD = [
  { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '13:00' },
  { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '15:00', closes: '19:00' },
  { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '13:00' },
];

export const SEDI: Sede[] = [
  { city: 'Gallarate', address: 'Viale Milano 1', cap: '21013', province: 'VA', negozio: { slug: 'store-gallarate', phone: '0331 24 88 59', phoneIntl: '+390331248859', whatsapp: '390331248859', email: 'gallarate@g8a.it', zona: 'Gallarate, Cardano al Campo, Samarate, Cassano Magnago' } },
  { city: 'Busto Arsizio', address: 'Via Q. Sella 27', cap: '21052', province: 'VA', negozio: { slug: 'store-busto-arsizio', phone: '0331 98 45 55', phoneIntl: '+390331984555', whatsapp: '390331984555', email: 'bustoarsizio@g8a.it', zona: 'Busto Arsizio, Castellanza, Olgiate Olona, Fagnano Olona' } },
  { city: 'Bollate', address: 'Piazza Indipendenza 8', cap: '20021', province: 'MI' },
  { city: 'Jerago con Orago', address: 'Via Varesina 3', cap: '21040', province: 'VA', negozio: { slug: 'store-jerago-con-orago', phone: '0331 02 00 08', phoneIntl: '+390331020008', whatsapp: '390331020008', email: 'jerago@g8a.it', zona: 'Jerago con Orago, Cavaria, Besnate, Albizzate, Solbiate Arno' } },
  { city: 'Lecco', address: 'Viale Dante Alighieri 22', cap: '23900', province: 'LC', negozio: { slug: 'store-lecco', phone: '0341 36 77 54', phoneIntl: '+390341367754', whatsapp: '390341367754', email: 'lecco@g8a.it', zona: 'Lecco e provincia' } },
  { city: 'Solbiate Arno', address: 'Via Caronno Varesino 33', cap: '21048', province: 'VA', operativa: true },
];

export const GRUPPO = [
  { name: 'FibraHero', what: 'Fibra per aziende', url: 'https://www.fibrahero.it' },
  { name: 'TonerHero', what: 'Toner e cartucce', url: 'https://www.tonerhero.it' },
  { name: 'RiparoHero', what: 'Riparazioni', url: 'https://www.riparohero.it' },
  { name: 'G8A Store', what: 'PC e negozi', url: 'https://www.g8astore.it' },
];

export const FAQ = [
  { q: "Cos'è il Noleggio Assistito?", a: "È il metodo G8A: computer, server, stampanti e assistenza tecnica in un unico canone mensile. Non compri le macchine, non paghi gli interventi: ci pensiamo noi a installare, controllare, aggiornare e sostituire." },
  { q: 'Conviene rispetto a comprare i computer?', a: "Non immobilizzi capitale, il canone è un costo fisso e prevedibile, e non paghi riparazioni né il tecnico a chiamata. Quando una macchina invecchia o si guasta, la sostituiamo noi." },
  { q: "C'è un vincolo di durata?", a: 'No, nessun vincolo: la disdetta è libera.' },
  { q: "L'assistenza è inclusa?", a: 'Sì, con un numero dedicato raggiungibile anche su WhatsApp.' },
  { q: 'Quali sono i tempi di installazione?', a: 'Di solito da 1 a 4 giorni lavorativi.' },
  { q: 'E se non sono soddisfatto?', a: 'Hai la garanzia soddisfatto o rimborsato di 30 giorni.' },
  { q: 'In quali zone intervenite?', a: 'Province di Varese, Milano e Lecco, partendo dalle nostre sedi. Da remoto seguiamo aziende in tutta Italia.' },
];

export const waLink = (text: string = SITE.whatsappText) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
export const telLink = `tel:${SITE.phoneIntl}`;

// Domande comuni a tutte le pagine del Noleggio Assistito (dal sito storico).
export const FAQ_BASE = [
  { q: 'Quanto dura il vincolo?', a: 'Nessun vincolo contrattuale: puoi disdire quando vuoi, con un messaggio, una email o una telefonata.' },
  { q: "L'assistenza è inclusa?", a: 'Sì, è inclusa nel noleggio senza costi extra, con un numero dedicato raggiungibile anche su WhatsApp.' },
  { q: 'Quali sono i tempi di installazione?', a: "Di solito da 1 a 4 giorni lavorativi, in base al modello e all'offerta. Per le urgenze chiedi ai nostri installatori." },
  { q: 'E se non sono soddisfatto?', a: 'Se dopo 30 giorni non sei soddisfatto, ti rimborsiamo. Senza vincoli.' },
];

export const faqLd = (items: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

export const serviceLd = (name: string, description: string, path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  url: `https://www.g8a.it${path}`,
  provider: { '@id': 'https://www.g8a.it/#organization' },
  areaServed: ['Provincia di Varese', 'Città metropolitana di Milano', 'Provincia di Lecco'],
});

// Scheda Google Business della sede (Solbiate Arno). Voto e numero sono il valore di riserva:
// se su Vercel c'è PUBLIC_GOOGLE_MAPS_KEY, la pagina li aggiorna dal vivo con le recensioni.
export const GOOGLE = {
  placeId: 'ChIJj7G_qVu2ImgR7SoyoB5PA5s',
  nome: 'G8A Technology, Solbiate Arno',
  voto: 4.9,
  recensioni: 102,
  aggiornato: '23 ottobre 2026',
  leggi: 'https://www.google.com/maps/place/?q=place_id:ChIJj7G_qVu2ImgR7SoyoB5PA5s',
  scrivi: 'https://search.google.com/local/writereview?placeid=ChIJj7G_qVu2ImgR7SoyoB5PA5s',
};
