// values are always static(pass by value) whereas objects are dynamic(pass by reference) in Javascript
let fun={value :10};
// fun =pointing to a object which is dynamic basically fun acts as a pointer which points to an object
// value is a property of object and has a number 10 stored in it
let y=fun;  // y also act as a pointer 
// note if y=fun.value then y act as variable which stores a number and will be static
fun.value=20;
console.log(fun.value);
console.log(y.value);
// all reference type variables are dynamically allocated and primitive types are on stack
// reference data types: objects, array, function

/* we dont have to do deallocation as Js also has garbage collector which deallocates the memory on 
it own and we dont have any control over its action
*/

// Enumerating properties of object
let circle={
    radius:2,
    draw:function(){
        console.log('hi');
    }
};

for(let key in circle) 
console.log(key+' '+circle[key]);

//for(let key of circle) console.log(key); // we can not do this because objects are not iterable
// so use of like this
for(let key of Object.keys(circle)) console.log(key ,+' '+circle[key]); 

for(let entry of Object.entries(circle)) console.log(entry);
// Objects.key returns an string array of all keys(properties) in object which is iterable

// check if a property(key) exist in object
let property='radius'
if(property in circle) console.log("yes"); 
// in -> iterate over indexs,property (for loop)
// of -> iterate over every element(their value) (foreach loop) 
// in objects we can only iterate over keys and not their values.



// CLonning an Object
const another ={}; 
for(let key in circle) another[key]=circle[key];
console.log(another);
// Or do this
const another_2=Object.assign({color: 'red'},circle); // 1st parameter is reference object in which circle object parameter will be copied
// this function returns the reference object
console.log(another_2);

// Or do this using spread operator for copying object 
const another_3= { ...circle};
console.log(another_3);


//=================================================================================================================================================================

// We can pass an object also
let address={
    street:'rama park',
    block: 'h',
    pin:'110059'
};

function print(addr)
{
    for(let key in addr)
     console.log(key+" "+addr[key]);
}
print(address);

// factory function of address
function create_address(){
    // if key and value have same name then we can simply drop values
    return {
        street:'rama',
        block: 'h',
        pin:'110059'
    };
}
const addr_2=create_address();
console.log(addr_2);

// constructor function
function addres(street,block,pin){
    this.street=street;
    this.block=block;
    this.pin=pin;
}

const addr_3=new addres("rama _","h","110059");
console.log(addr_3);

// find if both addr_2 and addr_3 are equal or not i.e. check value and type both
function isEqual(addr_2,addr_3)
{
     for(let key in addr_2)
      if(key in addr_3 && addr_2[key]==addr_3[key]) continue;
      else return "Not found";  
}

// check if both pointing to same memory location i.e. both are same or not
function isSame(addr_2,addr_3)
{
    if(addr_2===addr_3) return "YEs";
    else return "NO";
}
console.log(isEqual(addr_2,addr_3));
console.log(isSame(addr_2,addr_3));

