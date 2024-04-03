// let tinderUser = {};
// tinderUser.id = 123;
// tinderUser.name = "joker";
// tinderUser.isLoggedIn = false;

// // console.log(tinderUser);

// const regularUser = {
//   email: "demo@gmail.com",
//   fullname: {
//     firstname: "Kiran",
//     lastname: "Manandhar",
//   },
// };

// console.log(regularUser.fullname.firstname);
// const obj1 = {
//   1: "a",
//   2: "b",
//   3: "c",
//   4: "d",
//   5: "e",
//   5: "f",
// };

// const obj2 = { 8: "g", 9: "p" };
// const obj4 = { 0: "g", 99: "p" };
// const obj5 = { 0: "gf", 97: "psadf" };
// // const obj3 = Object.assign({}, obj1, obj2, obj4, obj5);
// // console.log(obj3);
// const obj3 = { ...obj1, ...obj2, ...obj4, ...obj5 };
// console.log(obj3);

// const users = [
//   {
//     id: 1,
//     email: "h@gmail.com",
//   },
//   {
//     id: 2,
//     email: "c@gmail.com",
//   },
//   {
//     id: 3,
//     email: "sfadh@gmail.com",
//   },
// ];

// console.log(users[0].id);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLon"));

const course = {
  cname: "Js",
  price: 5000,
  teacher: "codeaurchai",
};

// course.cname

const { cname: n, price: p, teacher: t } = course;
console.log(n, p, t);


// _______ API______

