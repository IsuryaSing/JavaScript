let dataType = 'Variable can store data of different types , and different data types asn do diffenrent thinks';
let Types = 'tow types of data type primitive and non-primitive';
let primitive = 'Simple, basic types like strings, numbers, booleans, undefined, null, symbols, and BigInts.';
let nonPrimitive = 'More complex types like objects, arrays, and functions that can contain and manage ';
// console.log(dataType,Types,primitive,nonPrimitive);
 let FirstString = 'Hi Surya';  // string
 let FirstNumber = 10.12 ; // number
 let Firstboolean = true ;    // boolean
 let FirstUndifind ;    // undifinde
console.log(typeof(FirstString), typeof(FirstNumber), typeof(Firstboolean), typeof(FirstUndifind));
let createObj = {
    name : 'surya',
    age : 24
}
// console.log(typeof(createObj)) // object
let createattr = [1,2,3,4,5,6,7,8,9,10];
// console.log(typeof[createattr]) // object

const createFunction = (name) => {
    return `name: ${name}`;
}
// console.log(createFunction('surya')); // string
