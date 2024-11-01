// let r;
// let PI = 22/7;
// let around;

// document.getElementById('btn').onclick = function () {
//     r = document.getElementById('calcu').value;
//     r = Number(r); 
//     around = 2 * PI * r;
//     document.getElementById('ans').textContent = around + 'cm';

// }




// const minus = document.getElementById('minus');
// const reset = document.getElementById('reset');
// const plus = document.getElementById('plus');

// let count = 0;

// minus.onclick = function (){
//     count--;
//     document.getElementById('count').textContent = count;
// }

// plus.onclick = function(){
//     count++;
//     document.getElementById('count').textContent = count;
// }

// reset.onclick = function(){
//     count=0;
//     document.getElementById('count').textContent = count;
// }

let a = window.prompt("Enter the 1st side: ");
let b = window.prompt("Enter the 2nd side: ");
let c;  //window.prompt("Enter the 3rd side: ");

a = Number(a)
b = Number(b)
c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
// x = Math.min(x,y,z);

console.log(c);