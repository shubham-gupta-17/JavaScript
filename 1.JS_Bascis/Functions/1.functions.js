//Declaration of function
// it is function declaration
fun() // it will not give the error
function fun(){
    return "HI";
}
console.log(fun());


//it is  Anonymous function expression 
//fun_2(); // it will give error
let fun_2=function(){
    return "hi";
};
// here fun_2 is  a reference to the function 
let fun_3=fun_2; // both pointing to same memory and same function
console.log(fun_2===fun_3);
console.log(fun_2());
console.log(fun_2);


//================================================================================
// What is Hoisting 
/*
during execution the Js engine(which is executing the code) moves all the functions declaration to the top hence
it does not matter if we have call function before or after its declaration
but the function expression will remain at the point where it is define hence we can call function expression
only after its declaration
*/






//==================================================================================================================================
// Arguments : JS has an object called arguments which stores the parameters in an object when pass in a funciton
function sum(){
    console.log(arguments);
    let total=0;
    // for (let i of arguments) total+=i;
    // return args.reduce((a,b)=>a+b);
    for(let i in Object.keys(arguments)) total+=arguments[i];
    return total;
}
// we can use of for any object which it iterable for e.g. here arguments are iterable
console.log(sum(1,2,3,4,5,6));









//========================================================================================================================================================
//Rest operator: when we apply this (...)in front of any variable then the rest operator can take any number of input and put them in array
// note that rest parameter must be the last parameter, we can not pass any another parameter after that

function rest(...arg)
{
    /*let sum=0;
    for(let i in arg) sum+=arg[i];
    return sum;*/
    return arg.reduce((a,b)=> a+b);
}
console.log(rest(1,2,3,4,5,6));







//======================================================================================
//Default parameters= it must be the last argument 
function find(va,n,m=10){
    return va+n+m;
}
console.log(find(100,1));



//=======================================================================================
// Getters and Setters
const person={
    first:"shubham",
    surname:"gupta",
    fullName(){
        return `${this.first} ${this.surname}`;
    }
}
console.log(person.fullName());

// implementing above using getter and setter
const person2={
    first:"shubham",
    second:"gupta",
    get fullName(){
        return `${this.first} ${this.second}`
    },
    set fullName(value){
        let name=value.split(" ");
        this.first=name[0];
        this.second=name[1];
    }
};
person2.fullName="Ayush Gupta";  // what if we pass null or " "here it is not a valid string
console.log(person2.fullName);

