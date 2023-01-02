Prototype: Every Object  in javaScript has a built in property 
           which is called its Prototype.

           javaScript is Prototype Based language so when ever we create 
           a function using javacsript 
           javaScript engine add Prototype property in side the function ;        

Example of prototype

var arr = ["hello javacsript"];

Array.prototype.convertintoobj = function () {
  let obj = {};
  this.forEach((e) => {
    obj[e] = e;
  });
  return obj;
};

console.log(arr.convertintoobj());

------------------------------------------------------------------------------------------



clouser: clourse are nested function with presrved data

example of clouser

function abc() {
  let count = 0;

  return function () {
    count = count + 1;
    console.log(count);
  };
}

const counter=abc();
counter()
counter();


------------------------------------------------------------------------------------------
  VAR: if we declear a variable from var then we can also declear once again 
  the same name  and if we want to assin the value we can do that.-


  example
  var test=5;
  var test=6;
  console.log(test)

LET : if we decalarea variable from let .& then
 we can't be declear again with same name but we can reasign the value;
     

 let test=5;
   let test=6;
   console.log(test)
let a = 10;
function f() {
    if (true) {
        let b = 9

        // It prints 9
        console.log(b);
    }

     It gives error as it
     defined in if block
    console.log(b);
}
f()

It prints 10
console.log(a)


inthe normal function you able to create a constructor but es6 is not 
this 

function xyz(){
 this.c=20;
}

const arrowfunction =()=>{
  this.c=20;
}
// var a=new xyz(a);
// console.log(a)

var a=new arrowfunction(a);
console.log(a)


var count=0;
let obj={

  name:"skk",
  
  test: function()
  {
    console.log("normalfunction:",this.count)
  },
  test2: ()=>
  {
    console.log("arrow function:",this.count)
  }
}

obj.test()
obj.test2()



// -------------------------------------------






arr=["abc"];



what is promisses:
    Promises are used to handle asynchronous operations in JavaScript.
    They are easy to manage when dealing with multiple asynchronous
    operations where callbacks can create callback hell leading to 
    unmanageable code. 

    Benefits of Promises 
     .Improves Code Readability
     .Better handling of asynchronous operations
     .Better flow of control definition in asynchronous logic
     .Better Error Handling



// const obj = {
//   name: "rahul",

//   getname: function () {
//     return this.name;
//   },
// };
// const obj1 = {
//   name: "sachin",
//   __proto__: obj,
// };

// const obj2={
//   class:"mca",
//   __proto__: obj1,
// }
// console.log(obj2);

// // proto-type;

// var arr=["sachin"];

// console.log(arr)
// Array.prototype.skk=function()
// {
//   let newobj={};

//   this.forEach((e)=>{
//     newobj[e]=e;
//   })
//   return newobj
// }

// console.log(arr.skk())


Synchronous JavaScript: 
As the name suggests synchronous means to be in a sequence,
 i.e. every statement of the code gets executed one by one. So,
 basically a statement has to wait for the earlier statement to get executed.
Let us understand this with the help of an example.

Asynchronous JavaScript: 
Asynchronous code allows the program to be executed
immediately where the synchronous code will block 
further execution of the remaining code until it finishes the current one.
This may not look like a big problem but when you see it in 
a bigger picture you realize that it may lead to delaying the User Interface.

Let us see the example how Asynchronous JavaScript runs.

<script>
    document.write("Hi");
    document.write("<br>");
  
    setTimeout(() => {
        document.write("Let us see what happens");
    }, 2000);
  
    document.write("<br>");
    document.write("End");
    document.write("<br>");
</script>