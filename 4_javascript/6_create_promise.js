// funzione che fa la richiesta
const fakeRequest = (url) => {
    // creo la promise
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                // risolve la promise
                resolve('YOUR FAKE DATA HERE');
            }
            // rigetta la promise
            reject('Request Error!');
        }, 1000)
    })
}

fakeRequest('/dogs/1')
    // data: sono presi direttamente dalla funzione resolve
    .then((data) => {
        console.log("DONE WITH REQUEST!")
        console.log('data is:', data)
    })
    // err: è preso dalla funzione reject
    .catch((err) => {
        console.log("OH NO!", err)
    })


// secondo esempio di creazione di promise
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}


delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('indigo', 1000))
    .then(() => delayedColorChange('violet', 1000))