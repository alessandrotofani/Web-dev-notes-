// seleziono il form
const form = document.querySelector('#searchForm');

// metto l'event listener quando l'utente preme il submit
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    // assegno a q l'input dell'utente
    const searchTerm = form.elements.query.value;
    // assegno a q quello che l'utente sta cercando
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(res.data)
    // resetto il valore della query
    form.elements.query.value = '';
})

// funzione per mettere l'immagine dello show cercato
const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }
}