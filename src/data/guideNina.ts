// File generato da scripts/sync-guide.mjs (workflow "Guide di Nina"): guide di g8a approvate e firmate in Brain.
// Non modificarlo a mano: si corregge in Brain → Marketing → Guide.
/* eslint-disable */
export const GUIDE_NINA: any[] = [
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
