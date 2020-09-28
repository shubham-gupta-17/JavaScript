// Objects are just a pair of key-value pair these are similar to class in C++
// 1st method to declare an object
const circle={

    radius: 2,
    location:{  // define another class in a class
        x:1,
        y:1
    },
    visible:true,
    // how to declare a fucntion in a class it is also a key value pair 
    // if a function is a part of a class then it is called method
    draw:function(){  // here draw is a function 
        console.log('it is a function');
    },

    // 2nd way to define function inside class
    draw2(){
        console.log('another method');
    }
};

circle.draw();  // access a function using dot notation
circle.draw2();

let obj1=circle;
console.log(obj1);


//======================================================================================================
// 2nd method to declare an object
// Factory function : it will return a object
function createCircle(radius,location)
{
    // we will return like this only if we have to pass our object as reference for some work 
    //if key and value are same then we can simply drop values
     let circle={
        radius:radius,
        location:location,
        draw:function(){
            console.log('shubham');
        }
     };

     return circle;

     // if our class is constant  then we can simply return 
     /*
        return {


        }
     */
}

let obj=createCircle(12,2);
console.log(obj);


//=================================================================================================
// 3rd method to declare an object : constructor function
function Circle(radius){  
    this.radius=radius;  // with dot we can access the property/parameter of any object
    this.val=10;
    this.draw=function(){
        console.log('drawww');
    }
    // return this  -> this is happening here under the hook, this function by default returns this
}

// there are 2 ways to call the function Circle
/* 1st way :*/  const circle1= new Circle(12); 
/* 2nd way :*/  Circle.call({},12);  // 1st argument is empty object and 2nd argument are parameters
/* 3rd way: */  Circle.apply({},[12])  // 2nd argument is passed as an array 
// new keyword do 3 things: 1. create an empty object i.e {}->empty object which is passed to constructor function automatically
                        //  2. this(keyword) references to an empty object and it sets the parameter of reference object 
                        //  3. function Circle returns the object referenced by this it is also done automatically

// new and {} basically specifies the target for this to which it can reference to if we don't provide any
// reference to this there it wont be able to set the parameters(eg passing a garabage value).

// to access a constructor of any object
console.log(circle1.constructor);  // here constructor basically means the function used to create that object
console.log(obj.constructor);
console.log(circle.constructor);
circle1.draw();
// Object() is the default constructor in Javascript


//=============================================================================================
let str=new String();  // constructor for string dynamic allocation
let num=new Number();
console.log(str);

// now there are 2 types of primitive data type 
let s='hi'// primitive string (stack)
s='hi'+ 2; // for concating we need to use + operator
s=new String(); // string object (dynamic)
// look at documentation for more string functions
console.log(typeof s);
// also look at escape notation

// Template literals 
// string ={};
// boolean= true,false
// using `` for defining string will allow us to show O/P as per our choice and for concatination use ${ }

let sur_name='gupta';
let another= `this  
"is" 
'shubham' ${sur_name}`; 
console.log(another);

//===================================================================================================
// Date in javascript
const date=new Date() // constructor for date
const date1=new Date('May 11 2017 9:00');
const date2=new Date(2018, 4, 11, 9, 0);
// year, month, date, time(hour), minute