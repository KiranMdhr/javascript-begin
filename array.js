// const myArr = [1, 2, 3, 4, 5, 56, 6, "KIRAN"];
// const myHeros = ["thor", "hunter"];

// const myArr2 = new Array(1, 34, 5, 6, 8);
// // console.log(myArr[2]);

// //Array Methods

// // myArr.push(2);
// // myArr.push(17);
// // myArr.pop();
// // console.log(myArr);

// // myArr.shift();
// // console.log(myArr);

// // const newArr = myArr.join();
// // console.log(typeof newArr);
// // console.log(typeof myArr);

// //slice , spice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3);

// console.log(myn1);
// console.log("B ", myArr);

// const myn2 = myArr.splice(1, 3);
// console.log("C ", myArr);
// console.log(myn2);

// _____________________________________;
const bowler = ["steyn", "bumrah", "bolt"];
const countries = ["nepal", "india", "china"];
const cricketers = [1, "dhoni", "ashwin"];

// countries.push(cricketers);

//  console.log(countries);
// console.log(countries[3]);

// const all = countries.concat(cricketers);
// console.log(all);

const alll = [...countries, ...cricketers, ...bowler];
console.log(alll);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7], [4, 5]];
let fixedArr = anotherArr.flat(Infinity);
console.log(fixedArr);

console.log(Array.isArray("KIRAN"));
console.log(Array.from("KIRAN"));

console.log(Array.from({ name: "kiran" }));

let score = 1000;
let score1 = 1000;
let score2 = 1000;

console.log(Array.of(score, score1, score2));
