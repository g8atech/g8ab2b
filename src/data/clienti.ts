// Testimonianze e casi studio reali, ripresi parola per parola dal sito storico g8a.it.
import milani from '../assets/milani.jpg';
import testa from '../assets/testa.jpg';
import coriani from '../assets/coriani.jpg';

export type Testimonianza = {
  id: string;
  nome: string;
  ruolo: string;
  breve: string; // estratto per le schede
  testo: string[]; // testo completo, per paragrafi
  foto?: ImageMetadata;
  sigla?: string;
  sito?: string;
};

export const TESTIMONIANZE: Testimonianza[] = [
  {
    id: 'milani',
    nome: 'Marco Milani',
    ruolo: 'Titolare, Protalga Srl',
    foto: milani,
    sito: 'https://www.protalga.com',
    breve: 'La loro formula di noleggio assistito ci ha permesso di avere accesso alle migliori tecnologie senza dover sostenere un investimento iniziale eccessivo.',
    testo: [
      'Esperienza estremamente positiva con G8A, ha permesso alla mia azienda di fare un vero e proprio salto di qualità tecnologico. Prima di affidarci a G8A, la nostra situazione era piuttosto caotica. Avevamo computer obsoleti, un sistema di posta elettronica non sicuro, una stampante inadeguata alle nostre esigenze e nessun sistema di backup. Tutto questo causava notevoli perdite di tempo e problemi di sicurezza.',
      "G8A Technology ha analizzato attentamente le nostre esigenze e ci ha proposto una soluzione completa e personalizzata, che includeva praticamente tutto: computer velocissimo con un server per i nostri dati aziendali; stampante per l'ufficio e stampante ad etichette per la nostra produzione. Il tutto con la loro formula di noleggio assistito, che ci ha permesso di avere accesso alle migliori tecnologie senza dover sostenere un investimento iniziale eccessivo e con la tranquillità di avere un'assistenza dedicata sempre disponibile.",
      'Consiglio vivamente G8A Technology a tutte le aziende che desiderano migliorare la propria efficienza e sicurezza informatica. La loro professionalità, competenza e attenzione alle esigenze del cliente li rendono il partner ideale.',
    ],
  },
  {
    id: 'coriani',
    nome: 'Paolo Coriani',
    ruolo: 'Titolare, Cornflor',
    foto: coriani,
    sito: 'https://www.cornflor.it',
    breve: "Dimenticatevi l'acquisto di computer e stampanti con relativi costi di manutenzione e obsolescenza: ho sempre a disposizione strumenti all'avanguardia e perfettamente funzionanti.",
    testo: [
      "Da quando ho scoperto G8A Technology, il mio ufficio ha assunto un'organizzazione completamente nuova! Dimenticatevi l'acquisto di computer e stampanti con relativi costi di manutenzione e obsolescenza: grazie al loro servizio di noleggio assistito ho sempre a disposizione strumenti all'avanguardia e perfettamente funzionanti.",
      'Ho scelto il noleggio di un mini PC performante e compatto, ideale per lo spazio ristretto della mia scrivania. La stampante multifunzione, sempre inclusa nel pacchetto, mi permette di stampare, scansionare e copiare documenti con la massima qualità e semplicità.',
      'Ma il vero punto di forza di G8A Technology è il loro servizio di noleggio assistito. Il team è sempre pronto a risolvere qualsiasi problematica tecnica, sia in remoto che con interventi in loco. In un paio di click o con una telefonata.',
    ],
  },
  {
    id: 'testa',
    nome: 'Geom. Gabriele Testa',
    ruolo: 'Titolare, Dream House Group Srl',
    foto: testa,
    sito: 'https://www.dhgroupsrl.it',
    breve: 'Avevo bisogno di un computer per CAD e di un server per i miei dati aziendali e loro mi hanno aiutato a trovare la soluzione perfetta per le mie esigenze.',
    testo: [
      "G8A Technology mi ha fornito un servizio eccellente per l'allestimento del mio ufficio. Avevo bisogno di un computer per CAD e di un server per i miei dati aziendali e loro mi hanno aiutato a trovare la soluzione perfetta per le mie esigenze.",
      'Il personale è stato molto competente e disponibile, e mi ha fornito tutte le informazioni di cui avevo bisogno. I prodotti che mi hanno fornito sono di alta qualità e funzionano perfettamente. Sono molto soddisfatto del servizio ricevuto e consiglio vivamente G8A Technology a chiunque abbia bisogno di soluzioni IT per la propria azienda.',
    ],
  },
  {
    id: 'vallerini',
    nome: 'Dott.ssa Antonella Vallerini',
    ruolo: 'Studio di consulenza del lavoro, Gallarate',
    sigla: 'AV',
    breve: 'Tutti molto presenti ed organizzati, sempre pronti ad intervenire in qualsiasi momento risolvendo qualsiasi problema.',
    testo: [
      'G8A Technology segue il mio studio da molti anni ed ho visto crescere nel tempo le capacità e la solidità del team di lavoro. Tutti molto presenti ed organizzati, sempre pronti ad intervenire in qualsiasi momento risolvendo qualsiasi problema. Sono in grado di offrire una consulenza completa e soprattutto adatta alle dimensioni della realtà aziendale con attenzione anche al budget di spesa.',
      'È rassicurante sapere di poter contare sempre su un’assistenza tempestiva e sempre al mio fianco, provare per credere!',
    ],
  },
  {
    id: 'soaptec',
    nome: 'Soaptec Srl',
    ruolo: 'Lonate Ceppino (VA)',
    sigla: 'S',
    sito: 'https://www.soaptec.biz',
    breve: 'Siamo finalmente riusciti dopo tanto tempo ad avere un’assistenza continuativa e immediata.',
    testo: [
      'Esperienza generale assolutamente positiva. Siamo finalmente riusciti dopo tanto tempo ad avere un’assistenza continuativa e immediata. Fin da subito la sensazione è stata di fiducia e professionalità. In generale la velocità di reazione di fronte a un problema o a una richiesta è davvero ottima!',
      'Siamo “all’inizio” della nostra collaborazione ma ci sono tante proposte e progetti che fanno ben sperare in un miglioramento della gestione dei dati. Tutto il team è sempre stato molto professionale, competente e disponibile.',
    ],
  },
];

export const byId = (ids: string[]) => ids.map((id) => TESTIMONIANZE.find((t) => t.id === id)!).filter(Boolean);

export type Caso = {
  id: string;
  titolo: string;
  cliente: string;
  referente: string;
  luogo: string;
  fermo: string;
  situazione: string;
  criticita: string;
  intervento: string[];
  esito: string;
  icon: string;
};

export const CASI: Caso[] = [
  {
    id: 'serramenti',
    titolo: 'Server KO, preventivi fermi',
    cliente: 'F.A. Serramenti',
    referente: 'Andrea Soave, titolare',
    luogo: 'Besnate (VA)',
    fermo: '40 minuti',
    icon: 'server',
    situazione: "F.A. Serramenti non riusciva più a raggiungere il mini-server che ospita il gestionale Danea, bloccando l'emissione di preventivi. L'attività commerciale era completamente ferma.",
    criticita: "Il gestionale è il cuore operativo dell'ufficio tecnico e amministrativo. Ogni minuto perso rallenta ordini, vendite e risposta al cliente.",
    intervento: [
      'Il cliente si trova a circa 20 minuti da noi: un nostro tecnico è partito immediatamente.',
      'All’arrivo, diagnosticato danno hardware da calo di tensione.',
      'Sostituito l’intero server, configurato e ripristinato da backup.',
      'Verifica completa del funzionamento del gestionale Danea.',
    ],
    esito: 'Attività ripartita senza perdita di dati.',
  },
  {
    id: 'diadema',
    titolo: 'Centralino fuori uso, comunicazioni bloccate',
    cliente: 'Diadema Real Estate Group',
    referente: 'Lorenzo Balbo',
    luogo: 'Besnate (VA)',
    fermo: '1 ora',
    icon: 'phone',
    situazione: "Il centralino telefonico in noleggio assistito ha improvvisamente smesso di funzionare, isolando completamente l'ufficio da clienti e fornitori. Nessuna chiamata in entrata o in uscita era possibile.",
    criticita: "Per un'azienda che gestisce appuntamenti, forniture e comunicazioni quotidiane, l'interruzione della linea telefonica significa paralisi operativa e danno reputazionale.",
    intervento: [
      'Help desk da remoto attivato subito, con assistenza in videochiamata per una prima diagnosi.',
      'Non essendo risolvibile a distanza, un nostro tecnico è partito per l’intervento in loco.',
      'Individuato un guasto al gruppo di alimentazione, compromesso probabilmente da una micro-interruzione elettrica.',
      'Sostituito il componente con una nuova unità certificata e testate tutte le funzioni: interni, IVR, deviazioni, app mobile.',
    ],
    esito: 'Centralino pienamente operativo, nessuna perdita di configurazione, chiamate o log.',
  },
  {
    id: 'lfm',
    titolo: 'Fulmine sul firewall, produzione ferma',
    cliente: 'LFM Print Srl',
    referente: 'Azienda del settore produttivo',
    luogo: 'Bareggio (MI)',
    fermo: '2 ore',
    icon: 'zap',
    situazione: "Un fulmine ha danneggiato irreparabilmente il firewall principale del cliente. L'intera rete aziendale era paralizzata e l'azienda, del settore produttivo, era completamente ferma.",
    criticita: 'Senza firewall nessuna connessione interna o esterna era possibile. Il rischio di fermo prolungato e di danni economici era altissimo.',
    intervento: [
      'Essendo cliente con Noleggio Assistito, il backup cloud del firewall è stato subito ripristinato su un nuovo apparato.',
      'Un tecnico sul posto in meno di 2 ore.',
      'Sostituzione e riconfigurazione completa, tutto funzionante.',
    ],
    esito: 'Produzione ripristinata al 100%.',
  },
];
