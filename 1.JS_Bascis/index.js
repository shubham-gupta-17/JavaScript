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
