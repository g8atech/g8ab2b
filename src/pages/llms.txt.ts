// /llms.txt per gli assistenti AI: testo base (src/data/llms-base.md) + pagine città e guide firmate, sempre aggiornate.
import type { APIRoute } from 'astro';
import base from '../data/llms-base.md?raw';
import { CITTA } from '../data/citta';
import { GUIDE_NINA } from '../data/guideNina';

export const GET: APIRoute = () => {
  const citta = CITTA.map((c) => `- [Assistenza informatica aziende a ${c.nome}](https://www.g8a.it/assistenza-informatica/${c.slug})`).join('\n');
  const guide = (GUIDE_NINA as any[]).filter((g) => g?.slug && g.firmato_da)
    .map((g) => `- [${g.h1}](https://www.g8a.it/guide/${g.slug}): ${g.descrizione}`).join('\n');
  const testo = `${base.trimEnd()}\n\n## Assistenza informatica per città\n\n${citta}\n${guide ? `\n## Guide per le aziende\n\n${guide}\n` : ''}`;
  return new Response(testo, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
