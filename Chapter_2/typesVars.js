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
/**
 * Check if a variable type is simple or not.
 * @param {*} variable - The variable to check.
 * @returns {boolean} - True if the variable type is simple, false otherwise.
 */
function isSimpleType(variable) {
    const simpleTypes = ['number', 'string', 'boolean', 'undefined', 'null'];
    return simpleTypes.includes(typeof variable);
}

myNumber = 10.0;
console.log('2.'+typeof myNumber+' '+myNumber);
if (isSimpleType(myNumber)) {
    console.log('simple type');
} else {
    console.log('complex type');
}

myNumber = .2;
console.log('3.'+typeof myNumber+' '+myNumber);
myNumber = 2e5;
console.log('4.'+typeof myNumber+' '+myNumber);
myNumber = -0.15;
console.log('5.'+typeof myNumber+' '+myNumber);

console.log(isSimpleType(array));
console.log(isSimpleType(object));
console.log(isSimpleType(date));
console.log(isSimpleType(regexp));
console.log(isSimpleType(fn));
console.log(isSimpleType(map));
console.log(isSimpleType(set));
console.log(isSimpleType(promise));

console.log('---------------Last test');
const bigInteger = (BigInt(Number.MAX_SAFE_INTEGER) + BigInt(1));
console.log(bigInteger);
console.log(typeof bigInteger);
console.log(isSimpleType(bigInteger));
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.EPSILON);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
