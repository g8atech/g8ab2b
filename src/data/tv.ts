// Uscite TV: l'intervista ad Antonio Arrigo a PMI Stories (Value 24).
// youtubeId: quando il video è su YouTube, metti qui l'ID (es. 'dQw4w9WgXcQ') e il sito userà YouTube
// al posto del file in /public/video (che allora si può cancellare).
export const TV = {
  programma: 'PMI Stories',
  canale: 'Value 24',
  sky: 490,
  dtt: 254,
  data: '24 ottobre 2026',
  dataIso: '2026-10-24',
  ospite: 'Antonio Arrigo',
  ruolo: 'AD G8A Technology',
  titolo: 'Il Noleggio Assistito di G8A spiegato in TV',
  descrizione:
    "Antonio Arrigo, AD di G8A Technology, ospite di PMI Stories su Value 24 (Sky 490, digitale terrestre 254): cos'è il Noleggio Assistito, in cosa è diverso dal noleggio operativo e perché un solo interlocutore fa risparmiare tempo alle PMI.",
  youtubeId: '',
  video: '/video/g8a-pmi-stories.mp4',
  poster: '/video/g8a-pmi-stories.jpg',
  durata: 'PT5M',
  capitoli: [
    { t: 71, l: 'Quanto costa un computer fermo' },
    { t: 113, l: 'Noleggio Assistito o noleggio operativo?' },
    { t: 167, l: 'Tutto incluso nel canone, anche le uscite' },
    { t: 192, l: 'Un solo interlocutore, niente ticket' },
    { t: 243, l: "AI e rinnovo dei computer ogni 3 anni" },
  ],
};

export const mmss = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
