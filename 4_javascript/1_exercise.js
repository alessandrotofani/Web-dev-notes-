// To do list 
// new: add a todo
// list: listare tutti i todo
// delete: cancella uno speicifico todo: chiedere l'indice di quello che voglio rimuover
// quit: chiudere l'applicazione

let loop = true
let userInput = null
let todo = []
let actionToDelete = null

while(loop){
    userInput = prompt("What do you want to do?");

    if(userInput == "new"){
        newElement = prompt("What do you want to add?")
        todo.push(newElement);

    }else if(userInput =="list"){
        let i = 0;
        for( action of todo){
            console.log(` Action ${i}: ` , action);
            i++;
        }

    }else if(userInput == "delete"){
        actionToDelete = prompt("Which action do you want to delete?");
        todo.splice(actionToDelete, 1);

    }else if(userInput == "quit"){
        loop = false


    }else{userInput = prompt("Type a valid command!")}

    
}







