// let age=26;

// if(age <=20){
//     console.log(`the age ${age} is not suitable for an account`)
// }

// else{
//     console.log(`Welcome`)
// }

// let time = 13;

// if(time >=12){
//     console.log(`Good Aternoon, Young Sir`)
// }
// else{
//     console.log(`Good Morning, Young Sir`)
// }

// let isStudent = false;

// if(isStudent){
//     console.log(`You're a student`);
// }
// else{
//     console.log(`You're not a student`);
// }

// let age = 16;
// let hasLicense = false;

// if(age>=16){
//     console.log(`you are a adult`)
//     if (hasLicense) {
//         console.log(`with a car license`)
               
//     }
//     else{
//         console.log(`without a car license`)
//     }
// }

// else{
//     console.log(`you are not a adult and you can't have a license`)
// }

// let myText = document.getElementById('myText')
// const submit = document.getElementById('submit')
// const result = document.getElementById('result')


// submit.onclick = function(){
//     myText = Number(myText.value)
    
    
//     if(myText>=100){
//         result.textContent = "You're TOO OLD for this site"
//     }
//     else if(myText<0){
//         result.textContent = "You're NOT even Born yet"
//     }
//     else if(myText >=18){
//         result.textContent = "Welcome to this site"
//     }
//     else if(myText < 18){
//         result.textContent = "you are TOO YOUNG for this site"
//     }
//     else{
//         result.textContent = "ERROR"
//     }
// }



const check = document.getElementById("check")
const visabtn = document.getElementById("visabtn")
const mastercardbtn = document.getElementById("mastercardbtn")
const paypalbtn = document.getElementById("paypalbtn")

const submitbtn = document.getElementById("submitbtn")
const subresult = document.getElementById("subresult")
const payresult = document.getElementById("payresult")


submitbtn.onclick = function(){
    if(check.checked){
        subresult.textContent = `You are Subscribed`
    }
    else{
        subresult.textContent = `You are NOT Subscribed`
    }
    if(visabtn.checked){
        payresult.textContent = `You paid with Visa`
    }
    else if (mastercardbtn.checked){
        payresult.textContent = `You paid with MasterCard`
    }
    else if (paypalbtn.checked) {
        payresult.textContent = `You paid with PayPal`
    }
    else{
        payresult.textContent = `Please select a payment type`
    }

}