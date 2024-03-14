// playing with comparison operators
const utils = require('./utils.js');

let x = 5;
let y = '5';
let textLog
let chapterNumber = 2.9;
utils.addBorder(chapterNumber+' equal to');
if (x == y) {
  console.log('x is equal to y');
};
if (x === y) {
  console.log('x is strictly equal to y');
};
if (x != y) {
    console.log('x is not equal to y');
};
if (x !== y) {
    console.log('x is strictly not equal to y');
};
// greater than 
utils.addBorder(chapterNumber+' greater than');
y ='4';
if (x > y) {
    console.log('x is greater than y');
};
// less than or equal to
utils.addBorder(chapterNumber+' less than or equal to');
