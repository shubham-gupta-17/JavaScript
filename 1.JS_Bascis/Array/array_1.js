// create array of objects
let arr=[
    { a:'b', b:'c'},
    { a: 'b', c: 'c'}
];
console.log(arr);
//  adding elements
let a=[3,4];
// add elements at start
a.unshift(1,2);
// add elements at end
a.push(5,6);
// add elements at mid
a.splice(2,0,7,8); // (start idx,no of elements to  delete, numbers)






// //=======================================================================================================================

// find elements in primitive type
a.indexOf(1); // if present will return index else -1, no start index hence search begins from idx=0
a.lastIndexOf(1); // will return last occurence
a.indexOf(1,2);  // 2nd argument is start index from where we want our search to begin from.
a.includes(1); // if element is present will return true else false
console.log(a);

// finding elements in reference type (Objects)
const course=[
    { id:1, name:'a'},
    { id:2,name:'b'},
    { id:2,name:'c'},
    { id:1,name:'d'}
];
course.includes({id:1,name:'a'}); // now this will return false because objects define with reference type
// must point to same memory location as it check both parameter and type here in include function we have define another 
// object which is different from course parameter object

// hence use find function for reference type
const cour=course.find(function(ele){
    return ele.name===1;   // this will return that object if not found then returns undefined
});
console.log(cour);
const cour1=course.findIndex(function(ele){
    return ele.id===2;  // returns index else -1;
});
console.log(cour1);
// now instead of writiing function we can also use Arrow function (=>) this is basically used to separate
// parameters of function to its body
const cour2=course.find((ele)=>{
    return ele.name==='a';
});
console.log(cour2);
// if we only have one parameter and one type of object we can also write it like
const cour3=course.find(ele => ele.name==='b');
console.log(cour2);






//===================================================================================================
// removing elemnts 
// from start
let  start=a.shift(); /// return the first element and pop it
let end=a.pop(); // returns the last element and pop it
let rem=a.splice(2,1); // returns the removed elements as a new array
            //    here 2: index from where you want to start removing
               // 1: no of elements to remove starting from start index
let mid=a.slice(2,4);// it returns all the elements between idx 2 to 4
let duplicate=a.slice(); // returns the complete array a as a new array







//============================================================================================================
// Empty an array
 arr=[1,2,3,4,5,6];
let another=arr;

// 1:
arr=[];

// 2:
arr.length=0;

// 3:
arr.slice(0,arr.length);

// 4:
while(arr.length>0) arr.pop();









//========================================================================================================
// combine two arrays
let first=[1,2,3];
let second=[4,5,6];
let combine =first.concat(second); // returns a new array concatination of both
// now primitive type arrays values are copied by value whereas reference type are copied by referenced
first[0]=8;
console.log(first);
console.log(combine);  // here combine[0]will not change as it is copied by value

first=[{val:1},{val:2}];
combine=first.concat(second);
first[0].val=10;
console.log(first);
console.log(combine); // here combine[0].val will also change as it is copied by reference

// combine using spread operator
combine=[...first,'a',...second,'b'];  // it also copies by reference 
first[0].val=12;
second[0]=8;  // it wont be shown in combine as it is copied by value
console.log(combine);



//iterating over arr
for(let ele of combine){  // for each loop
    console.log(ele);
}
// built in function for foreach loop
combine.forEach((ele,idx)=>{
    console.log(idx,ele);
});

// joining and combining
let numbers=[1,2,3,4];
console.log(numbers.join('-'));  // it takes a separator and separates the array elements with this separator and returns a string
let str="THIS IS ME";
console.log(str.split(' ')); //it separates the string whenever it encounters separator in string and returns an array






// =============================================================================================================================================
// every function in js

// to find if all numbers are positive or not
let allpositive=numbers.every((value)=>{
    return value>=0
})

let atleastone=numbers.some((value)=>{
    return value>=0;
})
// every checks all arrary and if any one ele fails condition returns false
// some check till it does not find one ele which satisies condition

let filtered=numbers.filter(ele=> ele>=0); 
console.log(filtered); 
// filter function returns all the elements in a new array which satisifies the condition
let items=filtered.map((val)=>{
    return '<li>' + val +"</li>"; // here we are mapping elements of array to string and returns a new array
})

// join returns a string separated by seapartor
const html= "<ul> " + items.join(" ") + " </ul>";
console.log(html);

// mapping array elements to an object
let obj=filtered.map(ele => ({value:ele}));
console.log(obj);

// now these functions are chainable i.e. we dont need to store filter array in a new array we can directly pass it to map function

let new_items=numbers
              .filter(ele=>ele>=0)
              .map(ele => "shubham_" + ele)
              .filter(ele=>ele==="shubham_1");
console.log(new_items);







//==================================================================================
// Reduce method
let sum=0;
for( let ele of numbers) sum+=ele;
console.log(sum);
// we can do this without using for loop by using reduce function
sum=numbers.reduce((accumulator,current_value)=>{ // this fn needs two arguments 1:callback function, 2: initial value of accumulator
    return accumulator+current_value;
},0);
console.log(sum);
