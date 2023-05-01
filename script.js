"use strict";

// Masalalar

// 1

let a = +prompt("a= ");
let sum = 0;
for (let i = 0; i <= a; i++) {
   sum += i;
}
console.log(sum);

// 2

let b = +prompt("b= ");
let sum1 = 0;
for (let i = 0; i <= b; i++) {
    if (i % 2 == 1) continue
    sum1 += i;

}
console.log(sum1);


// 3

let c = +prompt("c= ");
let sum2 = 0;
for (let i = 0; i <= c; i++) {
    if (i % 2 == 0) continue
    sum2 += i;

}
console.log(sum2);


// 4

let d = +prompt("d= ");
let sum3 = 0;
for (let i = 0; i <= d; i++) {
    if (i % 5 == 0) {
        sum3 += i;
    }     
}
console.log(sum3);


// 5

let e = +prompt("e= ");
let sum4 = 0;
for (let i = 0; i <e; i++) {
    if (i % 2 == 0) 
    sum4 += 1;
}
console.log(sum4);

//6

let f = +prompt("f= ");
let g = +prompt("g= ");

let sum5 = 0;
for (let i = f; i < g; i++) {
   sum5 += i;
}
console.log(sum5);

// 7

let h = +prompt("h= ");
let j = +prompt("j= ");

let sum6 = 0;
for (let i = h; i <j; i++) {
    if (i % 2 == 0) 
    sum6 += 1;
}
console.log(sum6);

// 8

let k = +prompt("k= ");
let l = +prompt("l= ");
let sum7 = 0;
let count1 = 0;

for (let i = k; i < l; i++) {
    if (i % 3 == 0) {
        sum7 += i;
        count1 += 1;
    }
}
console.log("Yigindisi: " + sum7, "Soni: " + count1);

// 9

let m = +prompt("m= ");
let n = +prompt("n= ");
let count2 = 0;

for (let i = m; i < n; i++) {
    if (i % 2 ==0 && i % 3 ==0) {
        count2 +=1
    }
    
}
console.log("Soni: " + count2 + " ta");


// 10

let o = +prompt("o= ");
let p = +prompt("p= ");
let count3 = 0;

for (let i = o; i <= p; i++) {
    if (i > 0) {
        count3 +=1;
    }
}

console.log("Soni: " + count3 + " ta");



