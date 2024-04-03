const myArr = [1, 2, 3, 4, 5, 56, 6, "KIRAN"];
const myHeros = ["thor", "hunter"];

const myArr2 = new Array(1, 34, 5, 6, 8);
// console.log(myArr[2]);

//Array Methods

// myArr.push(2);
// myArr.push(17);
// myArr.pop();
// console.log(myArr);

// myArr.shift();
// console.log(myArr);

// const newArr = myArr.join();
// console.log(typeof newArr);
// console.log(typeof myArr);

//slice , spice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);
