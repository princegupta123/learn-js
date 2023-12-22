// const score = 100;
// const number = new Number(100.99);
// console.log(score);
// console.log(number);

// const numberToString = number.toString(); //converted in string
// console.log(typeof numberToString); //string
// console.log(numberToString.length); //3
// console.log(number.toFixed()); //100

// const otherNumber = 122.122;
// console.log(otherNumber.toPrecision(5)); //122.12

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-In'));

// ++++++++++++++++++=== Math ++++++++++++++++++++++++

// console.log(Math);/

const number = 4.5;
console.log(Math.round(number)); //5
console.log(Math.ceil(number)); //5
console.log(Math.floor(number)); //4
console.log(Math.abs(-4)); //4

console.log(Math.floor(Math.random() * 10) + 1); // random number

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
