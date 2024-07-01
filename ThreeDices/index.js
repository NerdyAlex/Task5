// console.log(Math.PI);

// let x=2;
// let y=3;
// let z=1;

// z =Math.round(x)
// z = Math.floor(x)
// let min = Math.min(x,y,z)
// console.log(min)

// let random = Math.random() * 100 + 1;
// random = Math.round(random)
// console.log(random)

let label1 = document.getElementById('label1');
let label2 = document.getElementById('label2');
let label3 = document.getElementById('label3');
let btn = document.getElementById('btn');
let max=6;
let min=1;
let random1;
let random2;
let random3;


btn.onclick = function(){
    random1 = Math.round(Math.random() * max) + min;
    document.getElementById('label1').textContent = random1;
    random2 = Math.round(Math.random() * max) + min;
    document.getElementById('label2').textContent = random2;
    random3 = Math.round(Math.random() * max) + min;
    document.getElementById('label3').textContent = random3;
}






