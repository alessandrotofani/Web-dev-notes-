// SELEZIONARE IL FORM E IL CONTAINER
// seleziono il form
const tweetForm = document.querySelector('#tweetForm');
// seleziono il container che conterrà i testi dei tweet una volta inviati
const tweetsContainer = document.querySelector('#tweets');


// FUNZIONE PER INVIARE IL TWEET
// impedisce il refresh della pagina ogni volta che invio un tweet
tweetForm.addEventListener('submit', function (e) {
    // permette di evitare il comportamento di default, cioè action
    e.preventDefault();

    // tramite l'attributo elements seleziono tramite i name username e tweet
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;

    // aggiungo lo username ed il tweet nel container
    addTweet(usernameInput.value, tweetInput.value)

    // resetto i valori si username e tweet per poter reiterare il procedimento
    usernameInput.value = '';
    tweetInput.value = '';
});


// AGGIUNTA DEL TWEET ALLA PAGINA
// permette di aggiungere nel container i tweet inviati
const addTweet = (username, tweet) => {
    // creo un nuovo li nel documento
    const newTweet = document.createElement('li');
    // creo un nuovo bold tag nel documento
    const bTag = document.createElement('b');

    // inserisco lo username nel bold tag
    bTag.append(username)
    // inserisco il bold tag nel container
    newTweet.append(bTag);

    // inserisco il tweet nella variabile newTweet
    newTweet.append(`- ${tweet}`);
    // inserisco il tweet nel container
    tweetsContainer.append(newTweet);
}

