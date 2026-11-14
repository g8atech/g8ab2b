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
  { id: 'licenze', t: 'Microsoft 365 e Google Workspace', d: 'Email, Office e cloud, attivati e gestiti da noi.', testo: 'al prezzo di listino', icon: 'briefcase' },
];

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
