/**
 * playing with brackets and comments
 */
function fn () {
    console.log('Hello World');
}
fn();

const person = {name: 'John', age: 30, gender: 'male'};
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person['name']);
console.log(person['age']);
console.log(person['name'] + ' is ' + person['age'] + ' years old');
console.log(person.name + ' is ' + person.age + ' years old');
console.log(person['name'] + ' is ' + person.age + ' years old' + ' and is ' + person.gender);
console.log(person.name + ' is ' + person.age + ' years old' + ' and is ' + person['gender']);
// destructuring
const {gender} = person;
console.log(gender);    
const {name, age} = person; 
console.log(name, age);

// Path: Chapter_2/brackets.js this is one line comment

/**
 * this is a multi-line comment
 * that spans multiple lines
 * and is used to describe the code
 * and its purpose
 *  
 */