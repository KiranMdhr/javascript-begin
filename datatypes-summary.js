//primitive
// non-primitive
//arrays, objects,functions

// const id = Symbol("123");
// const anotherId = Symbol("123");

// console.log(id === anotherId);

// let cars = ["ferari", "lambo", "buggati"];

// let myObj = {
//   name: "kiran",
//   age: 22,
// };

// const myFunction = function () {
//   console.log("hello world");
// };

// console.log(typeof myObj);

// -----------------------------------------------

// stack(prmitive) ,heap memory(non primitive )

// let myName = "kiran";
// let anotherName = myName;
// anothername = "manandhar";
// console.log(anotherName);
// console.log(myName);

let user = {
  email: "kiranmdhr9@gmail.com",
  age: 22,
};

let userTwo = user;

userTwo.email = "demo@gmail.com";
console.log(userTwo.email);

console.log(user.email);
