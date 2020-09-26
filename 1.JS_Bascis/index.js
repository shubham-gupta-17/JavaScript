console.log('hello shubham gupta'); // it is a statement which which will output whatever is passed within inverted commas

// declare variable 
let name;
console.log(name);

// const - will not allow updation of variable
const a=1;
console.log(a);

// primitive data types
let flag=true;
let firstName=undefined;
let color=null;  // initialize with null is good practice/ clear value of variable and this variable is a type of Object

// dynamic typing 
let surname="gupta";
console.log(typeof surname);
surname=1;  // now surname is a number(int) this is called dynamic typing
console.log(typeof surname);
console.log(typeof color);

// defining object:
let person={
    name:'ayush',
    age:22
};
console.log(person);

// dot notation: in this notation we must know the property before runtime
person.name="gupta";
console.log(person.name);

// bracket notation: it is useful if we have to select a property at runtime
let property='age';
person[property]=25;
console.log(person.age);


// Arrays
let arr=[1,2,3,4]; // length and type of values are dynamic means can be changed during runtime
arr[4]='shubham'; 
let len=arr.length;
console.log(len);
console.log(arr);
console.log(arr[2]+' '+arr[1]+" "+arr[3]);

// calling function find
let x=find(2,2);
console.log(x);  // console.log is also a function 
// functions : perform a task it is created using function keyword
function find(x,y){
    // console.log(x+y);
    return x+y;
}

