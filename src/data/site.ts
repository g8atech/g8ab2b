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
  // Assistenza remota: link NinjaOne per far collegare il tecnico al PC del cliente.
  assistenza: 'https://g8a.rmmservice.eu/connect/#/8175714087',
  // I ticket li aprono i clienti dall'area clienti di Brain.
  ticket: 'https://parts-plan.vercel.app/area-clienti',
  rmmLogin: 'https://g8a.rmmservice.eu/auth/#/login',
  // Profili social ufficiali di G8A Technology (LinkedIn, Facebook, YouTube…): finiscono nello schema (sameAs).
  // Solo indirizzi reali dell'azienda: lasciare vuoto finché non sono confermati.
  social: [] as string[],
};

// Fondatori: profili personali pubblici (sameAs della persona, non dell'azienda).
export const FONDATORI = [
  { nome: 'Giuseppe Arrigo', slug: 'giuseppe-arrigo', ruolo: 'Co-fondatore di G8A Technology', profili: [] as { nome: string; url: string }[] },
  { nome: 'Antonio Arrigo', slug: 'antonio-arrigo', ruolo: 'Co-fondatore e amministratore delegato di G8A Technology', profili: [
    { nome: 'LinkedIn', url: 'https://it.linkedin.com/in/antonio-arrigo-029b4ba6' },
    { nome: 'BNI Varese', url: 'https://bni-varese.it/it/memberdetails?encryptedMemberId=TcjNzIJFOSmH9W6%2FpTvAJQ%3D%3D&name=Antonio+Arrigo' },
  ] },
];
// Schema Person di un fondatore, con @id stabile sulla pagina Chi siamo.
export const personaLd = (nome: string) => {
  const f = FONDATORI.find((x) => x.nome === nome);
  if (!f) return { '@type': 'Person', name: nome };
  return { '@type': 'Person', '@id': `https://www.g8a.it/chi-siamo#${f.slug}`, name: f.nome, jobTitle: f.ruolo, worksFor: { '@id': 'https://www.g8a.it/#organization' }, url: `https://www.g8a.it/chi-siamo#${f.slug}`, ...(f.profili.length ? { sameAs: f.profili.map((p) => p.url) } : {}) };
};

// Negozi G8A Store: sito a parte (progetto g8astore) su www.g8astore.it/<slug>/.
export type Negozio = { slug: string; phone: string; phoneIntl: string; whatsapp: string; email: string; zona: string; placeId?: string };
export type Sede = { city: string; address: string; cap: string; province: string; operativa?: boolean; negozio?: Negozio };


export const SEDI: Sede[] = [
  { city: 'Gallarate', address: 'Viale Milano 1', cap: '21013', province: 'VA', negozio: { slug: 'gallarate', placeId: 'ChIJ6yyZkqWJhkcRWl-oGsLTGlE', phone: '0331 24 88 59', phoneIntl: '+390331248859', whatsapp: '390331248859', email: 'gallarate@g8a.it', zona: 'Gallarate, Cardano al Campo, Samarate, Cassano Magnago' } },
  { city: 'Busto Arsizio', address: 'Via Q. Sella 27', cap: '21052', province: 'VA', negozio: { slug: 'busto-arsizio', placeId: 'ChIJP50Vl0mLhkcRcFXw61MM-tE', phone: '0331 98 45 55', phoneIntl: '+390331984555', whatsapp: '390331984555', email: 'bustoarsizio@g8a.it', zona: 'Busto Arsizio, Castellanza, Olgiate Olona, Fagnano Olona' } },
  { city: 'Bollate', address: 'Piazza Indipendenza 8', cap: '20021', province: 'MI', negozio: { slug: 'bollate', placeId: 'ChIJuVB-8zqVhkcRIBQ06wksGto', phone: '02 350 4614', phoneIntl: '+39023504614', whatsapp: '39023504614', email: 'bollate@g8a.it', zona: 'Bollate e dintorni' } },
  { city: 'Jerago con Orago', address: 'Via Varesina 3', cap: '21040', province: 'VA', negozio: { slug: 'jerago-con-orago', placeId: 'ChIJI1NQYgmIhkcRIyYGwWW3ESs', phone: '0331 02 00 08', phoneIntl: '+390331020008', whatsapp: '390331020008', email: 'jerago@g8a.it', zona: 'Jerago con Orago, Cavaria, Besnate, Albizzate, Solbiate Arno' } },
  { city: 'Lecco', address: 'Viale Dante Alighieri 22', cap: '23900', province: 'LC', negozio: { slug: 'lecco', placeId: 'ChIJe_rlE8QdhEcRDsib-RoqdKc', phone: '0341 36 77 54', phoneIntl: '+390341367754', whatsapp: '390341367754', email: 'lecco@g8a.it', zona: 'Lecco e provincia' } },
  { city: 'Solbiate Arno', address: 'Via Caronno Varesino 33', cap: '21048', province: 'VA', operativa: true },
];

// Brand del gruppo G8A: footer, schema Organization e pagina /chi-siamo.
export const GRUPPO = [
  { name: 'G8A Store', what: 'Negozi: PC, notebook e Mac', url: 'https://www.g8astore.it', key: 'g8astore',
    desc: 'I cinque negozi G8A per privati e partite IVA: riparazione e vendita di computer, notebook e Mac, PC G8A configurabili e assistenza al banco.',
    negozio: (slug: string) => `https://www.g8astore.it/${slug}/` },
  { name: 'RiparoHero', what: 'Riparazione smartphone e tablet', url: 'https://www.riparohero.it', key: 'riparohero',
    desc: 'Riparazione di smartphone e tablet negli stessi negozi: schermi, batterie e connettori con prezzo chiaro, diagnosi gratuita e garanzia.',
    negozio: (slug: string) => `https://www.riparohero.it/${slug}` },
  { name: 'TonerHero', what: 'Toner, cartucce e stampanti', url: 'https://www.tonerhero.it', key: 'tonerhero',
    desc: 'Toner e cartucce originali e compatibili, carta e stampanti per uffici, scuole e pubblica amministrazione, con i negozi come punto di ritiro e assistenza.',
    negozio: (slug: string) => `https://www.tonerhero.it/negozi/${slug}` },
  { name: 'FibraHero', what: 'Fibra e connettività per aziende', url: 'https://www.fibrahero.it', key: 'fibrahero',
    desc: 'Connettività per sole aziende con G8A come operatore: fibra, linee di backup e centralino, con il supporto diretto dei nostri tecnici.' },
  { name: 'SuperPMI', what: 'Intelligenza artificiale per le PMI', url: 'https://www.superpmi.it', key: 'superpmi',
    desc: "L'intelligenza artificiale applicata alle piccole e medie imprese: formazione per titolari e dipendenti, assistenti e strumenti AI su misura." },
];

export const FAQ = [
  { q: "Cos'è il Noleggio Assistito?", a: "È il metodo G8A: computer, server, stampanti e assistenza tecnica in un unico canone mensile. Non compri le macchine, non paghi gli interventi: ci pensiamo noi a installare, controllare, aggiornare e sostituire." },
  { q: 'Conviene rispetto a comprare i computer?', a: "Non immobilizzi capitale, il canone è un costo fisso e prevedibile, e non paghi riparazioni né il tecnico a chiamata. Quando una macchina invecchia o si guasta, la sostituiamo noi." },
  { q: 'Quanto costa?', a: 'Si parte da 12 € al mese a PC per monitoraggio e antivirus, 39 € per la gestione completa di un PC che hai già e 45 € per un computer a noleggio; stampanti da 29 €, NAS e firewall da 39 €. Prezzi di partenza IVA esclusa: il canone esatto lo confermiamo dopo l\'analisi gratuita in sede. Tutti i prezzi su g8a.it/prezzi.' },
  { q: "C'è un vincolo di durata?", a: 'No, nessun vincolo: la disdetta è libera.' },
  { q: "L'assistenza è inclusa?", a: 'Sì, con un numero dedicato raggiungibile anche su WhatsApp.' },
  { q: 'In quanto tempo intervenite?', a: 'Prendiamo in carico ogni richiesta in giornata, nei giorni lavorativi: prima da remoto e, se serve, con un tecnico in sede.' },
  { q: 'Quali sono i tempi di installazione?', a: 'Di solito da 1 a 4 giorni lavorativi.' },
  { q: 'E se non sono soddisfatto?', a: 'Hai la garanzia soddisfatto o rimborsato di 30 giorni.' },
  { q: 'In quali zone intervenite?', a: 'Province di Varese, Milano e Lecco, partendo dalle nostre sedi. Da remoto seguiamo aziende in tutta Italia.' },
];

export const waLink = (text: string = SITE.whatsappText) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
// I negozi sono un sito a parte: www.g8astore.it
export const STORE_SITE = 'https://www.g8astore.it';
export const storeUrl = (slug?: string) => (slug ? `${STORE_SITE}/${slug}/` : `${STORE_SITE}/`);
// Scheda Google del negozio G8A (place_id in Brain → store_settings.g8a_google_place_id).
export const mapsPlace = (placeId: string) => `https://www.google.com/maps/place/?q=place_id:${placeId}`;
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
