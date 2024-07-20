let cells = document.querySelectorAll(".cell")
let reset = document.querySelector("#reset")
let result = document.querySelector("#result")

let template = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

let option = ["", "", "", "", "", "", "", "", ""]
let currentplayer = "X"
let running = false

/*
creaate 4 founction
1. startgame
2. reset game via btn
3. turn cell into clickable
4. changeplayers
5. update cell
6. check winner
*/

gameStart()



function gameStart(){
    running = true
    cells.forEach(cell => cell.addEventListener("click", clickable))
    reset.addEventListener("click", resetgame)
    result.textContent = `${currentplayer}'s turn`
   
}

function clickable(){
    const cellIndex = this.getAttribute("cellIndex")

    if(option[cellIndex] != "" || !running){
        return
    }

    updatecell(this, cellIndex)
    
    winner()
}

function updatecell(cell, index){
    option[index] = currentplayer
    cell.textContent = currentplayer

}

function resetgame(){
    currentplayer = "X"
    option = ["", "", "", "", "", "", "", "", ""]
    result.textContent = `${currentplayer}' s turn`
    cells.forEach(cell => cell.textContent = "")
    running = true;
}

function changeplayers(){
    currentplayer = (currentplayer == "X" ? "O" : "X" )
    result.textContent = `${currentplayer}'s turn`
}

function winner(){
   let win = false

   for(let i = 0; i < template.length; i++){
    const condition = template[i]
    const cellA = option[condition[0]]
    const cellB = option[condition[1]]
    const cellC = option[condition[2]]


        if(cellA == "" || cellB == "" || cellC == ""){
            continue
        }

        if(cellA == cellB && cellC == cellB){
            win = true
            break;
        }
   }

   if(win){
        result.textContent = `${currentplayer} Player Wins`
        running = false
   }

   else if(!option.includes("")){
       result.textContent = "DRAW!"
       running = false
   }

   else{
        changeplayers()
   }

}