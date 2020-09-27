// we will see how we can access a class
// we can initialize class/Object either with let or const
const details={
    name:'shubham',
    age:23,
    roll:3151
} ;

details['age']=24;
console.log(details['age']);

// to iterate over parameters in object we will use in and not of
 for(let key in details)
  if(typeof details[key]==='string') // here i am comparing type of parameter with string
    console.log(key, details[key]);  // here we can not use dot notation as it take a parameter

// we can dot or bracket notation to access parameters
// dot notation: in this notation we must know the property before runtime
details.name="gupta";
console.log(details.name);

// bracket notation: it is useful if we have to select a property at runtime
let property='age';
details[property]=25;
console.log(details[property]);

