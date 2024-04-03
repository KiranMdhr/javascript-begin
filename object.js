// Object Literals
const mySym = Symbol("key1");
const User = {
  name: "Kiran",
  "full name": "Kiran Manandhar",
  [mySym]: "mykey",
  age: 22,
  location: "Kathmandu",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Satuday"],
};

// console.log(User.fullname);
// console.log(User["full name"]);

// console.log(User[mySym]);
// User.name = "Ram";
// Object.freeze(User);

// User.age = 43;

// console.log(User);

const symb = Symbol("key2");

User1 = {
  name: "kiran",
  age: 24,
  gender: "Male",
  [symb]: "key",
  address: "Kathmandu",
};
console.log(User1);

User.greeting = function () {
  console.log("hello");
};
User.greetingTwo = function () {
  console.log(`Hello Js user, ${this.name}`);
};

console.log(User.greeting());
console.log(User.greetingTwo());
