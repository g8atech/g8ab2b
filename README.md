# g8a.it — G8A Technology

Sito B2B di G8A Technology, il reparto IT esterno delle PMI. Costruito con [Astro](https://astro.build), come FibraHero: ogni pagina è HTML statico, leggibile subito da Google e dai motori AI.

## Comandi

```bash
npm install
npm run dev      # anteprima locale su http://localhost:4321
npm run build    # genera il sito in dist/
```

## Dove si modificano i contenuti

| Cosa | File |
|---|---|
| Telefono, WhatsApp, email, dati societari | `src/data/site.ts` |
| Sedi, brand del gruppo, domande frequenti | `src/data/site.ts` |
| Testi e sezioni della home | `src/pages/index.astro` |
| Colori, pulsanti, animazioni comuni | `src/styles/global.css` |
| Intestazione, piè di pagina, barra mobile Chiama/WhatsApp | `src/layouts/Base.astro` |
| Immagini (logo, robot, foto, loghi stampa) | `src/assets/` |

## Pubblicazione

Il progetto è collegato a Vercel: ogni modifica su `main` va online da sola. Vercel riconosce Astro senza configurazione.

Finché il sito è in anteprima su `*.vercel.app`, `public/robots.txt` blocca l'indicizzazione. Al passaggio su g8a.it:

1. collegare il dominio su Vercel (Settings → Domains);
2. sostituire `public/robots.txt` con `Allow: /` e la riga `Sitemap: https://www.g8a.it/sitemap-index.xml`;
3. impostare i redirect 301 dagli indirizzi del vecchio sito (vedi documento di architettura).

## Da completare

- Foto robotiche originali in alta risoluzione (ora `robot-coppia.jpg` è un ritaglio della locandina).
- Loghi delle altre testate (Borsa Italiana, Repubblica, La Stampa, ANSA, ItalWire, Finanza Flash, Il Secolo XIX).
- Prezzo "da € al mese" del Noleggio Assistito, se si vuole mostrarlo.
- Pagine servizio, sedi e città previste nell'architettura.
