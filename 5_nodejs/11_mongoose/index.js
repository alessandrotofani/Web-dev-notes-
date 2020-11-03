const mongoose = require('mongoose')

// mongoose usa la porta 27017
// dopo c'è il database usato, in questo caso test, ma posso cambiarlo
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
// deve essere inserita anche questa
// serve per assicurare di essere connessi
    .then(()=>{
        console.log('connected!')
    })
    .catch(err => {
        console.log('error!')
        console.log(err)
    })

// bisogna definire uno schema
// metto la key e il tipo di values che sarà inserito
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

// dico a mongoose che voglio fare un modello con quello schema
const Movie = mongoose.model('Movie', movieSchema)

// creo un nuovo film da inserire nel database
const amadeus = new Movie({title: 'Amadeus', year: 1986, score:9.2, rating: 'R'})
// per inserirlo nel db:
amadeus.save()

// serve per inserire più elementi nel db
Movie.insertMany(
    {title: 'First', year: 1987, score:9.2, rating: 'R'},
    {title: 'Second', year: 1988, score:9.2, rating: 'R'},
    {title: 'Third', year: 1989, score:9.2, rating: 'R'}
)
    .then(data => {
        console.log('it worked!')
        console.log(data)
    })

// cercare i movies da terminale:
// Movie.find({query}).then(data => {console.log(data)})





