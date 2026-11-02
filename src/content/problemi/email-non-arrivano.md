---
title: "Le email non arrivano o non partono"
seoTitle: "Email che non arrivano o non partono: cosa fare | G8A"
description: "Un cliente dice di averti scritto ma la mail non c'è, oppure le tue restano nella Posta in uscita. I controlli da fare prima di pensare al peggio."
updated: 2026-11-02
area: Email
urgenza: media
tempo: 10 minuti
servizio: /rmm
sintomi:
  - "Qualcuno ti ha scritto ma nella Posta in arrivo non trovi nulla"
  - "Le email restano nella Posta in uscita e non partono"
  - "Ricevi messaggi di errore di consegna (mail tornate indietro)"
  - "Outlook chiede di continuo la password"
passi:
  - t: "Controlla Spam e Posta indesiderata"
    d: "Cerca il messaggio anche in Spam, Posta indesiderata, Archivio e nelle altre cartelle. Usa la ricerca per mittente o per oggetto su tutte le cartelle."
  - t: "Prova dalla webmail"
    d: "Accedi alla tua casella dal browser (la webmail del tuo fornitore di posta). Se lì la mail c'è, il problema è nel programma di posta del computer, non nella casella."
  - t: "Controlla lo spazio della casella"
    d: "Una casella piena rifiuta i nuovi messaggi. Dalla webmail verifica lo spazio usato: se sei al limite, svuota il Cestino e cancella le mail con grossi allegati."
  - t: "Verifica la connessione e riavvia il programma"
    d: "Controlla che internet funzioni aprendo un sito qualsiasi. Poi chiudi del tutto Outlook (o il programma che usi) e riaprilo."
  - t: "Leggi il messaggio di errore"
    d: "Se una mail ti torna indietro, il testo spiega il motivo: indirizzo sbagliato, casella del destinatario piena, messaggio bloccato. Fai una foto: ci servirà se devi chiamarci."
quandoChiamare:
  - "Il problema riguarda tutti in ufficio e non solo te"
  - "Più clienti ti dicono che le tue mail finiscono nello spam"
  - "Le mail tornano indietro con errori che parlano di blacklist, SPF o DKIM"
  - "Qualcuno riceve email dal tuo indirizzo che tu non hai mai scritto"
  - "Hai inserito la password su una pagina dopo aver cliccato un link in una mail"
faq:
  - q: "Perché le mie email finiscono nello spam dei clienti?"
    a: "Spesso perché il dominio non ha impostati i record SPF, DKIM e DMARC, che dicono agli altri server che le tue email sono autentiche. È una configurazione da fare una volta sul dominio."
  - q: "Outlook mi chiede sempre la password: è normale?"
    a: "No. Può dipendere da una password cambiata non aggiornata nel programma, da un profilo danneggiato o da un problema del fornitore. Se succede a più persone insieme, chiamaci."
---

## Perché succede

Quando le email non arrivano, il problema può essere in tre posti diversi:

- **Nel programma di posta** del computer (Outlook, Thunderbird, Posta di Windows): profilo danneggiato, password vecchia, cartelle troppo grandi.
- **Nella casella**: spazio esaurito, regole che spostano i messaggi, filtri antispam troppo severi.
- **Nel dominio**: configurazioni mancanti (SPF, DKIM, DMARC) che fanno finire le tue mail nello spam altrui, o un dominio scaduto.

Se qualcuno riceve mail dal tuo indirizzo che non hai scritto, o hai inserito la password dopo aver cliccato un link, leggi subito la scheda su [cosa fare se hai cliccato un'email sospetta](/problemi-noti/email-sospetta-phishing).
