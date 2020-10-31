// devo importare express
const express = require('express');

// tramite la funzione express creo l'oggetto app
const app = express();

// permette di visualizzare i key-value dell'oggetto
console.dir(app);

// permette di soddisfare le richieste get
// anche qui va inserita una funzione di callback
// app.use((req, res) => {
//     console.log('una nuova richiesta');
//     res.send('Stiamo elaborando la tua risposta.');
// })


// serve per instradare con un pattern
// /path/:pattern
app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit!</h1>`);
})

// serve per instradare con un pattern
// /path/:pattern
app.get('/r/:subreddit/:postId', (req, res) => {
    const {subreddit, postId} = req.params;
    res.send(`<h1>Browsing the ${postId} subreddit!</h1>`);
})

app.get('/search', (req, res) => {
    const {q} = req.query;
    res.send(`Search result for ${q}`);
})

// risposta che arriva quando si va sulla home page
app.get('/', (req,res) => {
    // risposta che sarà mandata all'utente
    res.send('<h1> This is the home page </h1>');
})

// specifico la risposta quando l'utente cerca /cats
app.get('/cats', (req,res) => {
    // risposta che sarà mandata all'utente
    res.send('meow');
})

// risposta ad una post request
app.post('/cats', (req,res) => {
    // risposta che sarà mandata all'utente
    res.send('this is a post request');
})

// risposta ad una get request per qualunque altra path
app.get('*', (req,res) => {
    // risposta che sarà mandata all'utente
    res.send(`Don't know what to do!`);
})

// permetto al server di sentire le richieste
// serve specificare la porta e un callback function
app.listen(3000, () =>{
    console.log('Listening on port 3000.')
});






