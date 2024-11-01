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




//takes a variabel and covert it to ceilius
function toC(temp) {
    return (temp - 32) * 5 / 9 + "°C"
}

// takes a variabel and covert it to Fahrenheit
function toF(temp) {
    return (temp * 9 / 5) + 32 + "F"
}

// create variables to store and use the user data

let input = document.getElementById("input")
let cel = document.getElementById("cel")
let feh = document.getElementById("feh")
let sbtbtn = document.getElementById("sbtbtn")
let ans = document.getElementById("answer")


sbtbtn.onclick = function () {
    // collect the user input and convert  into whole number and store in new var.
    let temp = Math.floor(Number(input.value))

    // IF CEL is checked 
    if (cel.checked) {
        //call out the toC func and store it
        let resultc = toC(temp)

        // display it on the docume
        ans.textContent = resultc
    }
    //  if FEH is checked
    else if (feh.checked) {
        //call out the tof func and store it in a new var
        let resultf = toF(temp)

        //display answer on the docum
        ans.textContent = resultf

    }
    // if nothing is checked
    else {
        alert("INPUT A NUMBER, DAMNIT!!")
    }
}


