// Contenuti editoriali di g8a.it: articoli del blog e schede dei problemi noti.
// Ogni file .md in src/content/<collezione>/ diventa una pagina. Il nome del file è l'indirizzo.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const faq = z.array(z.object({ q: z.string(), a: z.string() })).default([]);

// Servizi a cui un contenuto può rimandare (per la chiamata finale e i link interni).
const servizio = z.enum(['/noleggio-computer', '/noleggio-stampanti', '/noleggio-backup', '/rmm', '/']);

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    // Titolo per Google (se diverso dal titolo in pagina), max ~60 caratteri.
    seoTitle: z.string().optional(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    categoria: z.enum(['Noleggio Assistito', 'Sicurezza', 'Backup', 'Gestione IT', 'Costi']),
    servizio,
    // Risposta breve in apertura: è il pezzo che Google e i motori AI citano.
    inBreve: z.string(),
    faq,
    draft: z.boolean().default(false),
  }),
});

const problemi = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/problemi' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string(),
    updated: z.coerce.date(),
    area: z.enum(['Computer', 'Stampanti', 'Rete e internet', 'Email', 'Sicurezza', 'File e backup']),
    // Quanto è urgente: alta = chiamaci subito, senza provare da soli.
    urgenza: z.enum(['bassa', 'media', 'alta']),
    sintomi: z.array(z.string()),
    // Cosa può provare da solo chiunque, senza rischi. Un passo per riga.
    passi: z.array(z.object({ t: z.string(), d: z.string() })),
    tempo: z.string().default('5 minuti'),
    quandoChiamare: z.array(z.string()),
    servizio,
    faq,
  }),
});

// Pagine "assistenza informatica + città": testi propri per ogni zona, mai pagine fotocopia.
const citta = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/citta' }),
  schema: z.object({
    city: z.string(),
    provincia: z.string(),
    // Città della sede G8A più vicina (deve esistere in SEDI, src/data/site.ts).
    sede: z.string(),
    // Frase sulla presenza in zona: dove siamo rispetto alla città.
    presenza: z.string(),
    lead: z.string(),
    comuni: z.array(z.string()),
    settori: z.array(z.object({ t: z.string(), d: z.string() })),
    quotes: z.array(z.string()).default(['milani', 'vallerini', 'soaptec']),
    faq,
    ordine: z.number().default(50),
  }),
});

export const collections = { blog, problemi, citta };
