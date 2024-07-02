// let user input data
// when the use





/* if celic is checked then on click 
convert users input into isCelsius.
else onclick coverte to fehrenheit */

// mysubmit.onclick = function(){
//     myinput = Number(myinput.value)
//     if(isCels.checked){
//         myinput = myinput - 32
//         isCels = 5 / 9 * myinput
//         answer.textContent = `${isCels}°C`
//     }
//     else if(isFahr.checked){
//         myinput = 9 / 5 * myinput
//         isFahr = myinput + 32
//         answer.textContent = `${isFahr}°F`

//     }
//     else {
//         answer.textContent = `Wrong input`
//     }
    
// }

let temp = document.getElementById("myinput")
let mysubmit = document.getElementById("mysubmit")
let answer = document.getElementById("answer")


function isFahr(temp) {
    temp = 9 / 5 * (temp + 32)
    return temp
}


function isCeli(temp) {
    temp = 5 / 9 * (temp - 32)
    return temp
}



mysubmit.onclick = function(){
    let i = 0
    temp = Number(temp.value)
    let iscels = document.getElementById("iscels");
    let isfahr = document.getElementById("isfahr");
    
    for(i; i < 10; i+=1){
        if (iscels.checked) {
            answer.textContent = Number(isCeli(temp)) + "°C"
    
        }
        else if (isfahr.checked) {
            answer.textContent = Number(isFahr(temp)) + "°F"
        
        }
        else {
            answer.textContent = "select a temperature"
    
        }

    }
    
}




