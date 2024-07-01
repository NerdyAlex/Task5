// let age = 30;

// let message = age >= 18 ? "youre a adult" : "youre a child";

// console.log(message)

// let drink = 9;

// let discount = drink>10 ? 5:0;
// console.log(`your payment is $${drink - (discount)}`)


// let day = 6;

// switch(day){
//     case 1:
//         console.log("it's Monday");
//         break;
//     case 2:
//         console.log("it's Tuesday");
//         break;
//     case 3:
//         console.log("it's Wednesday");
//         break;
//     case 4:
//         console.log("it's Thursday");
//         break;
//     case 5:
//         console.log("it's Friday");
//         break;
//     case 6:
//         console.log("it's Saturday");
//         break;
//     case 7:
//         console.log("it's Sunday");
//         break;
//     default:
//         console.log(`${day} is NOT day`)
// }


// let email = "rich4alexis@gmail.com"

// let userName = email.slice(0, email.indexOf("@"));
// console.log(userName)
// let content = email.slice(email.indexOf("@") +1)
// console.log(content)



// let sign;
// let num1 = window.prompt("firstNumber:")
// let num2 = window.prompt("SecondNumber:")

// sign = window.prompt("Sign:")

// num1 = Number(num1)
// num2 = Number(num2)
// let count = 0;

// while(count = 10){
//     if (sign === "+") {
//         console.log(num1 + num2);
//     }
//     else if (sign === "-") {
//         console.log(num1 - num2);
//     }
//     else if (sign === "*") {
//         console.log(num1 * num2);
//     }
//     else if (sign === "/") {
//         console.log(num1 / num2);
//     }
//     else {
//         console.log("Error")
//     }
//     count++
// }





// let grade = 60;

// switch(true){
//     case grade>=80:
//         console.log(`A`)
//         break
//     case grade>=70:
//         console.log(`B`)
//         break
//     case grade>=65:
//         console.log(`C`)
//         break
//     case grade >= 55:
//         console.log(`D`)
//         break
//     case grade >= 45:
//         console.log(`F`)
//         break

//     default:
//         console.log(grade, " is not a letter grade")
//         break
// }

// let name1;

// do {
//     name1 =window.prompt("Hello")
    
    
// }while(name1 == "" || name1==null)

// console.log("hello ", name1)

// FizzBizz

// for(let counter = 1; counter <= 20; counter++){
//     if (counter % 5 === 0 && counter % 3 === 0) {
//         console.log("BizzFizz")
//     }
//     else if(counter % 3 === 0){
//         console.log("Bizz")
//     }

//     else if (counter % 5 === 0) {
//         console.log("Fizz")
//     }

//     else{
//         console.log(counter)
//     }
// }




// for (let i = 1; i <=3; i++){
//     for (let j = 1; j <= 3; j++){
//         console.log(`(${i}, ${j})`)
//     }
// }
// let row = window.prompt("how many rows: ")
// let columns = window.prompt("how many columns: ")
// let sign = window.prompt("what sign do you want to use: ")

// for (let i = 1; i <= row; i+=1){
//     for (let j = 1; j <= columns; j+=1){
//         document.getElementById("rect").innerHTML += sign
        
        
//     }
//     document.getElementById("rect").innerHTML += "<br>"
  
// }

// let width = Number(window.prompt("enter width: "))
// let height = Number(window.prompt("enter height: "))

// let area = calcu(width, height);

// function calcu(width, height){
//     let result = width * height
//     return result
// }
// console.log(`${area}cm`)


// let adult = 17

// let message = adult >=18 ? "you sre an adult":"you are a child";
// console.log(message)


// let num = 123333;
// num = num.toLocaleString('en-GH', {style: "currency", currency: "GHS"})

// console.log(num)