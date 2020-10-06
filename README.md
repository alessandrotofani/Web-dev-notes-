# Web developer notes 

##Introduzione
Ricerca di un sito: si fa una richiesta del contenuto tramite http. 
Viaggio dell'informazione: User - internet providers - server - user
Il server spacchetta il sito e lo invia in differenti pacchetti all' user. I pacchetti seguono strade diverse. Non interessano le diverse strade, ma che arrivino. 

Trovare il giusto indirizzo: la query è mandata all'ISP internet server provider, in cui i DNS prendono il nome del dominio e lo trasformano in IP.
Andare all'indirizzo: la richiesta della pagina è inviata all'indirizzo Ip tramite HTTP. 
Risposta del server: il server cerca la pagina a cui siamo interessati. Costruisce il contenuto, a volte richiedendo info da database. Risponde con qualsiasi combinazione di HTML, CSS, Javascript. 


*Frontend*: quello che vediamo e con cui interagiamo. Client side. html, css, javascript. 
*Backend*: tutto il resto che accade. 

*Html*: HyperText Markup Language. Definisce la struttura di una pagina web. Descrivo ciò che voglio. Scheletro della pagina. Es. metti immagine qui 
*CSS*: Cascading Style Sheets. Definisce lo stile di Html. Es. tutto il testo rosa
*Javascript*: aggiunge logica e interattività alla pagina. Può caricare dati. 


Mdn mozzilla developer network

##Html

Regola generale:     <tagname> contenuto </tagname>

Bisogna definire la struttura del documento. Questo passaggio può essere fatto molto semplicemente in Sublimetext scrivendo html e poi premendo Tab. 
Posso commentare con *Ctrl + /*

Bisogna mettere tutto dentro <html> <\html>
*<head>*: tutto ciò che non si vede. Metadata
*<body>*: contenuto della pagina 

