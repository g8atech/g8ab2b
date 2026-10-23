// robots.txt generato in base all'ambiente.
// Finché PUBLIC_SITE_LIVE non è "true" (anteprima su vercel.app), Google non indicizza nulla.
export const prerender = true;

export function GET() {
  const live = import.meta.env.PUBLIC_SITE_LIVE === 'true';
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
