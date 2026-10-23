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

## Pagine

Le pagine hanno **gli stessi indirizzi del vecchio sito**, così Google non perde nulla al cambio.

| Indirizzo | Pagina | File |
|---|---|---|
| `/` | Home, Noleggio Assistito | `src/pages/index.astro` |
| `/noleggio-computer` | Noleggio computer | `src/pages/noleggio-computer.astro` |
| `/noleggio-stampanti` | Noleggio stampanti | `src/pages/noleggio-stampanti.astro` |
| `/noleggio-backup` | Backup e NAS | `src/pages/noleggio-backup.astro` |
| `/rmm` | Monitoraggio RMM | `src/pages/rmm.astro` |
| `/testimonianze-casistudio` | Casi studio e testimonianze | `src/pages/testimonianze-casistudio.astro` |
| `/assistenza-business` | Contatti | `src/pages/assistenza-business.astro` |
| `/guidagratuitai7errori-3556` | reindirizza a `/` (guida sospesa) | `vercel.json` |
| `/homepage` | reindirizza a `/` | `vercel.json` |

Testimonianze e casi studio stanno in `src/data/clienti.ts`; i blocchi comuni delle pagine in `src/components/blocks/`.

## Pubblicazione

Il sito non si indicizza finché non lo dici tu: tutto passa da due variabili su Vercel (Settings → Environment Variables, ambiente Production).

| Variabile | Valore | Effetto |
|---|---|---|
| `PUBLIC_SITE_LIVE` | `true` | `robots.txt` apre il sito a Google e ai motori AI, toglie il `noindex` |
| `PUBLIC_GTM_ID` | `GTM-M5FDVQDW` (quello del vecchio sito) | attiva Google Tag Manager |
| `PUBLIC_GOOGLE_MAPS_KEY` | chiave API Google Maps (Places API New), limitata ai domini del sito | voto, numero e ultime recensioni della scheda Google della sede caricati dal vivo |

Le recensioni Google si possono anche inserire a mano in `src/data/recensioni.ts`, **copiate parola per parola** da Google (nome, stelle, data, testo; eventuale risposta di G8A). Se il file ne contiene, il sito mostra tutte quelle e non chiama l'API. Non vanno mai modificate o scritte da noi.

Senza la chiave Google e senza recensioni nel file, il blocco recensioni mostra voto e numero scritti in `src/data/site.ts` (`GOOGLE`) e i link per leggerle tutte o lasciarne una: aggiornali ogni tanto. Con la chiave, Google restituisce al massimo 5 recensioni, le più pertinenti.

Ogni clic su telefono, WhatsApp o email invia a GTM l'evento `contatto` con `canale` e `pagina`: in GTM basta un attivatore "Evento personalizzato = contatto" per le conversioni di GA4 e Google Ads.

### Il giorno del cambio

1. Controllare l'anteprima su Vercel, pagina per pagina.
2. Su Vercel → Settings → Domains aggiungere `www.g8a.it` (principale) e `g8a.it` (reindirizza a www).
3. Dal registrar del dominio cambiare i DNS indicati da Vercel al posto di quelli di GoHighLevel. Le email non cambiano: non toccare i record MX.
4. Impostare `PUBLIC_SITE_LIVE=true` e `PUBLIC_GTM_ID`, poi Redeploy.
5. Sottodomini per città (es. `gallarate.g8a.it`): aggiungerli su Vercel con reindirizzamento 301 a `www.g8a.it` finché non nascono le pagine città.
6. Google Search Console: inviare `https://www.g8a.it/sitemap-index.xml` e controllare le pagine indicizzate nei giorni seguenti.
7. In GTM verificare che le conversioni di Google Ads arrivino dal nuovo evento `contatto`.

## Da completare

- Foto robotiche originali in alta risoluzione.
- Loghi delle altre testate (Borsa Italiana, Repubblica, La Stampa, ANSA, ItalWire, Finanza Flash, Il Secolo XIX).
- Prezzo "da € al mese" del Noleggio Assistito, se si vuole mostrarlo.
- Pagine settore, sedi e città previste nell'architettura.
