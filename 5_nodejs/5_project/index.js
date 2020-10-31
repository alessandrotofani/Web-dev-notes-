// importo le due librerie che userò
// riconosce il linguaggio e dà un codice
const franc = require('franc');
// prende il codice della lingua e restituisce la lingua
const langs = require('langs');

// prendo la frase inserita da linea di comando 
const frase = process.argv[2];
console.log('hai inserito la frase: ', frase);

// prendo il codice a tre lettere della lingua rilevata
// considero solo il primo risultato della matice
const codice = franc.all(frase)[0][0];
console.log('il codice è: ', codice);

if (codice === 'und'){ 
    console.log('No language retrieved');
}else{
// dal codice risalgo al nome della lingua
const linguaggio = langs.where('3', codice).name;
console.log('la lingua rilevata è: ', linguaggio);
}
