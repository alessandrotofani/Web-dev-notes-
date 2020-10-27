// seleziono il bottone e il titolo con la query
const button = document.querySelector('button');
const h1 = document.querySelector('h1');

// event listener che cambierà il colore dello sfondo con il click
button.addEventListener('click', function () {
    // inizializzo il nuovo colore
    const newColor = makeRandColor();
    // modifico lo stile del body e ne cambio il background color
    document.body.style.backgroundColor = newColor;
    // cambio il titolo nel rgb del colore
    h1.innerText = newColor;
})

// funzione che restituisce una stringa con il random color
const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

