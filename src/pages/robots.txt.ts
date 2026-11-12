// robots.txt generato in base all'ambiente.
// Sulle anteprime Vercel Google non indicizza nulla; in produzione (www.g8a.it) sì. Vedi src/data/live.ts.
import { SITE_LIVE } from '../data/live';
export const prerender = true;

export function GET() {
  const live = SITE_LIVE;
  const body = live
    ? `User-agent: *
Allow: /

# Crawler dei motori AI: accesso consentito per la visibilità nelle risposte (GEO)
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /

Sitemap: https://www.g8a.it/sitemap-index.xml
`
    : `# Anteprima: il sito non è ancora su g8a.it, quindi non va indicizzato.
User-agent: *
Disallow: /
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
