// this keyword in a method represents the object which is executing current function
// this keyword in a function represents the global variable or window object
// but if we call a function with new keyword like in constructor function then this refers to an empty object




// example 1: constructor function
function video(title){
    this.title=title;
    console.log(this);  // displays the object video
};
let v= new video("shubham"); // empty object is created and pass to the this in constructor function







// example 2: simple function
let title1="apna";  // it is not an window object bcoz it is defined with let and not var
function music(){
    this.title=title1;  // now title is a window object
    console.log(this); //will display all window objects and titile which is set to apna
}
music();
//console.log(window.title);  // to see more about open live server on index.html and look at console of browser






//example 3: object
const song={
    title:'a',
    tags:['b','c','d'],
    // method:
    showTags(){
        console.log(this.tags); // here this refers to this object
        this.tags.forEach(function(tag) {
            console.log(this.title,tag);  // here this represents the global variable because eventually this is written in a callback function
            // which is a function . to make this point to this object song we can do 2 things
        })

        // 1st way using arrow function : this is the best method
        this.tags.forEach(tag => {
            console.log(this.title,tag);  // here this represents object song titile's
        })

        // 2nd way using 2nd parameter
        this.tags.forEach(function(tag) {
            console.log(this.title,tag);  
        },this)

       // 3rd way : point a variable to this
       const self=this;  // now self is pointing to this object
       this.tags.forEach(function(tag) {
        console.log(self.title,tag);  
        })
    }
}
console.log(song.showTags());   // since we are not returning anything so output will be NaN
song.showTags();



// ===================================================================================================
// 
function play(a,b){
    console.log(this); // this points to all window objects
}
play();
play.call({name:'shubham'},1,2) // now this  points to this object so we changed the scope of this
play.apply({name:'ayus'},[1,2]); // it is also same as call function
play.bind({name:'shubham'})();
//play();
// the only difference is how we pass the parameters
// these functions just make the this in  point to an object

