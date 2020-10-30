// importo la libreria appena installata con npm
const jokes = require('give-me-a-joke');

// importo la seconda libreria
const colors = require('colors');

// vedo le funzioni disponibili
console.dir(jokes);

// uso la funzione getRandomDadJoke presente nella libreria
jokes.getRandomDadJoke(function(joke){
    // printo la joke e vi applico la funzione rainbow di colors
    console.log(joke.rainbow);
});