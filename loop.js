// for loop: Best for a known number of iterations.
// while loop: Best for repeating until a condition changes.
// do...while loop: Best when you need the loop to run at least once.
// for...in loop: Best for iterating over object properties or array indices.
// for...of loop: Best for iterating over values in iterable objects.
// forEach() method: Best for iterating over arrays with a callback function.

const forStudent = ['rohit','rahul','sheru','neeraj','jatin'];
for(a = 0 ; a < forStudent.length ; a++){
    // console.log(`${a+1} rank is : ${forStudent[a]}`);
}

const whileStudent = ['surya Prakash singh','suraj kumar singh','ankit kumar singh','sumit'];
let i = 0;
while(i < whileStudent.length){
    // console.log(`student name like : ${whileStudent[i]}`);
    i++;
}
const doWhileStudent = ['surya Prakash singh','suraj kumar singh','ankit kumar singh','sumit'];

let j = 0 ;
do{
    if(doWhileStudent.length > 0 && j < 1){
        // console.log(`Total student ${doWhileStudent.length}`)
    }
    // console.log(`student name like : ${doWhileStudent[j]}`);
    j++;
}while(j < doWhileStudent.length)

    // for of is a array spesific loop
const studentDetails = [
    {
        rollNo:1,
        name:'aman',
        class:8
    },
    {
        rollNo:2,
        name:'ankur',
        class:8
    },
    {
        rollNo:3,
        name:'ashish',
        class:8
    },
    {
        rollNo:4,
        name:'rahul',
        class:8
    },
    {
        rollNo:5,
        name:'rohit',
        class:8
    }
]

// console.log(Array.isArray(studentDetails));
for (const datas of studentDetails) {
    if(datas.name == 'rahul'){
        // console.log('aman',datas.rollNo,datas.class);
    }else{
        // console.log(datas.rollNo,datas.class);
    }
}
const somnew= {
    name:'surya',
    age:24
}
console.log(somnew.age);
const classDetail = 
    {
        Room1:{class:8,group:'A',students:['aman','sheru','suraj']},
        Room2:{class:8,group:'B',students:['rahul','rohit','surya']}
    }

for (const key in classDetail) {
    // console.log(classDetail,key.class);
    console.log(classDetail.key.class);
}
