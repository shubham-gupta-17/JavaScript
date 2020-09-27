// Objects are just a pair of key-value pair
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
     let circle={
        radius:radius,
        location:location,
        draw:function(){
            console.log('function');
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
// 3rd method to declare an object
function Circle(radius){  
    this.radius=radius;  // with dot we can access the property/parameter of any object
    this.draw=function(){
        console.log('draw');
    }
    // return this  -> this is happening here under the hook, this function by default returns this
}

const circle1= new Circle(12); 
// new keyword do 3 things: 1. create an empty object
                        //  2. set the parameter of object using this keyword
                        //  3. return the object 
// to access a constructor of any object
console.log(circle1.constructor);
console.log(obj.constructor);
console.log(circle.constructor);

// Object is the default constructor in Javascript
let str=new String();  // constructor for string
let num=new Number();
console.log(str);