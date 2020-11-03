const mongoose = require('mongoose')

// mongoose usa la porta 27017
// dopo c'è il database usato, in questo caso shopApp, ma posso cambiarlo
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
// deve essere inserita anche questa
// serve per assicurare di essere connessi
    .then(()=>{
        console.log('connected!')
    })
    .catch(err => {
        console.log('error!')
        console.log(err)
    })

// VALIDATION
// faccio validation dei valori che assegno
const productSchema = new mongoose.Schema({
    name: { 
        type: String,
        // setto se il campo è required
        required: true,
        // setto la lunghezza massima. è possibile settare anche la minima
        maxlength: 20
    },
    price: {
        type: Number,
        // valore minimo
        // setto anche una stringa con un messaggio di errore personalizzato
        min: [0, 'price must be positive'
    },
    onSale: {
        type: Boolean,
        // setto il valore di default
        default: false
    },
    categories: {
        // array di stringhe
        type: [String],
        default: ['cycling']
    },
    qty: {
        online:{
            type: Number,
            default: 0

        },
        inStore:{
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        // enum fa sì che il valore inserito debba essere per forza uno di questi tre
        enum: ['s', 'm', 'l']
    }
});

// MODELLO
// creo un nuovo modello
const Product = mongoose.model('Product', productSchema)

// CREATE
// creo un nuovo oggetto da inserire nel modello
const bike = new Product({name: 'mountain bike', price: 599})
// lo inserisco
bike.save()
    .then(data => {
        console.log('it worked!')
        console.log(data)
    })
    .catch(err => {
        console.log('oh no error!')
        console.log(err)
    })

// devo specificare che deve usare i validator
Product.findOneAndUpdate({name: 'Tire pump'}, {price: 100}, {new: true, runValidators: true})
    .then(data => {
        console.log('it worked!')
        console.log(data)
    })
    .catch(err => {
        console.log('oh no error!')
        console.log(err)
    })