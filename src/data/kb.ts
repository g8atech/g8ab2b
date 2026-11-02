// Funzioni comuni a blog e problemi noti.
import { SITE } from './site';

export const SERVIZI: Record<string, { nome: string; frase: string }> = {
  '/noleggio-computer': { nome: 'Noleggio computer', frase: 'Computer configurati, controllati e sostituiti da noi, con assistenza nel canone.' },
  '/noleggio-stampanti': { nome: 'Noleggio stampanti', frase: 'Multifunzione con toner e assistenza inclusi: se si ferma, ci pensiamo noi.' },
  '/noleggio-backup': { nome: 'Backup e NAS', frase: 'Backup automatici anche fuori sede, controllati ogni giorno da noi.' },
  '/rmm': { nome: 'Monitoraggio RMM', frase: 'Controlliamo i tuoi PC di continuo e interveniamo prima che si fermino.' },
  '/': { nome: 'Noleggio Assistito', frase: "Tutta l'informatica dell'ufficio in un canone, assistenza compresa." },
};

export const dataIt = (d: Date) => d.toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Rome' });
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
export const minuti = (testo = '') => Math.max(2, Math.round(testo.split(/\s+/).filter(Boolean).length / 200));

export const crumbsLd = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: `${SITE.url}${it.path}` })),
});

export const URGENZA = {
  bassa: { t: 'Si risolve spesso da soli', c: 'ok' },
  media: { t: 'Prova, poi chiamaci', c: 'mid' },
  alta: { t: 'Urgente: chiamaci subito', c: 'hi' },
} as const;
