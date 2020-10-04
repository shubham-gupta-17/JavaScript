function get(input)
{
    console.log(input?.[1]);  //?. operator evaluates the expression only when variable is not undefined.
    console.log(input?.[1]?.[1]);
}
get([[1,2],[3]]);
get([[1],[2,3]]);
let a;
console.log(a);
get(a);