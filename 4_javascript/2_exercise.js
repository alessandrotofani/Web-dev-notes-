// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

// seleziono il container in cui metterò le immagini
// lo seleziono tramite id 
const container = document.querySelector('#container');
// setto l'url che poi modificherò per inserire l'immagine
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

// for loop per inserire tutte le immagini insieme
for (let i = 1; i <= 151; i++) {
    // DIV
    // creo un div per ogni immagine
    const pokemon = document.createElement('div');
    // aggiungo la classe pokemon al div appena creatto
    pokemon.classList.add('pokemon');

    // LABEL
    // creo lo span che conterrà la label di ogni immagine
    const label = document.createElement('span');
    // inserisco il testo nell'elemento label
    label.innerText = `#${i}`;

    // IMMAGINE
    // creo un elemento img 
    const newImg = document.createElement('img');
    // setto la source dell'immagine tramite il link
    // ricordarsi di usare il backtick per far funzionare il $
    newImg.src = `${baseURL}${i}.png`

    // APPENDING
    // inserisco gli elementi creati nell'html
    // inserisco immagine e label nel div pokemon
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    // inserisco il div pokemon nel container
    container.appendChild(pokemon)
}
