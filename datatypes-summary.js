//primitive
// non-primitive
//arrays, objects,functions

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

let cars = ["ferari", "lambo", "buggati"];

let myObj = {
  name: "kiran",
  age: 22,
};

const myFunction = function () {
  console.log("hello world");
};

console.log(typeof myObj);
