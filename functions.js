function sayMyName() {
  console.log("call me ");
}

sayMyName();

function addTwoNumber(num1, num2) {
  let result = num1 + num2;
  return result;
}

const result = addTwoNumber(3, 5);

// console.log(`Result${result}`);

function loginUserMessage(username = "ram") {
  if (!username) {
    console.log("please enter your username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("hari"));

function calculateCartPrice(var1, var2, ...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 400, 500, 600));

const user = {
  username: "kiran",
  age: 22,
};

function handleObject(anyobj) {
  console.log(`usernameis ${anyobj.username} and price is ${anyobj.age}`);
}

handleObject(user);

const myNewArray = [200, 400, 600, 900];

function Something(getArray) {
  return getArray[1];
}

console.log(Something([1, 2, 3, 4]));
