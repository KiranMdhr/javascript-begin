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

console.log(loginUserMessage("hari"));
