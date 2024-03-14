// we will learn about operators in this chapter
// date: 2024-03-04 
// author: Piotrek Maziarz

//assignment operator
let value = 5;
console.log(value);
value= 'Piotrek';
console.log(value);
value ={score: 5, name: 'Piotrek'};
console.log(value);
value=10;
console.log(value);

const osoba = { name: 'Piotrek', age: 30};
osoba.age = 31;
console.log(osoba.age);
// add elemento to the object
osoba.surname = 'Maziarz';
console.log(osoba);
// remove the property from the object
delete osoba.age;
console.log(osoba);
// arithmetic operators
let a = 5;
a = a + 1; // a += 1 // addition operator
a = a - 2; // a -= 2 // subtraction operator
a = a * 3; // a *= 3 // multiplication operator
a = a / 4; // a /= 4 // division operator
a = a % 5; // a %= 5 // modulo operator
a = a ** 6; // a **= 6 // exponentiation operator
a **= 2;
console.log(a);
// lets try if we need to use number or string
let b = 5;
let c = '5';
console.log(b + b); // addition
console.log(c + c); // string concatenation
console.log(b + c); // string concatenation
// other operators
let d = 5;
d++; // increment operator
console.log('d:'+d);
let e = '5';
d *= e; // multiplication operator
console.log('d:'+d);
d /= e; // division operator
console.log('d:'+d);
d %= e; // modulo operator
console.log('d:'+d);
d -= e; // exponentiation operator
console.log('d:'+d);

