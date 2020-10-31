// includo express
const express = require('express');
// creo il server
const app = express();
// serve per modificare il path di views
const path = require('path');

// uso set per usare ejs
// non serve il require perchè lo richiamo già qui dentro
app.set('view engine', 'ejs')

// setto il path della cartella views
// serve per far capire al programma dove si trova la cartella views
// __dirname = path dove sta questo file (index.js)
// non tiene conto di dove stiamo eseguendo il file
app.set('views', path.join(__dirname, '/views'))


app.get('/', (req, res) => {
    // comando per mandare all'user la pagina home.ejs
    // non serve specificare la dir poichè guarda direttamente in view
    res.render('home.ejs')
})


// si attiva quando c'è un pattern compatibile
app.get('/r/:subreddit', (req, res) => {
    // prendo l'input dell'utente
    const {subreddit} = req.params
    // restituisco il file subreddit.ejs
    // passo la variabile subreddit al file ejs
    res.render('subreddit', {subreddit})
})



app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1
    // comando per mandare all'user la pagina random.ejs
    // passo anche la variabile num al file random, chiamandola rand
    res.render('random.ejs', {rand: num})
})


app.listen(3000, () => {
    console.log('listening on port 3000')
})




