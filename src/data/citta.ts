// Pagine "Assistenza informatica per aziende a <città>": una per ogni sede G8A.
// Ogni città ha testi, comuni e domande propri: non sono copie con il nome cambiato.
// Solo fatti veri: sedi, comuni serviti, clienti della zona già presenti nel sito (casi e recensioni).

export type Citta = {
  slug: string;
  nome: string;
  provincia: string; // sigla
  sede: string; // indirizzo del punto G8A in città
  sottodominio: string; // vecchio sito, es. gallarate.g8a.it
  titolo: string; // <title>
  descrizione: string; // meta description (max ~160)
  lead: string;
  contesto: { titolo: string; testo: string[] };
  bisogni: { t: string; d: string }[]; // esigenze tipiche delle aziende della zona
  comuni: string[];
  casi?: string[]; // id in clienti.ts (casi studio)
  recensioni?: string[]; // id in clienti.ts (testimonianze)
  faq: { q: string; a: string }[];
};

export const CITTA: Citta[] = [
  {
    slug: 'gallarate',
    nome: 'Gallarate',
    provincia: 'VA',
    sede: 'Viale Milano 1, 21013 Gallarate (VA)',
    sottodominio: 'gallarate.g8a.it',
    titolo: 'Assistenza informatica aziende a Gallarate | G8A Technology',
    descrizione: 'Assistenza informatica per aziende e studi a Gallarate: computer, server, backup e stampanti in un canone, tecnici in sede e da remoto. Sede in Viale Milano 1.',
    lead: 'Studi professionali, negozi e piccole imprese di Gallarate: computer, server, backup e stampanti gestiti da noi in un unico canone, con il punto G8A in Viale Milano a pochi minuti da te.',
    contesto: {
      titolo: 'Gallarate: studi, commercio e servizi',
      testo: [
        "A Gallarate lavorano soprattutto studi professionali, commercio e aziende di servizi, molte legate all'area di Malpensa. Realtà da 2 a 20 postazioni che non hanno un informatico interno e che non possono permettersi di restare ferme un giorno per un PC o un server.",
        'Seguiamo da anni studi della città, come lo studio di consulenza del lavoro della Dott.ssa Vallerini: archivi dei clienti al sicuro, scadenze rispettate, un solo numero da chiamare quando qualcosa non va.',
      ],
    },
    bisogni: [
      { t: 'Studi professionali', d: 'Commercialisti, consulenti del lavoro, avvocati: archivi clienti protetti, backup controllati e PC sempre aggiornati.' },
      { t: 'Commercio e negozi', d: 'Casse, PC del punto vendita, stampanti ed etichettatrici che devono funzionare tutti i giorni.' },
      { t: 'Logistica e servizi', d: 'Postazioni condivise, rete e Wi-Fi stabili, assistenza rapida su più turni.' },
    ],
    comuni: ['Gallarate', 'Cardano al Campo', 'Samarate', 'Cassano Magnago', 'Ferno', 'Lonate Pozzolo', 'Somma Lombardo', 'Casorate Sempione', 'Arsago Seprio'],
    recensioni: ['vallerini', 'milani'],
    faq: [
      { q: 'Avete una sede a Gallarate?', a: 'Sì, il punto G8A di Viale Milano 1, vicino alla stazione. I tecnici che vengono in azienda partono dalla nostra sede operativa di Solbiate Arno, a pochi chilometri.' },
      { q: 'Seguite anche studi con 2 o 3 computer?', a: 'Sì. Molti nostri clienti a Gallarate sono studi piccoli: il canone si costruisce sulle postazioni che hai, senza minimi.' },
      { q: 'Prima avevo il sito gallarate.g8a.it: è sempre G8A?', a: 'Sì, è la stessa azienda. Le informazioni per le imprese di Gallarate ora sono in questa pagina; per riparazioni e acquisti da privato c’è il negozio G8A Store di Gallarate.' },
    ],
  },
  {
    slug: 'busto-arsizio',
    nome: 'Busto Arsizio',
    provincia: 'VA',
    sede: 'Via Q. Sella 27, 21052 Busto Arsizio (VA)',
    sottodominio: 'busto-arsizio.g8a.it',
    titolo: 'Assistenza informatica aziende a Busto Arsizio | G8A Technology',
    descrizione: "Assistenza informatica per aziende a Busto Arsizio e nell'Alto Milanese: PC, server, backup e stampanti in un canone, tecnici in sede e da remoto. Via Q. Sella 27.",
    lead: "Aziende manifatturiere, commerciali e studi di Busto Arsizio e dell'Alto Milanese: tutta l'informatica in un canone mensile, con il punto G8A in Via Quintino Sella.",
    contesto: {
      titolo: "Busto Arsizio e l'Alto Milanese: tante PMI, poco tempo per l'IT",
      testo: [
        "Busto Arsizio è la città più popolosa della provincia di Varese e il cuore di un tessuto di piccole e medie imprese nato dal tessile: produzione, commercio all'ingrosso, uffici amministrativi con molte postazioni.",
        "Qui il problema tipico non è il singolo PC rotto, ma il gestionale lento, il server vecchio e i backup che nessuno controlla. Con il Noleggio Assistito sostituiamo e gestiamo tutto noi, senza un investimento iniziale.",
      ],
    },
    bisogni: [
      { t: 'Produzione e magazzino', d: 'PC in reparto, stampanti di etichette e bolle, rete che arriva fino al capannone.' },
      { t: 'Uffici amministrativi', d: 'Gestionale veloce, server o NAS con backup automatici, posta aziendale sicura.' },
      { t: 'Commercio e ingrosso', d: 'Postazioni per ordini e fatture sempre operative, assistenza remota immediata.' },
    ],
    comuni: ['Busto Arsizio', 'Castellanza', 'Olgiate Olona', 'Fagnano Olona', 'Marnate', 'Gorla Minore', 'Solbiate Olona', 'Legnano', 'Sacconago'],
    recensioni: ['testa', 'coriani'],
    faq: [
      { q: 'Venite anche a Legnano e Castellanza?', a: "Sì, seguiamo aziende in tutto l'Alto Milanese: Castellanza, Legnano, Olgiate Olona, Fagnano Olona e i comuni vicini." },
      { q: 'Avete un punto a Busto Arsizio?', a: 'Sì, in Via Quintino Sella 27. Gli interventi in azienda partono dalla sede operativa di Solbiate Arno.' },
      { q: 'Abbiamo già un fornitore per il gestionale: lavorate insieme?', a: 'Sì. Noi gestiamo computer, server, rete e backup e ci coordiniamo con la software house del gestionale, così hai un solo riferimento per tutto il resto.' },
    ],
  },
  {
    slug: 'bollate',
    nome: 'Bollate',
    provincia: 'MI',
    sede: 'Piazza Indipendenza 8, 20021 Bollate (MI)',
    sottodominio: 'bollate.g8a.it',
    titolo: 'Assistenza informatica aziende a Bollate e Nord Milano | G8A Technology',
    descrizione: 'Assistenza informatica per aziende a Bollate e nel Nord-Ovest di Milano: computer, server, backup e stampanti in un canone, assistenza in sede e da remoto.',
    lead: "Piccole imprese, artigiani e uffici di Bollate e del Nord-Ovest milanese: computer, rete, backup e stampanti gestiti da noi, con il punto G8A in Piazza Indipendenza.",
    contesto: {
      titolo: "Bollate e l'hinterland nord-ovest di Milano",
      testo: [
        "Tra Bollate, Arese, Garbagnate e Novate ci sono tante piccole imprese, artigiani e uffici che lavorano con Milano ma non hanno un reparto IT. Il punto G8A di Piazza Indipendenza è il nostro riferimento per questa zona.",
        "Nel Milanese abbiamo già gestito emergenze vere: a Bareggio un fulmine ha distrutto il firewall di un'azienda di produzione e tutta la rete era ferma. Con la configurazione salvata in cloud e un tecnico sul posto in meno di 2 ore, la produzione è ripartita.",
      ],
    },
    bisogni: [
      { t: 'Artigiani e piccole imprese', d: 'Pochi PC ma indispensabili: preventivi, fatture elettroniche, posta. Se si fermano, si ferma il lavoro.' },
      { t: 'Uffici e agenzie', d: 'Rete e Wi-Fi stabili, stampanti multifunzione, accessi da remoto per chi lavora fuori sede.' },
      { t: 'Sicurezza della rete', d: 'Firewall, antivirus gestito e backup fuori sede contro guasti e ransomware.' },
    ],
    comuni: ['Bollate', 'Novate Milanese', 'Baranzate', 'Arese', 'Garbagnate Milanese', 'Senago', 'Cormano', 'Paderno Dugnano', 'Rho'],
    casi: ['lfm'],
    recensioni: ['milani'],
    faq: [
      { q: 'Coprite anche Milano città?', a: 'Sì, dal punto di Bollate seguiamo aziende nel Nord-Ovest milanese e a Milano. Gran parte dell’assistenza avviene da remoto, il tecnico viene in sede quando serve.' },
      { q: 'Avete un punto a Bollate?', a: 'Sì, in Piazza Indipendenza 8. È anche il negozio G8A Store per le riparazioni dei privati.' },
      { q: 'Fate anche firewall e sicurezza della rete?', a: "Sì: firewall, antivirus gestito, Wi-Fi aziendale e backup fuori sede, monitorati da remoto e inclusi nel canone del Noleggio Assistito." },
    ],
  },
  {
    slug: 'jerago-con-orago',
    nome: 'Jerago con Orago',
    provincia: 'VA',
    sede: 'Via Varesina 3, 21040 Jerago con Orago (VA)',
    sottodominio: 'jerago.g8a.it',
    titolo: 'Assistenza informatica aziende a Jerago con Orago e Besnate | G8A Technology',
    descrizione: 'Assistenza informatica per aziende a Jerago con Orago, Besnate, Cavaria e Albizzate: PC, server, backup e stampanti in un canone. Accanto alla nostra sede operativa.',
    lead: "Le aziende tra Jerago con Orago, Besnate, Cavaria e Albizzate sono le più vicine alla nostra sede operativa di Solbiate Arno, dove partono i tecnici e c'è il magazzino: qui arriviamo prima.",
    contesto: {
      titolo: 'A due passi dalla nostra sede operativa',
      testo: [
        "Il punto G8A di Via Varesina è a pochi chilometri dalla sede operativa di Solbiate Arno, da cui partono i tecnici e dove teniamo i computer di ricambio già pronti. Per le aziende di questa zona vuol dire interventi rapidi e sostituzioni senza attese.",
        "A Besnate, quando il server di un produttore di serramenti si è fermato per un calo di tensione, l'attività è ripartita in 40 minuti senza perdere dati. Per un gruppo immobiliare della stessa zona il centralino è tornato operativo in un'ora.",
      ],
    },
    bisogni: [
      { t: 'Piccola industria', d: 'PC in produzione e in ufficio, server dei disegni e dei dati, backup che si fanno da soli.' },
      { t: 'Telefonia e centralino', d: 'Centralino e linee aziendali con lo stesso referente dei computer, anche con FibraHero.' },
      { t: 'Sostituzione rapida', d: 'Se un PC si guasta, lo sostituiamo con uno già configurato dal nostro magazzino vicino.' },
    ],
    comuni: ['Jerago con Orago', 'Besnate', 'Cavaria con Premezzo', 'Albizzate', 'Solbiate Arno', 'Oggiona con Santo Stefano', 'Sumirago', 'Caronno Varesino', 'Carnago', 'Lonate Ceppino'],
    casi: ['serramenti', 'diadema'],
    recensioni: ['vallerini'],
    faq: [
      { q: 'Quanto siete vicini?', a: 'Molto: la sede operativa di Solbiate Arno, da cui partono i tecnici, è a pochi chilometri da Jerago con Orago, Besnate, Cavaria e Albizzate.' },
      { q: 'Prima avevo il sito jerago.g8a.it: è sempre G8A?', a: 'Sì, è la stessa azienda. Le informazioni per le imprese della zona ora sono in questa pagina; per riparazioni e acquisti da privato c’è il negozio G8A Store di Jerago con Orago.' },
      { q: 'Gestite anche il centralino?', a: 'Sì. Centralino, linee e connettività aziendale li gestiamo con FibraHero, la nostra linea per le aziende: un solo referente per telefono e computer.' },
    ],
  },
  {
    slug: 'lecco',
    nome: 'Lecco',
    provincia: 'LC',
    sede: 'Viale Dante Alighieri 22, 23900 Lecco (LC)',
    sottodominio: 'lecco.g8a.it',
    titolo: 'Assistenza informatica aziende a Lecco e provincia | G8A Technology',
    descrizione: 'Assistenza informatica per aziende a Lecco e provincia: computer, server, backup e stampanti in un canone, monitoraggio da remoto e tecnici in sede. Viale Dante 22.',
    lead: "Officine, aziende meccaniche, studi e attività del lago: a Lecco e provincia gestiamo computer, server, backup e stampanti in un unico canone, dal punto G8A di Viale Dante Alighieri.",
    contesto: {
      titolo: 'Lecco: meccanica, studi e attività del lago',
      testo: [
        "Il Lecchese è una delle zone della meccanica e della lavorazione dei metalli più importanti d'Italia, con tante aziende piccole e medie, studi tecnici e attività turistiche sul lago. Molte hanno bisogno di PC potenti per il CAD, di dati al sicuro e di qualcuno che risponda subito.",
        "Per le aziende di Lecco il monitoraggio da remoto fa la differenza: vediamo prima noi un disco che cede o un backup saltato e interveniamo a distanza, senza aspettare il tecnico. Quando serve venire in sede, il riferimento è il punto di Viale Dante Alighieri.",
      ],
    },
    bisogni: [
      { t: 'Officine e meccanica', d: 'Workstation per CAD/CAM, server dei progetti, PC in reparto resistenti e sempre aggiornati.' },
      { t: 'Studi tecnici', d: 'Disegni e progetti al sicuro con backup automatici e copia fuori sede.' },
      { t: 'Turismo e attività del lago', d: 'PC di reception e uffici, Wi-Fi per ospiti e personale, stampanti affidabili.' },
    ],
    comuni: ['Lecco', 'Valmadrera', 'Malgrate', 'Galbiate', 'Pescate', 'Civate', 'Olginate', 'Calolziocorte', 'Mandello del Lario'],
    recensioni: ['testa'],
    faq: [
      { q: 'Siete a Lecco anche se la sede è nel Varesotto?', a: 'Sì, abbiamo il punto G8A in Viale Dante Alighieri 22. Gran parte dell’assistenza avviene da remoto e con il monitoraggio continuo; quando serve, il tecnico viene in azienda.' },
      { q: 'Fornite workstation per il CAD?', a: 'Sì: workstation configurate su misura per CAD, CAM e rendering, anche a noleggio, con assistenza e sostituzione incluse.' },
      { q: 'Fate assistenza anche a stampanti e multifunzione?', a: 'Sì. Noleggio di stampanti e multifunzione con toner e assistenza inclusi, anche per uffici e studi di Lecco e provincia.' },
    ],
  },
];

export const cittaBySlug = (slug: string) => CITTA.find((c) => c.slug === slug)!;
