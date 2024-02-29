/**
 * playing with variables and types
 */
// types
// simple types
const number = 10; // number
const string = 'Hello World'; // string

// complex types
const array = [1, 2, 3, 4, 5]; // array
const object = {name: 'John', age:35}; // object
const date = new Date(); // date
const regexp = /hello/g; // regular expression
const fn = function () {console.log('Hello World')}; // function
const map = new Map(); // map
const set = new Set(); // set
const promise = new Promise((resolve, reject) => {}); // promise

console.log(typeof number);
// checking variable types
let myVar = 10;
console.log(typeof myVar);
myVar = 'Hello World';
console.log(typeof myVar);
myVar = [1, 2, 3, 4, 5];
console.log(typeof myVar);
myVar = {name: 'John', age: 35};
console.log(typeof myVar);
myVar = new Date();
console.log(typeof myVar);
// Let's check number type in java script
let myNumber;
myNumber = 10;
console.log('1.'+typeof myNumber+' '+myNumber);
myNumber = 10.0;
console.log('2.'+typeof myNumber+' '+myNumber);
myNumber = .2;
console.log('3.'+typeof myNumber+' '+myNumber);
myNumber = 2e5;
console.log('4.'+typeof myNumber+' '+myNumber);
myNumber = -0.15;
console.log('5.'+typeof myNumber+' '+myNumber);
