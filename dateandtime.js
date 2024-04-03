// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);

// let aprilFool = new Date(2024, 3, 1);
// let createdDate = new Date("01-6-2034");
// console.log(aprilFool.toDateString());
// console.log(createdDate.toLocaleString());

// let myTimeStamp = Date.now();
// // console.log(myTimeStamp);
// console.log(Math.floor(Date.now()) / 1000);

let newDate = new Date();
console.log(newDate.getHours());
let today = new Date();
console.log(today.getMonth() + 1);

today.toLocaleString("default", {
  weekday: "long",
});
