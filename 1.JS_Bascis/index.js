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
// if we dont want the class to change then initialize it with const
const namee={
     surname:'gupta',
     age:23
};
for(let key in namee)
console.log(namee[key]);

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

// exponentiation operator x^y
console.log(2**3);

//difference between == and === operator
console.log(2==='2');

// logical operator
console.log( false || "shubham");

// control flow 
let c=2;
if(c>1) console.log("yes");


// function landscape
let ans=isLandscape(100,200);
console.log(typeof ans);
function isLandscape(height,width)
{
    return height>width ? portrait : isLandscape;
}

let r=Math.floor(1.3);  // smaller int number then float number
console.log(r);

let sum=0;
for(let i=0;i<arr.length-1;i++)
  sum+=arr[i];
  console.log(sum);

// foreach loop
for(let m of arr) 
  console.log(m);

  // basic for loop
    for(let i in arr)
       console.log(arr[i]);




  // print stars
console.log();
for(let i=0;i<5;i++)
{
    let pattern=''
    for(let j=0;j<=i;j++)
      pattern+='*';
      console.log(pattern);
}

// Switch case
let role='guest';
switch(role){
    case 'guest':
    console.log('yes');
    break; // if we dont use break then lower print statement will alsobe executed

    case 'moderator':
    console.log('no');
    break;

    default:
        console.log('not');
}



// do while
let i=1;
do{
    console.log(i);
    i++;
}while(i<4);