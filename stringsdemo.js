const name = "kiran";

const repoCount = 44;
// console.log(name + repoCount);

console.log(
  `Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`
);

const gameName = new String("kiran");

console.log(gameName[0]);
console.log(gameName.length);

const anotherName = gameName.substring(0, 3);
console.log(anotherName);
const anothersName = gameName.slice(0, 2);
console.log(anothersName);

const newStringOne = "  kiran    ";
console.log(newStringOne.trim());

const fullName = "kiran manandhar";

console.log(fullName.replace("manandhar", "hello"));
