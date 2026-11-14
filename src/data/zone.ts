// Pagine "Assistenza informatica per aziende a <comune>" per i comuni principali intorno alle sedi.
// Ogni comune ha il suo testo sul territorio: niente copie con il nome cambiato.
// Solo fatti verificabili sul territorio e sulle sedi G8A; nessun cliente o numero inventato.

export type Zona = {
  slug: string;
  nome: string;
  provincia: 'VA' | 'MI' | 'LC';
  sede: string; // slug della sede G8A di riferimento (in citta.ts)
  area: string; // come la chiamano le aziende del posto
  contesto: string[]; // 2 paragrafi propri
  vicini: string[]; // comuni confinanti o vicini
  focus: string; // il bisogno più tipico, per titolo e FAQ
};

export const ZONE: Zona[] = [
  {
    slug: 'varese', nome: 'Varese', provincia: 'VA', sede: 'jerago-con-orago', area: 'Varese e provincia',
    contesto: [
      "Varese è il capoluogo: uffici, studi professionali, servizi e un tessuto di piccole e medie imprese che arriva fino alle valli e al confine svizzero. Molte realtà hanno da 2 a 30 postazioni e nessun informatico interno.",
      "Per le aziende di Varese il punto G8A più vicino è quello di Jerago con Orago, sulla Varesina, e la sede operativa di Solbiate Arno: da lì partono i tecnici per gli interventi in sede, mentre il grosso dell'assistenza avviene da remoto.",
    ],
    vicini: ['Malnate', 'Induno Olona', 'Gazzada Schianno', 'Azzate', 'Buguggiate', 'Casciago', 'Lozza'],
    focus: 'studi professionali e uffici',
  },
  {
    slug: 'legnano', nome: 'Legnano', provincia: 'MI', sede: 'busto-arsizio', area: 'Alto Milanese',
    contesto: [
      "Legnano è il centro dell'Alto Milanese, con una lunga tradizione industriale nella meccanica e nel tessile e oggi tante aziende di servizi, commercio e studi tecnici. Officine e uffici che non possono restare fermi per un PC o un server.",
      "Il punto G8A di riferimento per Legnano è quello di Busto Arsizio, in Via Quintino Sella, a pochi chilometri: per gli interventi in sede i tecnici arrivano da lì o dalla sede operativa di Solbiate Arno.",
    ],
    vicini: ['Castellanza', 'Rescaldina', 'Cerro Maggiore', 'San Vittore Olona', 'Canegrate', 'Parabiago', 'Villa Cortese'],
    focus: 'aziende produttive e studi tecnici',
  },
  {
    slug: 'saronno', nome: 'Saronno', provincia: 'VA', sede: 'bollate', area: 'Saronnese',
    contesto: [
      "Saronno è un nodo tra Varese, Como e Milano, con un'area produttiva estesa, commercio e molti studi professionali. Le aziende del Saronnese lavorano spesso su più sedi o con collaboratori fuori ufficio.",
      "Per Saronno le sedi G8A più vicine sono Bollate e Busto Arsizio: l'assistenza parte da remoto e, quando serve, un tecnico viene in azienda.",
    ],
    vicini: ['Caronno Pertusella', 'Origgio', 'Uboldo', 'Gerenzano', 'Cislago', 'Solaro', 'Rovello Porro'],
    focus: 'PMI con più sedi',
  },
  {
    slug: 'castellanza', nome: 'Castellanza', provincia: 'VA', sede: 'busto-arsizio', area: 'Valle Olona',
    contesto: [
      "Castellanza, tra Busto Arsizio e Legnano, ospita l'Università LIUC e un tessuto di aziende manifatturiere e di servizi lungo la Valle Olona. Realtà dove produzione e ufficio dipendono dagli stessi computer e dalla stessa rete.",
      "Il punto G8A di Busto Arsizio, in Via Quintino Sella, è a pochi minuti: da lì e dalla sede operativa di Solbiate Arno seguiamo le aziende della zona.",
    ],
    vicini: ['Busto Arsizio', 'Legnano', 'Olgiate Olona', 'Marnate', 'Rescaldina', 'Gorla Minore'],
    focus: 'aziende manifatturiere',
  },
  {
    slug: 'cassano-magnago', nome: 'Cassano Magnago', provincia: 'VA', sede: 'gallarate', area: 'area di Gallarate',
    contesto: [
      "Cassano Magnago, tra Gallarate e Busto Arsizio, ha molte piccole imprese artigiane e commerciali, insieme a studi e uffici. Spesso il titolare fa anche da tecnico dell'ufficio, e ogni guasto ruba ore al lavoro vero.",
      "Il punto G8A più vicino è quello di Gallarate, in Viale Milano: per gli interventi in sede partiamo da lì o dalla sede operativa di Solbiate Arno, a pochi chilometri.",
    ],
    vicini: ['Gallarate', 'Busto Arsizio', 'Cavaria con Premezzo', 'Oggiona con Santo Stefano', 'Fagnano Olona', 'Solbiate Arno'],
    focus: 'artigiani e piccole imprese',
  },
  {
    slug: 'samarate', nome: 'Samarate', provincia: 'VA', sede: 'gallarate', area: 'area di Malpensa',
    contesto: [
      "Samarate, con Verghera e San Macario, sta tra Gallarate, Busto Arsizio e Malpensa: logistica, servizi legati all'aeroporto e piccole aziende produttive, con turni e postazioni condivise.",
      "Le aziende di Samarate hanno il punto G8A di Gallarate a pochi minuti e quello di Busto Arsizio poco più in là.",
    ],
    vicini: ['Gallarate', 'Busto Arsizio', 'Cardano al Campo', 'Ferno', 'Lonate Pozzolo'],
    focus: 'logistica e servizi',
  },
  {
    slug: 'somma-lombardo', nome: 'Somma Lombardo', provincia: 'VA', sede: 'gallarate', area: 'area di Malpensa',
    contesto: [
      "Somma Lombardo, a ridosso di Malpensa e del Ticino, ha aziende di logistica, servizi aeroportuali, commercio e artigianato. Per chi lavora con spedizioni e orari stretti, un PC fermo è una consegna saltata.",
      "Il punto G8A di riferimento è quello di Gallarate, in Viale Milano: assistenza da remoto e tecnici in sede quando serve.",
    ],
    vicini: ['Gallarate', 'Arsago Seprio', 'Casorate Sempione', 'Vergiate', 'Golasecca', 'Vizzola Ticino'],
    focus: 'logistica e commercio',
  },
  {
    slug: 'cardano-al-campo', nome: 'Cardano al Campo', provincia: 'VA', sede: 'gallarate', area: 'area di Malpensa',
    contesto: [
      "Cardano al Campo confina con Gallarate e con l'area di Malpensa: piccole imprese, artigiani, uffici e attività legate all'aeroporto, spesso con pochi computer ma tanto lavoro da non perdere.",
      "Il punto G8A di Gallarate è praticamente accanto: per l'assistenza in sede partiamo da lì o dalla sede operativa di Solbiate Arno.",
    ],
    vicini: ['Gallarate', 'Samarate', 'Ferno', 'Casorate Sempione', 'Somma Lombardo'],
    focus: 'piccole imprese e uffici',
  },
  {
    slug: 'tradate', nome: 'Tradate', provincia: 'VA', sede: 'jerago-con-orago', area: 'Tradatese',
    contesto: [
      "Tradate è il centro del Tradatese, tra Varese e Saronno: studi professionali, commercio e aziende artigiane e produttive sparse tra i comuni vicini.",
      "Per Tradate il riferimento è il punto G8A di Jerago con Orago e la sede operativa di Solbiate Arno, entrambi a breve distanza.",
    ],
    vicini: ['Venegono Superiore', 'Venegono Inferiore', 'Castiglione Olona', 'Castelseprio', 'Locate Varesino', 'Lonate Ceppino'],
    focus: 'studi e aziende artigiane',
  },
  {
    slug: 'castiglione-olona', nome: 'Castiglione Olona', provincia: 'VA', sede: 'jerago-con-orago', area: 'Valle Olona',
    contesto: [
      "Castiglione Olona, nella Valle Olona tra Varese e Tradate, ha un'area produttiva con aziende manifatturiere e artigiane accanto al centro storico, oltre a studi e attività commerciali.",
      "Le aziende di Castiglione Olona hanno vicino la sede operativa G8A di Solbiate Arno e il punto di Jerago con Orago.",
    ],
    vicini: ['Venegono Inferiore', 'Gornate Olona', 'Lozza', 'Vedano Olona', 'Tradate', 'Morazzone'],
    focus: 'aziende manifatturiere',
  },
  {
    slug: 'rho', nome: 'Rho', provincia: 'MI', sede: 'bollate', area: 'Nord-Ovest Milano',
    contesto: [
      "Rho, nel Nord-Ovest di Milano, ospita la Fiera di Milano e un'area di aziende commerciali, logistiche e di servizi. Uffici che lavorano con clienti e fornitori in movimento, e che hanno bisogno di rete e computer sempre pronti.",
      "Il punto G8A più vicino è quello di Bollate, in Piazza Indipendenza: assistenza da remoto e tecnici in azienda quando serve.",
    ],
    vicini: ['Pero', 'Arese', 'Lainate', 'Pregnana Milanese', 'Cornaredo', 'Settimo Milanese'],
    focus: 'aziende commerciali e di servizi',
  },
  {
    slug: 'garbagnate-milanese', nome: 'Garbagnate Milanese', provincia: 'MI', sede: 'bollate', area: 'Groane',
    contesto: [
      "Garbagnate Milanese, ai margini del Parco delle Groane, ha piccole imprese, commercio, studi e uffici legati a Milano. Tante realtà da pochi computer che non hanno un informatico interno.",
      "Il punto G8A di Bollate è a pochi minuti: da lì seguiamo le aziende della zona, in sede e da remoto.",
    ],
    vicini: ['Bollate', 'Arese', 'Senago', 'Cesate', 'Lainate', 'Caronno Pertusella'],
    focus: 'piccole imprese e studi',
  },
  {
    slug: 'paderno-dugnano', nome: 'Paderno Dugnano', provincia: 'MI', sede: 'bollate', area: 'Nord Milano',
    contesto: [
      "Paderno Dugnano, a nord di Milano, ha zone produttive con aziende meccaniche, artigiane e commerciali, oltre a molti uffici. Realtà dove produzione e amministrazione dipendono dagli stessi computer.",
      "Le aziende di Paderno Dugnano hanno il punto G8A di Bollate a pochi chilometri.",
    ],
    vicini: ['Bollate', 'Senago', 'Cormano', 'Cusano Milanino', 'Nova Milanese', 'Varedo', 'Limbiate'],
    focus: 'aziende produttive',
  },
  {
    slug: 'arese', nome: 'Arese', provincia: 'MI', sede: 'bollate', area: 'Nord-Ovest Milano',
    contesto: [
      "Arese, tra Rho e Bollate, ha aziende di servizi, commercio e uffici, molte nate nell'area che un tempo era dell'Alfa Romeo e oggi è un polo commerciale e direzionale.",
      "Il punto G8A di Bollate è il riferimento più vicino per l'assistenza in sede; il resto lo gestiamo da remoto.",
    ],
    vicini: ['Bollate', 'Rho', 'Garbagnate Milanese', 'Lainate', 'Baranzate'],
    focus: 'uffici e aziende di servizi',
  },
  {
    slug: 'valmadrera', nome: 'Valmadrera', provincia: 'LC', sede: 'lecco', area: 'Lecchese',
    contesto: [
      "Valmadrera, appena fuori Lecco, ha aziende metalmeccaniche e artigiane, insieme a studi e attività commerciali. Il Lecchese è terra di piccole imprese produttive, dove un fermo dell'ufficio blocca anche le spedizioni.",
      "Il punto G8A di Lecco, in Viale Dante Alighieri, è a pochi minuti: assistenza in sede e da remoto.",
    ],
    vicini: ['Lecco', 'Malgrate', 'Civate', 'Oggiono', 'Galbiate'],
    focus: 'aziende metalmeccaniche e artigiane',
  },
  {
    slug: 'calolziocorte', nome: 'Calolziocorte', provincia: 'LC', sede: 'lecco', area: 'Valle San Martino',
    contesto: [
      "Calolziocorte, nella Valle San Martino lungo l'Adda, ha piccole imprese produttive e artigiane, commercio e studi professionali, collegate a Lecco e alla Bergamasca.",
      "Il punto G8A di Lecco è il riferimento per l'assistenza in sede; il monitoraggio e il supporto di tutti i giorni avvengono da remoto.",
    ],
    vicini: ['Lecco', 'Olginate', 'Vercurago', 'Monte Marenzo', 'Carenno', 'Erve'],
    focus: 'piccole imprese produttive',
  },
];

export const zonaBySlug = (slug: string) => ZONE.find((z) => z.slug === slug);
