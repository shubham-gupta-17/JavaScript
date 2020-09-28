let numbers=[123,11,145,23,243,245,40,59,23];
numbers.sort(); // sort the array based on their 1st digit just like that in string (lexicographical order)
// sort in JS converts the elements in string and sorts the array in Lexicographical order
console.log(numbers);
numbers.reverse(); // reverse the array

numbers.sort((a,b)=>{ // this does not convert them to string 
    /*
        return >0 b will come first
        return =0 nothing will change
        return <0 a will come first
    */
//    if( a> b) return 1;
//    if(a<=b) return -1;
    return a-b;  // this is just like in java default sort (increasing)
    // for decreasing return b-a; (other - this)
});
let cout=console.log;
cout(numbers);



// when we have array of object as elements
let course=[
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
  { id: 2, name: 'c' },
  { id: 1, name: 'd' }
];
console.log(course);
let cou=course.sort((a,b)=>{
   
    if(a.id===b.id){
        if(a.name > b.name) return -1
        if(a.name < b.name) return 1;
        //return b.name - a.name; we can not do this as it will return NaN
// if return is not int then it will follow default sort behaviour
    }
    else return b.id - a.id;
});
cout(cou);



let name=["shubham", " ayush ", " raj"];
name.sort((a,b)=>{
    if(a>b) return 1;
    else return -1;
});
cout(name);