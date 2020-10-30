// serve per usare fs 
const fs = require('fs');

// prendo il secondo argomento che viene passato da linea di comando
const folderName = process.argv[2] || 'project';

// uso il metodo mkdir per creare la directory dog
fs.mkdir('dog', {recursive: true}, (err) => {
    if (err) throw err;});

// adesso uso il metodo sync per creare la cartella
try{
    fs.mkdirSync(folderName);
    // uso il metodo sync per creare tre file nella cartella appena creata
    fs.writeFileSync(`${folderName}/0_example.html`);
    fs.writeFileSync(`${folderName}/0_example.css`);
    fs.writeFileSync(`${folderName}/0_example.js`);
} catch (e){
    console.log('something went wrong');
    console.log(e);}
