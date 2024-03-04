// object data type exercises
const person = {
    name: 'John',
    age: 30,
    isMarried: false,
    address: {
        city: 'New York',
        street: '5th Avenue',
        postCode: '10001',
        country: 'USA',
        houseNumber: 10,
        apartment: 3
    },
    children: ['Alice', 'Bob'],
    speak() {console.log('Hello World');},
    sleep() {console.log('Zzzzzzz');}
};
console.log(person);
console.log(person.name);
console.log(person['name']);
console.log(person.age);
console.log(person.isMarried);
console.log(person.address);
console.log(person.address.city);
console.log(person.children[0]);
console.log(person['filedName']); // undefined
// array data type exercises
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(numbers[0]);
console.log(numbers.slice(2, 5)); // [3, 4, 5]
console.log(numbers.length);

const wiredarray = [1, 2, 3, 'Hello', true, {name: 'John', age: 30}];
console.log(wiredarray);
console.log(wiredarray[3]);
console.log(wiredarray[5]); 
console.log(wiredarray[5].name);
console.log(wiredarray[5].age);
console.log(wiredarray[5]['age']);


