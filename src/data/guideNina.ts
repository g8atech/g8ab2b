// File generato da scripts/sync-guide.mjs (workflow "Guide di Nina"): guide di g8a approvate e firmate in Brain.
// Non modificarlo a mano: si corregge in Brain → Marketing → Guide.
/* eslint-disable */
export const GUIDE_NINA: any[] = [
  {
    "slug": "nas-ufficio-perche-averlo",
    "titolo": "NAS per l'ufficio: perché averlo e cosa fa davvero",
    "h1": "NAS per l'ufficio: perché averlo (e perché da solo non basta)",
    "descrizione": "NAS in ufficio: cos'è, a cosa serve, perché il RAID non è un backup e quando ti conviene averne uno. Guida semplice per PMI e studi professionali.",
    "intro": "Un NAS per l'ufficio è un archivio condiviso collegato alla tua rete: tutti i PC aprono gli stessi file da un posto solo, invece di averli sparsi su computer, chiavette e dischi esterni. Averlo ha senso se in ufficio siete in due o più e lavorate sugli stessi documenti. Ma attenzione: il NAS è un ottimo archivio, non è un backup completo.",
    "in_breve": [
      "Il NAS (Network Attached Storage, archiviazione collegata alla rete) è un piccolo server che custodisce i file di tutto l'ufficio in un posto solo.",
      "Serve a condividere documenti, ordinare le cartelle, decidere chi può vedere cosa e avere dischi che reggono la rottura di uno di loro (RAID).",
      "Il RAID protegge dal guasto di un disco, non da errori, ransomware, furto o incendio: serve sempre anche una copia fuori dal NAS.",
      "Il NAS diventa una scelta forte se è configurato bene, aggiornato e inserito in un piano di backup 3-2-1."
    ],
    "sezioni": [
      {
        "punti": [],
        "titolo": "Cos'è un NAS e come funziona in ufficio?",
        "paragrafi": [
          "NAS significa Network Attached Storage, cioè archiviazione collegata alla rete. È un apparecchio con uno o più dischi, sempre acceso, collegato al router o allo switch dell'ufficio. Dai PC lo vedi come una cartella condivisa.",
          "Non è un computer da usare ogni giorno: il suo lavoro è custodire i file e metterli a disposizione di chi ha il permesso."
        ]
      },
      {
        "punti": [
          "Una sola versione dei file: niente più \"contratto_finale_v7\" sparso su cinque PC.",
          "Permessi per persona o per gruppo: l'amministrazione vede le sue cartelle, i collaboratori le loro.",
          "Se un PC si rompe, i documenti di lavoro non vanno con lui.",
          "Più dischi insieme (RAID): se un disco si guasta, l'ufficio può continuare a lavorare mentre lo si sostituisce.",
          "Accesso ai file anche da fuori sede, se configurato in modo sicuro.",
          "I dati restano in casa tua, sotto il tuo controllo."
        ],
        "titolo": "Perché avere un NAS? I vantaggi concreti",
        "paragrafi": []
      },
      {
        "punti": [
          "RAID protegge da: rottura di un disco.",
          "RAID non protegge da: cancellazioni per errore, ransomware, furto, incendio, guasto dell'intero apparecchio."
        ],
        "titolo": "Il NAS è un backup? Perché il RAID non basta",
        "immagine": {
          "alt": "Schema: il RAID protegge dal guasto di un disco ma non da errori, ransomware, furto e incendio",
          "url": "https://ijrrnuurjbgugystlfry.supabase.co/storage/v1/object/public/guide-immagini/g8a/nas-ufficio-perche-averlo-fbe7a8b6.jpg",
          "fonte": "nina",
          "didascalia": "Cosa copre il RAID e cosa no."
        },
        "paragrafi": [
          "No. È l'errore più comune. Il RAID unisce più dischi per sopravvivere al guasto di uno di loro. Non crea però una copia del passato.",
          "Se un collega cancella una cartella per sbaglio, la cancellazione si riflette su tutti i dischi. Se un ransomware cifra i file condivisi, li cifra sul NAS. Se c'è un furto, un incendio o un allagamento, il NAS va perso con tutto il resto."
        ]
      },
      {
        "punti": [],
        "titolo": "Come si protegge davvero un NAS? La regola 3-2-1",
        "paragrafi": [
          "La regola 3-2-1 dice: tre copie dei dati, su due supporti diversi, di cui una fuori sede. Il NAS può essere una di queste copie oppure la destinazione dei backup dei PC, ma non deve essere l'unica difesa.",
          "Una copia fuori sede può stare in cloud o in un secondo luogo. Se vuoi approfondire, leggi la nostra guida sulla regola 3-2-1 per il backup aziendale."
        ]
      },
      {
        "punti": [
          "Non esporlo direttamente su internet aprendo porte sul router: è uno dei modi più semplici per essere attaccati.",
          "Non lasciare le password di fabbrica né un unico utente amministratore condiviso da tutti.",
          "Non ignorare gli aggiornamenti del sistema dell'apparecchio.",
          "Non pensare \"ho il RAID, sono a posto\" e smettere di fare backup.",
          "Non ignorare gli avvisi di disco in errore: un secondo guasto prima della sostituzione può far perdere i dati.",
          "Non metterlo in un angolo caldo e polveroso o senza gruppo di continuità."
        ],
        "titolo": "Cosa NON fare con un NAS in ufficio",
        "paragrafi": []
      },
      {
        "punti": [],
        "titolo": "Quando ti serve un NAS e quando no?",
        "paragrafi": [
          "Ti serve se avete più PC che condividono cartelle, se i file stanno su computer diversi senza ordine, o se una chiavetta persa sarebbe un problema serio.",
          "Se lavori da solo con pochi file, un buon backup automatico (anche in cloud) può bastare. Se invece servono programmi centralizzati o molti utenti, può servire un vero server. Il punto di partenza è sempre capire quali dati sono vitali per la tua attività."
        ]
      },
      {
        "punti": [],
        "titolo": "Cosa succede se ci affidi il NAS?",
        "paragrafi": [
          "Guardiamo come lavorate: quanti PC, quali dati, cosa fermerebbe l'attività. Poi proponiamo la configurazione adatta, con permessi, aggiornamenti e controllo a distanza dello stato dei dischi tramite la gestione remota dei PC.",
          "Il NAS si inserisce in un piano di backup completo, con copia fuori sede. Trovi i dettagli nelle pagine dei servizi indicate qui sotto."
        ]
      }
    ],
    "faq": [
      {
        "d": "Il NAS sostituisce il backup?",
        "r": "No. Il NAS custodisce i file e con il RAID regge il guasto di un disco, ma errori, ransomware, furto e incendio possono colpire anche lui. Serve una copia separata, meglio se fuori sede."
      },
      {
        "d": "Quanti dischi servono in un NAS?",
        "r": "Per avere ridondanza ne servono almeno due (RAID 1). Livelli come RAID 5 richiedono almeno tre dischi. La scelta dipende da quanti dati hai e da quanto ti pesa un fermo."
      },
      {
        "d": "Un NAS è meglio del cloud?",
        "r": "Dipende. Il NAS tiene i dati in sede ed è veloce sulla rete locale; il cloud è accessibile ovunque e sta fuori dall'ufficio. Spesso si usano insieme: NAS per lavorare, cloud per la copia fuori sede."
      },
      {
        "d": "Un NAS è sicuro dai ransomware?",
        "r": "Non da solo. Se un PC infetto ha accesso alle cartelle condivise, il ransomware può cifrare anche i file sul NAS. Servono permessi limitati, aggiornamenti e copie di backup separate."
      },
      {
        "d": "Chi lo gestisce se non ho un informatico?",
        "r": "Puoi affidare configurazione, aggiornamenti e controllo a un'assistenza informatica esterna, così sai che qualcuno guarda lo stato dei dischi e dei backup."
      }
    ],
    "link": [
      {
        "url": "/guide/backup-aziendale-regola-3-2-1",
        "testo": "Backup aziendale: la regola 3-2-1 spiegata semplice"
      },
      {
        "url": "/noleggio-backup",
        "testo": "Noleggio backup per l'azienda"
      },
      {
        "url": "/rmm",
        "testo": "Gestione remota dei PC aziendali"
      },
      {
        "url": "/assistenza-business",
        "testo": "Assistenza informatica per aziende"
      },
      {
        "url": "/noleggio-computer",
        "testo": "Noleggio computer per l'ufficio"
      },
      {
        "url": "/assistenza-informatica/gallarate",
        "testo": "Assistenza informatica a Gallarate"
      },
      {
        "url": "/assistenza-informatica/busto-arsizio",
        "testo": "Assistenza informatica a Busto Arsizio"
      }
    ],
    "extra": {},
    "copertina": {
      "alt": "NAS per l'ufficio: perché averlo (e perché da solo non basta)",
      "url": "https://ijrrnuurjbgugystlfry.supabase.co/storage/v1/object/public/guide-immagini/g8a/nas-ufficio-perche-averlo-foto-f38cd9cf.png",
      "fonte": "foto"
    },
    "firmato_da": "Antonio Arrigo",
    "pubblicata_il": "2026-11-13",
    "aggiornata_il": "2026-11-13"
  },
  {
    "slug": "backup-aziendale-regola-3-2-1",
    "titolo": "Backup aziendale: la regola 3-2-1 spiegata semplice",
    "h1": "Backup aziendale: la regola 3-2-1 spiegata semplice",
    "descrizione": "Backup aziendale: cos'è la regola 3-2-1, come applicarla in un ufficio piccolo, perché non basta il cloud e come provare che il ripristino funziona.",
    "intro": "Il backup aziendale fatto bene segue una regola semplice: tre copie dei dati, su due supporti diversi, con una copia fuori dall'ufficio. Si chiama regola 3-2-1 ed è il punto di partenza consigliato anche da CISA, l'agenzia americana per la cybersicurezza. In questa guida la spieghiamo senza gergo e ti mostriamo come applicarla a un ufficio con pochi PC.",
    "in_breve": [
      "3 copie: i dati di lavoro più due backup.",
      "2 supporti diversi: per esempio un disco o NAS in ufficio e una copia in cloud.",
      "1 copia fuori sede: così un incendio, un furto o un allagamento non cancellano tutto.",
      "Oggi aggiungi due controlli: una copia che il ransomware non può cancellare (offline o non modificabile) e un ripristino provato davvero."
    ],
    "sezioni": [
      {
        "punti": [
          "3 = i dati di lavoro + due copie di backup",
          "2 = due supporti diversi (disco esterno o NAS, cloud, nastro)",
          "1 = almeno una copia fuori sede"
        ],
        "titolo": "Cos'è la regola 3-2-1 del backup?",
        "immagine": {
          "alt": "Diagramma delle tre copie: dati in ufficio, disco locale e copia in cloud fuori sede",
          "url": "https://ijrrnuurjbgugystlfry.supabase.co/storage/v1/object/public/guide-immagini/g8a/backup-aziendale-regola-3-2-1-204ff2cb.jpg",
          "fonte": "nina",
          "didascalia": "Le tre copie della regola 3-2-1"
        },
        "paragrafi": [
          "È uno schema per non perdere i dati. Immagina i file di fatture, clienti e progetti del tuo ufficio. La regola dice di averne tre copie: quella che usi ogni giorno e due backup.",
          "Le due copie di backup stanno su due tipi di supporto diversi, così un singolo guasto non le colpisce insieme. Una delle due è in un altro luogo, lontano dall'ufficio."
        ]
      },
      {
        "punti": [],
        "titolo": "Perché una sola copia non basta mai?",
        "paragrafi": [
          "Con un solo backup, un guasto, un furto o un attacco ti lasciano a zero. I dischi si rompono, i PC si perdono, un dipendente cancella una cartella per errore.",
          "Non serve un evento drammatico: spesso il problema è scoprire, il giorno in cui serve, che il backup si era fermato mesi prima."
        ]
      },
      {
        "punti": [],
        "titolo": "Il cloud come OneDrive o Dropbox è un backup?",
        "paragrafi": [
          "No, di solito è una sincronizzazione. Se un file viene cancellato o cifrato da un virus, la modifica si copia anche online. Può avere uno storico delle versioni, ma non sostituisce un backup pensato per il ripristino.",
          "Chiedi sempre: se oggi un virus cifra tutti i file, posso tornare a ieri? Per quanti giorni indietro? Chi lo verifica?"
        ]
      },
      {
        "punti": [
          "Tieni almeno una copia scollegata o protetta da cancellazione",
          "Usa credenziali diverse per la console del backup",
          "Non lasciare la copia di sicurezza accessibile da ogni PC dell'ufficio"
        ],
        "titolo": "Come ti protegge il backup dal ransomware?",
        "paragrafi": [
          "Il ransomware è un virus che blocca i file e chiede un riscatto. Nella guida #StopRansomware, CISA spiega che molte varianti cercano di trovare e cancellare o cifrare i backup raggiungibili, per rendere impossibile il ripristino.",
          "Per questo oggi si parla di 3-2-1-1-0: alla regola base si aggiunge una copia offline o non modificabile e zero errori nelle verifiche di ripristino. Un disco sempre collegato al PC o alla rete può essere cifrato insieme ai file."
        ]
      },
      {
        "punti": [
          "Elenca cosa non puoi permetterti di perdere: gestionale, fatture, posta, cartelle condivise, PC dei collaboratori.",
          "Controlla dove stanno oggi i dati: sul PC, su un server, su un NAS, in cloud.",
          "Conta le copie vere e dove si trovano. Ne hai almeno due oltre ai dati di lavoro?",
          "Verifica se una copia è fuori dall'ufficio e se è protetta da cancellazioni.",
          "Guarda la data dell'ultimo backup riuscito.",
          "Prova a ripristinare un file o una cartella: è l'unico modo per sapere se funziona."
        ],
        "titolo": "Come applicare il backup aziendale in un ufficio piccolo, passo per passo",
        "paragrafi": [
          "Puoi partire da questi passi, anche senza un informatico interno."
        ]
      },
      {
        "punti": [],
        "titolo": "Ogni quanto devi provare il ripristino?",
        "paragrafi": [
          "Un backup che non hai mai ripristinato è una speranza, non una garanzia. Fissa un controllo periodico, per esempio una prova a calendario, e annota il risultato.",
          "Le indicazioni di CISA per le piccole imprese includono di provare ripristini completi e parziali, non solo di controllare che il backup risulti completato."
        ]
      },
      {
        "punti": [],
        "titolo": "Quando serve un tecnico e cosa fa G8A?",
        "paragrafi": [
          "Se hai più di un paio di PC, un gestionale o un server, conviene farti aiutare. Un tecnico imposta le copie, controlla che girino ogni giorno e prova i ripristini. Così il backup non dipende dalla memoria di qualcuno in ufficio.",
          "G8A segue aziende nelle province di Varese, Milano e Lecco. Il servizio di backup può essere incluso nel Noleggio Assistito, insieme a PC, stampanti e assistenza. I PC possono essere controllati a distanza con la gestione remota. Per i dettagli vedi le pagine dei servizi."
        ]
      }
    ],
    "faq": [
      {
        "d": "Cos'è la regola del backup 3-2-1?",
        "r": "Tre copie dei dati, su due supporti diversi, con una copia fuori sede."
      },
      {
        "d": "Un NAS basta come backup?",
        "r": "Da solo no: sta nello stesso ufficio e, se raggiungibile dalla rete, può essere colpito da un virus. Serve almeno una copia fuori sede e una protetta."
      },
      {
        "d": "Cos'è il 3-2-1-1-0?",
        "r": "È la regola 3-2-1 con una copia offline o non modificabile in più e zero errori nelle verifiche di ripristino."
      },
      {
        "d": "OneDrive o Google Drive sostituiscono il backup?",
        "r": "Di norma no: sincronizzano i file, comprese le cancellazioni e i file cifrati da un virus."
      },
      {
        "d": "Come so se il mio backup funziona?",
        "r": "Provando a ripristinare dei file. Controlla anche la data dell'ultimo backup riuscito."
      },
      {
        "d": "Il backup aziendale ha obblighi di legge?",
        "r": "Dipende dal tuo settore e dai dati trattati. Per GDPR e altre norme chiedi al tuo consulente."
      }
    ],
    "link": [
      {
        "url": "/noleggio-backup",
        "testo": "Noleggio backup per aziende"
      },
      {
        "url": "/rmm",
        "testo": "Gestione remota dei PC aziendali (RMM)"
      },
      {
        "url": "/assistenza-business",
        "testo": "Noleggio Assistito di PC, stampanti e assistenza"
      },
      {
        "url": "/noleggio-computer",
        "testo": "Noleggio computer aziendali"
      },
      {
        "url": "/assistenza-informatica",
        "testo": "Assistenza informatica per aziende"
      },
      {
        "url": "/assistenza-informatica/gallarate",
        "testo": "Assistenza informatica a Gallarate"
      },
      {
        "url": "/assistenza-informatica/busto-arsizio",
        "testo": "Assistenza informatica a Busto Arsizio"
      },
      {
        "url": "/testimonianze-casistudio",
        "testo": "Casi e testimonianze"
      }
    ],
    "extra": {},
    "copertina": {
      "alt": "Schema della regola 3-2-1 per il backup aziendale: tre copie, due supporti, una fuori sede",
      "url": "https://ijrrnuurjbgugystlfry.supabase.co/storage/v1/object/public/guide-immagini/g8a/backup-aziendale-regola-3-2-1-2596e249.jpg",
      "fonte": "nina"
    },
    "firmato_da": "Antonio Arrigo",
    "pubblicata_il": "2026-11-12",
    "aggiornata_il": "2026-11-12"
  }
];
