// includo express
const express = require('express');
// creo il server
const app = express();
// serve per modificare il path di views
const path = require('path');
// importo i dati dal file json
const redditData = require('./data.json')
// console.log(redditData)

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

// si attiva quando cerco cats
app.get('/cats', (req, res) =>{
    // creo un vettore i cui oggetti sono stringhe
    const cats = ['blue', 'rocket', 'monty', 'winston']
    // passo tale vettore al file cats.ejs (ricorda ejs è sottinteso)
    res.render('cats', {cats})
})


// si attiva quando c'è un pattern compatibile
app.get('/r/:subreddit', (req, res) => {
    // prendo l'input dell'utente
    const {subreddit} = req.params

    // estraggo i dati relativi al subreddit che l'utente sta cercando
    // seleziono i dati tramte la key 
    const data = redditData[subreddit]

    if(data){    
        // passo direttamente le feature dell'oggetto già spreadate
        // vuol dire che posso accedere alle singole feature 
        res.render('subreddit', {...data})
    }else{
        // carico questa pagina nel caso in cui non esista ciò che l'utente cerca
        res.render('notfound', {subreddit})
    }

    // restituisco il file subreddit.ejs
    // passo la variabile subreddit al file ejs
    // res.render('subreddit', {subreddit})

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




