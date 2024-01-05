let isUserLoggedIn = true;
console.log(isUserLoggedIn);
let temp = 41;
if (temp < 50) {
  console.log(`Temp is less than 50`);
} else {
  console.log(`Temp is greater than 50`);
}
let userLoggedIn = true;
let userDebitCard = true;
if (userLoggedIn && userDebitCard) {
  console.log(`Allow user to purchase course`);
}
let loggedInGoogle = true;
let loggedInFacebook = true;
let isLoggedIn = loggedInFacebook && loggedInGoogle;
if (isLoggedIn) {
  console.log("User is already logged in");
}
let emptyObject = {};
if (Object.keys(emptyObject).length === 0) {
  console.log("object is empty ");
}
let exampleValue = null;
let defaultValue = "Hello, Default Value!";
let result = defaultValue ?? exampleValue;
console.log(result); // Hello, Default Value!
let myArr = ["Friend1", "Friend2", "Friend3"];
console.log("\t");
for (let i = 0; i < myArr.length; i++) {
  const element = myArr[i];
  console.log(element);
}
for (let i = 0; i < 10; i++) {
  // const element = array[i];
  console.log(i);
}
for (let i = 1; i <= 3; i++) {
  console.log(`OUTER LOOP::::::::: ${i}`);
  for (let j = 1; j <= 3; j++) {
    console.log(`INNER LOOP: ${j}`);
  }
}
let index = 0;
while (index <= 10) {
  console.log(index);
  index = index + 2;
}
let myArr2 = ["fr1", "fr2", "fr3", "fr4"];
let arr = 0;
while (arr < myArr2.length) {
  console.log(`Value is ${myArr2[arr]}`);
  arr++;
}
let score = 11;
do {
  console.log(`Value of score is ${score}`);
  score++;
} while (score <= 8);
console.log("\t");
arr = [1, 2, 3, 4, 5, 6];
for (num of arr) {
  console.log(num);
}
let greetings = "HelloWorld2";
for (const iterator of greetings) {
  console.log(`Each char is ${iterator}`);
}
// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
let iterator = "Hi";
let maps = new Map();
maps.set("IN", "INDIA");
maps.set("USA", "United States Of America");
console.log(maps);
let arr4 = ["Ojas", "Ojas1", "Ojas2", "Ojas3"];
for (let elements of arr4) {
  console.log(elements);
}
let greet = "Goodevening";
for (let greetings of greet) {
  console.log(`Value of greetings is:` + greetings);
}
console.log("\t");
let m1 = new Map();
m1.set("First", "fr1");
m1.set("Second", "fr12");
m1.set("Third", "fr13");
console.log(m1);
// MAPS ARE KNOWN FOR UNIQUE VALUES
for (let k of m1) {
  console.log(k);
}
for (let [key] of m1) {
  // FIRST KEY INDIVIDUALLY OF M1
  console.log(`Keys are:` + key);
}
console.log("\t");
for (let [, values] of m1) {
  //Printing values individually
  console.log(`Values are:` + values);
}
console.log("\t");
for (let [key, value] of m1) {
  // PRINTING KEYS AND VALUES SIMULATANEOUSLY
  console.log(`Keys are :- ${key} with values:- ${value}`);
}
console.log("\t");
let obj1 = {
  Ojas: "Ob",
  Dhiraj: "Dhiroz",
  Game1: "NFS",
  GAME2: "SPIDERMAN",
};
// obj1 is not iterable.Hence for-of loop cannot be used on objects
for (let i in obj1) {
  console.log(i);
}
const myObj = {
  js: "javascript",
  jv: "java",
  css: "cascading style",
  cpp: "C++",
  py: "Python",
};
console.log("\t");
for (let key in myObj) {
  // PRINTING ALL the keys in object
  console.log(key);
}
console.log("\t");
for (let key in myObj) {
  // PRINTING ALL the values in object
  console.log(myObj[key]);
}
console.log("\t");
for (let key in myObj) {
  console.log(`Keys are:- ${key} and values are: ${myObj[key]}`);
}
let arrFriend = ["O", "O", "O", "O"];
for (let key in arrFriend) {
  console.log(key);
}
// MAPS are not iteratable
let coding = ["java", "js", "c++", "python"];
/* 
Performs the specified action for each element in an array.
@param callbackfn — A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
CALLBACK FUNCTION DOES'NT HAVE A NAME
*/
console.log("\t");
coding.forEach(function (val) {
  console.log(val);
});
function printMe(value) {
  console.log(value);
}
console.log("\t");
console.log("using printMe() function:::");
coding.forEach(printMe);
/*
coding.forEach((item, index, arr)=>{
  console.log(item,index,arr);
});
*/
