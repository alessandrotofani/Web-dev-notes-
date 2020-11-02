// ricordare di installare e richiedere express 
const express = require('express')
// inizializzo il server 
const app = express();
// permette di usare path
const path = require('path')
// uso uuid per assegnare gli id ai commenti
const {v4: uuid} = require('uuid')
// lo uso per fare l'override del commento
const methodOverride = require('method-override')



// codifica i dati 
// app.use permette di usarlo per tutte le richieste
app.use(express.urlencoded({extended: true}))
// serve per ricevere i dati in formato json
app.use(express.json())
// ricordarsi di installare ejs
// setto il path della cartella view e uso i file ejs
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
// uso l'override
app.use(methodOverride('_method'))


// creo la struttura dati con cui andrò ad interagire
const comments = [
    {
        id: uuid(),
        username: 'todd',
        comment: ' hello i am todd',
    },    
    {
        id: uuid(),
        username: 'alex',
        comment: ' hello i am alex',
    },    
    {
        id: uuid(),
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
    comments.push({username, comment, id: uuid()})
    // res.send("it worked!")
    // reindirizzo l'utente nuovamente nella home 
    // se non lo faccio posso avere il problema di risubmission del form
    res.redirect('/comments')
})

// routing per il singolo commento tramite id
app.get('/comments/:id', (req, res) =>{
    // prendo l'id dalla richiesta che fa l'user
    const {id} = req.params
    // cerco il commento tra quelli presenti nel database
    const comment = comments.find( c => c.id === id)
    // restituisco la pagina con il singolo commento
    res.render('comments/show', {comment})
})

// routing per permettere di editare il commento
app.get('/comments/:id/edit', (req,res) => {
    // prendo l'id dalla richiesta che fa l'user
    const {id} = req.params
    // seleziono il commento con quell'id
    const comment = comments.find( c => c.id === id)
    // mando la pagina per poter editare il commento
    res.render('comments/edit', {comment})
})

// PATCH request: la uso per fare l'update del contenuto del commento
// il form non può mandare una richiesta di patch, perciò devo appoggiarmi al metodo precedente
app.patch('/comments/:id', (req, res) =>{
    // prendo l'id dalla richiesta che fa l'user
    const {id} = req.params
    // seleziono il testo del nuovo commento
    const newCommentText = req.body.comment
    // cerco il commento tra quelli presenti nel database
    const foundComment = comments.find( c => c.id === id)   
    // cambio il testo del commento con il nuovo commento
    foundComment.comment = newCommentText
    // reindirizzo alla home (prende di default il file index)
    res.render('/comments')
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



