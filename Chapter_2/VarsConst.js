// variables vs constants
// Variables can be reassigned, while constants can't be reassigned.
let value = 5;
console.log(value);
value = 'Piotrek';
console.log(value);
value = {score: 5, name: 'Piotrek'};
console.log(value);
// let value = 10; // Remove this line to fix the SyntaxError
// constants
const constantValue = 5;
console.log(constantValue);
// constantValue = 10; // Remove this line to fix the TypeError

const letters = ['a', 'b', 'c'];
console.log(letters);
letters.push('d');
console.log(letters);
letters[0] = 'z';
console.log(letters);
// remove the first element from an array
letters.shift();
console.log(letters);
// remove the last element from an array
letters.pop();
console.log(letters);
// add an element at the beginning of an array
letters.unshift('c');
letters.unshift('v');
letters.unshift('v');
letters.unshift('v');
console.log(letters);
// remove 4th element from the array
letters.splice(3, 1);
console.log(letters);
// find 'b' in the array
console.log(letters.indexOf('b'));

