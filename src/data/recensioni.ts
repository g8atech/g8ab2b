// Recensioni della scheda Google della sede, copiate PAROLA PER PAROLA da Google.
// Non modificarle né riassumerle: la legge (Direttiva Omnibus) vieta recensioni alterate o scritte dall'azienda.
// Per aggiungerne una: nome come appare su Google (es. "Mario R."), stelle, data, testo identico.
export type Recensione = { nome: string; stelle: 1 | 2 | 3 | 4 | 5; data: string; testo: string; risposta?: string };

export const RECENSIONI: Recensione[] = [
  // { nome: 'Mario R.', stelle: 5, data: 'settembre 2026', testo: 'Testo identico a quello su Google.' },
];
