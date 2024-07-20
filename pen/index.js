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






// let age = [10, 200, 12, 32, 45]
// let names= ["lexy", "ixy", 'anny']
// let fruits = ["mango", "plum", "cherry"]
// let named = "Lexy Micheal"

// console.log(Math.max(...age))

// let group = [age, names, fruits]
// group[2][1] = "lemon"

// for(let organ of group){
//     for(let ok of organ){
//         console.log(ok)
//     }
// }
// // fruits = fruits.sort().reverse()


// // for(let fruit of fruits){
// //     console.log(fruit)
// // }







// fruits.push()
// fruits.pop()
// fruits.unshift()

// fruits[0] = "lemon"
// for(let i=0; i<=fruits.length; i+=1){
//     console.log(fruits[i])
// }

// for(fruit of fruits){
//     console.log(fruit)
// }




// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;

// console.log(sum(a, b, c, d, e))

// function sum(...nums){
//     total = 0
//     for(let num of nums){
//         total += num
//     }
//     return total
// }



// let a = 5;
// let b = 5;
// sum(a, b, d)

// function sum(a, b, d){
//     let result = a + b
//     d(result)
// }

// function c(output){
//     console.log(output)
// }
// function d(output){
//     document.getElementById("rect").textContent = output
// }


// let student = ["lexy", "ixy", "anny"]
// student.forEach(capitalize)
// student.forEach(print)

// function capitalize(element, index, array){
//     array[index] = element[0].toUpperCase() + element.substring(1)
// }

// function print(element){
//     console.log(element)
// }

// let num = [1, 2, 3, 4, 5];

// let squr = num.map(square);
// let cubic = num.map(cube);
// cubic.forEach(print)

// function cube(element) {
//     return Math.pow(element, 3);

// }

// function square(element){
//    return Math.pow(element, 2);

// }
// function print(element){
//     console.log(element)
// }


// let ages = [12, 35, 23, 16, 20, 18]
// let age = ages.filter(adult)
// age.forEach(print)

// function adult(element){
//     return element >= 18


// }

// function print(element){
//     console.log(element)
// }




// let name1= window.prompt("whats your name: ")


// const sayhello = (name1) => console.log(`hello ${name1}!!`)


// sayhello(name1)


// let width = Number(window.prompt("width: "))
// let height = Number(window.prompt("height: "))




// const area = (x, y) => console.log(x * y);


// area(width, height)


// let list = [100, 20, 30, 60, 90]
// let decrease = (x, y) => y - x

// let print = (element) => console.log(element)

// let a = list.sort(decrease);
// a.forEach(print)




// const shop = new Map([
//     ["lolipop", 0.50],
//     ['chocolate', 5],
//     ['biscuit', 9],
//     ['dr.milk', 0.70]
// ])

// shop.set("ice cream", 20)


// let pocket = 0

// pocket += shop.get('dr.milk')
// pocket += shop.get("lolipop")
// console.log(pocket)



// shop.forEach((values, key) => console.log(`${key} $${values}`))



// let person2 = {
//     name: 'ixy micheal',
//     age: 16,
//     color: 'yellow',

//     likecolor : function(){
//         console.log(`${this.name} likes ${this.color}`)
//     }


// }

// let person1 = {
//     name:'lexy micheal',
//     age: 17,
//     color: 'blue',

//     likecolor: () => true


// }
// console.log(`${person1.name} likes ${person1.color}: ${person1.likecolor()}`)


// person2.likecolor()




// class Person{
//     name(named){
//         console.log("Name: ", named)
//     }
//     age(age) {
//         console.log("Age: ", age)
//     }
// }

// let person1 = new Person()
// let person2 = new Person()
// person1.name('lexy')
// person1.age(24)
// person1.name('ixy')
// person1.age(34)

// class Student{
//     static nofstu = 0;
//     constructor(named, grade, gpa){
//         this.named = named
//         this.grade = grade
//         this.gpa = gpa
//         Student.nofstu += 1

//     }

//     study(){
//         console.log(`${this.named} is in grade ${this.grade} and has a GPA of ${this.gpa}`)
//     }
// }

// person1 = new Student('lexy', 13, 5.0)
// person2 = new Student('ixy', 12, 4.0)
// person3 = new Student('b.boy', 13, 3.6)

// person1.study()
// person2.study()
// person3.study()
// console.log(Student.nofstu)

// class Micheals{

//     study() {
//         console.log(`${this.name} is studying`)
//     }
//     eat() {
//         console.log(`${this.name} is eating`)
//     }
// }

// class Lexy extends Micheals{
//     name = 'lexy'

//     nosleep() {
//         console.log(`${this.name} is not sleeping`)
//     }
// }

// class Ixy extends Micheals {
//     name = 'ixy'

//     goingsleep() {
//         console.log(`${this.name} is going to sleeping `)
//     }
// }
// class Bboy extends Micheals {
//     name = 'b.boy'

//     sleep() {
//         console.log(`${this.name} is sleeping`)
//     }
// }


// let ixy = new Ixy()
// ixy.eat()
// ixy.study()
// ixy.goingsleep()



// class Micheals {
//     constructor(name, age) {
//         this.name = name
//         this.age = age

//     }
// }

// class Lexy extends Micheals {
//     constructor(name, age, nosleep){
//         super(name, age)
//         this.nosleep =nosleep
//     }
// }

// class Ixy extends Micheals {
//     constructor(name, age, soonsleep) {
//         super(name, age)
//         this.soonsleep = soonsleep
//     }

// }
// class Bboy extends Micheals {
//     constructor(name, age, sleep) {
//         super(name, age)
//         this.sleep = sleep
//     }

// }


// let ixy = new Ixy('ixy', 15, true)
// console.log(ixy.name)
// console.log(ixy.age)
// console.log(ixy.soonsleep)


// class Smart{
//     constructor(iq, message){
//         this._iq = iq
//         this._message = message
//     }
//     get iq(){
//         return `${this._iq}IQ`
//     }
//     set message(iq){
//         if(this.iq > 180){
//             message = 'you are a genius'
//             console.log(message )
//         }
//         else{
//             message = 'you are average'
//             console.log(message)
//         }
//     }
// }
// let smart = new Smart(200)
// console.log(smart.iq)
// console.log(smart.message)


// let sub = document.getElementById('submit')


// let call = () => alert("yellooo")
// let spam1 = () => alert("buy this phone")
// let spam2 = () => alert("it cheap $200")


// let spam = setTimeout(call, 2000)
// let spams =setTimeout(spam1, 4000)
// let spame = setTimeout(spam2, 9000)
// sub.onclick = function(){
//     clearTimeout(spam)
//     clearTimeout(spams);
//     clearTimeout(spame);
//     alert(`you have been scamed`)
// }

// let count = 0
// let max = window.prompt('enter a number: ')

// let counts = setInterval(countin, 1000)
// max = Number(max)
// function countin() {
//     count += 1
//     console.log(count)
//     if(max <= count){
//         clearInterval(counts)

//     }
// }


// let date = new Date("1, 5, 7")
// date = date.toLocaleString()
// console.log(date)
// // let years = date.getFullYear()
// // let day = date.getDay()
// // let hours = date.getHours()


// // console.log(hours)

// async function fileLoad() {
//     file = false
//     if (file) {
//         return 'problem is solved'
//     }
//     else {
//         throw 'problem is NOT solved'
//     }
// }

// async function fileprocess() {
//     try {
//         let message = await fileLoad()
//         console.log(message)
//     }
//     catch (error) {
//         console.log(error)
//     }

// }

// fileprocess()



// document.body.style.backgroundColor = "pink"

// let element = document.querySelectorAll("li")

// element.forEach(ele => {
//     ele.style.backgroundColor = 'green'

// })

// const fruits = document.getElementById('fruits')
// let fruit = document.createElement('li')
// let fruit2 = document.createElement('li')

// fruit2 = document.createElement('li')
// fruit2.textContent = 'avocado'
// fruit.textContent = 'lemon'
// fruits.insertBefore(fruit2, document.getElementsByTagName('li')[3])
// fruits.insertBefore(fruit, document.getElementsByTagName('li')[1])






// let myDiv = document.getElementById("myDiv")

// // myDiv.onclick = doing;
// // myDiv.onmouseover = does;
// // myDiv.onmouseout = doing
// myDiv.onmousedown = doing
// myDiv.onmouseup = does
// myDiv.style.width = "50px"
// myDiv.style.height = "50px"
// myDiv.style.backgroundColor = "blue"
// function doing(){
//     myDiv.style.backgroundColor = "red"
// }
// function does() {
//     myDiv.style.backgroundColor = "pink"
// }





























// let btn = document.querySelector('#mybtn')
// let pic = document.querySelector('#mypic')

// pic.style.width = "450px"

// btn.addEventListener('click', () =>{
//     if(pic.style.visibility == "hidden"){
//         pic.style.visibility = "visible"
//     }
//     else{
//         pic.style.visibility = "hidden"
//     }
// })



















// let mydiv = document.querySelector('#mydiv')
// mydiv.style.width = "50px"
// mydiv.style.height = '50px'
// mydiv.style.backgroundColor = 'red'
// mydiv.style.position = "absolute"
// let x = 0
// let y = 0
// window.addEventListener("keydown", move)
// function move(event){
//     switch (event.key) {
//         case 'ArrowDown':
//             y = y + 8;
//             mydiv.style.top = y + "px";
//             break;
//         case 'ArrowUp':
//             y = y - 8;
//             mydiv.style.top = y + "px";
//             break;
//         case 'ArrowRight':
//             x = x + 8;
//             mydiv.style.left = x + "px";
//             break;
//         case 'ArrowLeft':
//             x = x - 8;
//             mydiv.style.left = x + "px";
//             break;
//     }
// }





// let mydiv = document.querySelector('#mydiv')
// let btn = document.querySelector('#btn')
// mydiv.style.width = "50px"
// mydiv.style.height = '50px'
// mydiv.style.backgroundColor = 'red'
// mydiv.style.position = "absolute"


// btn.onclick = function(){

// }

// window.addEventListener("keydown", event => console.log(event.key))






let input = document.querySelector("#box")

let submit = document.querySelector("#add")

submit.onclick = function(){
    let inputs = input.value
    const container = document.querySelector("#list")

    const content = document.createElement("p")

    content.textContent = inputs

    container.appendChild(content)
}





/*
when we click add btn 
we must
1. colect the text inside of box
2. create a p elment
3. assign the p element to text in side the box
4. put it it the lists

*/

