/* make a radom number between 1 -10
save it in a box and let the user input a number to guess the
number
keep track of the user guesses
*/



const guess = Math.round(Math.random() * 10)

let guesses = 0;
let submit = document.getElementById("submit")


submit.onclick = function(){

    let inputs = document.getElementById("myinput").value
    guesses+=1
    inputs = Number(inputs)

    if(inputs === guess){
        alert(`${inputs}  is the right guess. You made ${guesses} guesses`)    
    }

    else if(inputs > guess){
        alert(`${inputs} is bigger than guess`)
        
    }
    else if (inputs < guess) {
        alert(`${inputs} is smaller than guess`)
        
    }
    else{
        alert(`wrong input`)
        
    }
}