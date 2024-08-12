// Introduction = 'array is a special variable, which can hold more than one value:'
const students =  new Array('ankit','piyush','surya','rajdeep');
// console.log(students.length);    // 4 

// array loops 

for(i = 0 ; i < students.length ; i++){
    // console.log(`student name is : ${students[i]}`);
}

// forEach naver return the values array.forEach(collbackfunction) , 
// we have collback function where aplly the condition and return the values

students.forEach(myFunction);
function myFunction(value) {
//   console.log(`student name is : ${value}`);
}
// or  

students.forEach( (value,index) => {
    console.log(`${index} student is ${value}`);
} );
const oneToTen = [1,2,3,4,5,6,7,8,9,10];
const TenToTewnty = [11,12,13,14,15,16,17,18,19,20];

const newRecorde = [...oneToTen,...TenToTewnty];
// console.log(newRecorde);
const newconcat = oneToTen.concat(TenToTewnty); // create a new array and merge in a singale array [1,  2,  3,  4,  5,  6,  7,8,  9, 10, 11, 12, 13, 14,15, 16, 17,18, 19, 20] 
// console.log(newconcat);