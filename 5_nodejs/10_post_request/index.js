// ricordare di installare e richiedere express 
const express = require('express')
// inizializzo il server 
const app = express();
// permette di usare path
const path = require('path')

// codifica i dati 
// app.use permette di usarlo per tutte le richieste
app.use(express.urlencoded({extended: true}))
// serve per ricevere i dati in formato json
app.use(express.json())
// ricordarsi di installare ejs
// setto il path della cartella view e uso i file ejs
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


// creo la struttura dati con cui andrò ad interagire
const comments = [
    {
        username: 'todd',
        comment: ' hello i am todd',
    },    
    {
        username: 'alex',
        comment: ' hello i am alex',
    },    
    {
        username: 'bob',
        comment: ' hello i am bob',
    }
]

// serve per leggere i commenti (read)
app.get('/comments', (req, res) =>{
    // specifico qual è il path del file ejs
    res.render('comments/index', {comments})
})

// server per creare un nuovo commento
app.get('/comments/new', (req,res) =>{
    res.render('comments/new')
})

// serve per postare il commento nella sezione comments
app.post('/comments', (req, res) =>{
    // visualizzo cosa l'utente ha inviato
    console.log(req.body)
    //estraggo le info che dovrò inserire nel database
    const {username, comment} = req.body
    // pusho nel database
    comments.push({username, comment})
    // res.send("it worked!")
    // reindirizzo l'utente nuovamente nella home 
    // se non lo faccio posso avere il problema di risubmission del form
    res.redirect('/comments')
})

app.get('/tacos', (req, res) =>{
    res.send('GET /tacos response')
})

app.post('/tacos', (req,res) =>{
    // prendo i dati che arrivano dalla post request
    const {meat, qty} = req.body
    // rispondo alla richiesta
    res.send(`ok, here are your ${qty} of ${meat} `)
})

// setto la porta a cui sente
app.listen(3000, () =>{
    console.log('listening on port 3000!')
})



