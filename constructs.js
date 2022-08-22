// function value(x)
// {
//     x++;
//     console.log(x)
// }
// var x=5;
// value(x);//pass by value
// console.log(x)
// function reference(y)
// {
//     y.sort((a,b)=>b-a)
// }

// var y=[1,2,3,4,5,6,7,8]
// console.log(y);
// reference(y)
// console.log(y)
// function pure(q)
// {
//     return q+5;
// }
// var w=5;
// console.log(pure(w))
// console.log(pure(w))
// console.log(pure(w))
// console.log(pure(w))
// console.log(pure(w))
// let z=3;
// function impure(r)
// {
//      z+=r;
//      console.log(z)
// }
// impure(z)
// impure(z)
// impure(z)
// impure(z)
// impure(z)
// console.log(z)
// function average(a,b)
// {
//     return (a+b)/2
// }
// function add(a,b)
// {
//     return a+b
// }
// console.log(average(add(5,10),add(10,15))) // the arg of fn average is return of add fn this is called composability

// function one(a)
// {
//     let x=1
//     {
//         function two()
//         {
//             let y=2
//             return a(x,y);//call back fn add
//         }
            
//         return two
//     }
// }
// function add(a,b)
// {
//     return a+b
// }
// console.log(one(add)())//currying fn
var q=function()
{
    console.log("Hi")
}
q();
(()=>
{
    console.log("Good Morning")
})()//iife
