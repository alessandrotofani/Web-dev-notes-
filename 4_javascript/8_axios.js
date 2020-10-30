// funzione async che usa axios per prendere il price
const fetchBitcoinPrice = async () => {
    try {
        // uso la funzione get di axios
        // storo nella variabile res la promise
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        // stampo sulla console il price
        console.log(res.data.ticker.price)
    } catch (e) {
        console.log("ERROR!", e)
    }
}

// seleziono il bottone e lo ul
const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

// funzione async che prende il testo di un nuovo joke
//  e la aggiunge all'html
const addNewJoke = async () => {
    // storo la nuova joke
    const jokeText = await getDadJoke();
    // creo un nuovo li
    const newLI = document.createElement('LI');
    // inserisco il nuovo li nell'html
    newLI.append(jokeText);
    jokes.append(newLI)
}

// funzione async che accede al testo del jooke
const getDadJoke = async () => {
    try {
        // serve per scaricare il json
        // è specificato nella documentazione dell'api
        const config = { headers: { Accept: 'application/json' } }
        // funzione get di axios che ritorna la promise
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE! SORRY :("
    }

}

// event listener per il bottone
button.addEventListener('click', addNewJoke)
