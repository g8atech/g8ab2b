// Il sito è "live" (indicizzabile, con robots aperto) sulla produzione Vercel, cioè su www.g8a.it.
// Le anteprime (branch e pull request) restano noindex. PUBLIC_SITE_LIVE=true lo forza a mano.
export const SITE_LIVE =
  import.meta.env.PUBLIC_SITE_LIVE === 'true' || process.env.VERCEL_ENV === 'production';
