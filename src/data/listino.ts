// Listino del Noleggio Assistito: prezzi di partenza al mese, decisi da G8A (nov 2026).
// Compaiono in /prezzi, nella home, nelle pagine dei servizi e delle città, e nei dati strutturati.
// TODO: confermare che i prezzi sono IVA esclusa (oggi il sito lo scrive in NOTA_PREZZI).

export type Voce = {
  id: string;
  t: string; // nome
  d: string; // cosa include, in una riga
  da?: number; // prezzo di partenza al mese, in euro
  unita?: string; // es. "per utente"
  testo?: string; // al posto del prezzo, se non c'è un numero
  icon: string;
  href?: string;
};

export const LISTINO: Voce[] = [
  { id: 'pc', t: 'Computer a noleggio', d: 'PC G8A configurato, installato e sostituito se si guasta.', da: 45, icon: 'pc', href: '/noleggio-computer' },
  { id: 'gestione', t: 'Gestione dei tuoi PC', d: 'I computer che hai già: monitoraggio, aggiornamenti e assistenza.', da: 39, unita: 'per PC', icon: 'activity', href: '/rmm' },
  { id: 'stampanti', t: 'Stampanti e multifunzione', d: 'Manutenzione e assistenza comprese.', da: 29, icon: 'printer', href: '/noleggio-stampanti' },
  { id: 'nas', t: 'NAS e backup', d: 'Backup automatici dei dati aziendali, controllati da noi.', da: 39, icon: 'server', href: '/noleggio-backup' },
  { id: 'firewall', t: 'Firewall', d: 'Protezione della rete aziendale, configurata e aggiornata.', da: 39, icon: 'shieldok' },
  { id: 'centralino', t: 'Centralino cloud', d: 'Numeri, interni e app sul telefono.', da: 15, unita: 'per utente', icon: 'phone' },
  { id: 'ups', t: 'UPS', d: 'Server e rete protetti da blackout e sbalzi di corrente.', da: 9.9, icon: 'zap' },
  { id: 'tablet', t: 'Tablet', d: 'Per agenti, magazzino e reparto.', da: 19, icon: 'laptop' },
  { id: 'smartphone', t: 'Smartphone', d: 'Telefoni aziendali configurati e gestiti.', da: 19, icon: 'phone' },
  { id: 'm365', t: 'Microsoft 365', d: 'Email aziendale, Office, Teams e OneDrive, attivati e gestiti da noi.', da: 6.07, unita: 'per utente', icon: 'briefcase', href: '/prezzi#licenze' },
  { id: 'gws', t: 'Google Workspace', d: 'Gmail aziendale, Drive, Meet e Documenti, attivati e gestiti da noi.', da: 6.8, unita: 'per utente', icon: 'briefcase', href: '/prezzi#licenze' },
];

// Licenze: prezzi ufficiali Microsoft e Google (impegno annuale, IVA esclusa), rilevati a novembre 2026.
// Aggiornarli quando cambiano i listini di Microsoft o Google.
export const LICENZE = [
  { marca: 'Microsoft 365', piani: [
    { t: 'Business Basic', p: 6.07, d: 'Email aziendale, Teams, Word ed Excel web, 1 TB OneDrive' },
    { t: 'Apps for business', p: 11.0, d: 'Word, Excel, Outlook installati sul PC, senza email' },
    { t: 'Business Standard', p: 12.13, d: 'Tutto Basic più Office installato sul PC' },
    { t: 'Business Premium', p: 19.06, d: 'Tutto Standard più sicurezza avanzata (Defender, Intune)' },
  ] },
  { marca: 'Google Workspace', piani: [
    { t: 'Business Starter', p: 6.8, d: 'Gmail aziendale, Meet, 30 GB per utente' },
    { t: 'Business Standard', p: 13.6, d: 'Tutto Starter più 2 TB per utente e registrazione riunioni' },
    { t: 'Business Plus', p: 21.1, d: 'Tutto Standard più 5 TB per utente e sicurezza avanzata' },
  ] },
];
export const NOTA_LICENZE = 'Prezzi ufficiali di Microsoft e Google per utente al mese, con impegno annuale, IVA esclusa (novembre 2026). Attivazione, migrazione delle caselle e gestione le facciamo noi.';

export const NOTA_PREZZI = 'Prezzi di partenza al mese, IVA esclusa. Il canone esatto dipende da modelli e quantità: lo confermiamo dopo l\'analisi in sede.';

export const euro = (n: number) => (Number.isInteger(n) ? `${n} €` : `${n.toFixed(2).replace('.', ',')} €`);
export const prezzo = (v: Voce) => (v.da != null ? `da ${euro(v.da)}/mese${v.unita ? ` ${v.unita}` : ''}` : v.testo ?? '');
export const voce = (id: string) => LISTINO.find((v) => v.id === id)!;

// Offerte per i dati strutturati (schema.org)
export const offersLd = (items: Voce[] = LISTINO) =>
  items.filter((v) => v.da != null).map((v) => ({
    '@type': 'Offer',
    name: v.t,
    description: v.d,
    ...(v.href ? { url: `https://www.g8a.it${v.href}` } : {}),
    priceCurrency: 'EUR',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: v.da,
      priceCurrency: 'EUR',
      unitText: v.unita ? `mese ${v.unita}` : 'mese',
      referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' },
      valueAddedTaxIncluded: false,
    },
    eligibleCustomerType: 'Business',
    seller: { '@id': 'https://www.g8a.it/#organization' },
  }));
