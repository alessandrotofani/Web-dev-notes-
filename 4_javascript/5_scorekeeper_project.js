// seleziono i punteggi
const punteggio_1 = document.querySelector('#punteggio_one');
const punteggio_2 = document.querySelector('#punteggio_two');
let p1 = 0;
let p2 = 0;

// seleziono i bottoni
const up_1 = document.querySelector('#player_one');
const up_2 = document.querySelector('#player_two');
const reset = document.querySelector('#reset');

// punteggio massimo
// const punteggio_massimo =5;
let punteggio_massimo = document.querySelector('#punteggio_massimo');

// event listener per il punteggio massimo
// uso change poichè cambio l'input
punteggio_massimo.addEventListener('change', function(){
    punteggio_massimo = parseInt(this.value);
})


// event listener per i bottoni
up_1.addEventListener('click', function (){ 
    if(p1 < punteggio_massimo && p2 < punteggio_massimo){
        p1 += 1;
        punteggio_1.textContent = p1;
        if (p1 === punteggio_massimo){end1();}
    }
})

up_2.addEventListener('click', function (){ 
    if(p1 < punteggio_massimo && p2 < punteggio_massimo){
        p2 += 1;
        punteggio_2.textContent = p2;
        if (p2 === punteggio_massimo){end2();}
    }
    
})

// funzione che resetta il punteggio
reset.addEventListener('click', function(){
    punteggio_1.textContent = 0;
    punteggio_2.textContent = 0;
    p1 = 0;
    p2 = 0;
    // rimuovo la classe winner e loser da entrambi
    punteggio_1.classList.remove('winner', 'loser');
    punteggio_2.classList.remove('winner', 'loser');
});

// assegno la classe winner al vincitore e loser al perdente
function end1(){
    punteggio_1.classList.add('winner');
    punteggio_2.classList.add('loser');
    
}
function end2(){
    punteggio_2.classList.add('winner');
    punteggio_1.classList.add('loser');
    
}
