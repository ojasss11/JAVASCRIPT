/* 
⁡⁣⁣⁢SCOPE OF A FUNCTION:-Scope defines the accessbilty of various variables
,objects, and functions from different parts of the code.
FUNCTION SCOPE,BLOCKED SCOPE,LEXICAL SCOPE⁡
*/
let sum = 50; //Global scope
function calculateSum(a, b) {
  let sum = a + b;
}
calculateSum(1, 2);
console.log(sum); //⁡⁣⁢⁣sum is not defined==>it is called as function scoped⁡
// ⁡⁣⁣⁢𝗕𝗹𝗼𝗰𝗸 𝗦𝗰𝗼𝗽𝗲::𝗩𝗮𝗿𝗶𝗮𝗯𝗹𝗲𝘀 𝗱𝗲𝗰𝗹𝗮𝗿𝗲𝗱 𝗶𝗻𝘀𝗶𝗱𝗲 𝗮 𝗯𝗹𝗼𝗰𝗸 {} 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗲 𝗮𝗰𝗰𝗲𝘀𝘀𝗲𝗱 𝗳𝗿𝗼𝗺 𝗼𝘂𝘁𝘀𝗶𝗱𝗲 𝘁𝗵𝗲⁡ ⁡⁣⁣⁢𝗯𝗹𝗼𝗰𝗸.⁡
{
  let aaa = 10; //BLOCK SCOPED
  var bbb = 12;
}
// console.log(aaa); //a is not defined
console.log(bbb);
/*
for (let i = 0; i < 3; i++) {
  console.log(i); //BLOCKED SCOPE
}
*/
/*
LEXICAL SCOPE::a variable defined outside a function can be accessible inside another function defined after variable declaration.
*/
// GLOBAL SCOPE
let global = `I am global scope`; //global scope
function outerScope() {
  let outer = `I am outer scope`;
  function inner() {
    let inner2 = `I am inner scope`;
    console.log(global);
    console.log(outer); //lexical scope
    console.log(inner2);
  }
  inner();
  // console.log(outer);
  //console.log(inner2); // inner2 is not defined as it is function scoped
}
console.log(global + "::::::::::");
outerScope();
// console.log(inner2);// inner2 is not defined as it is function scoped
// console.log(outer);
console.log("\t");
let greet = "hello"; //global scope
function changeGreet() {
  let greet = "namaste"; //function scope
  console.log(greet);
  function innerGreet() {
    console.log(greet); //lexical scope
  }
}
console.log(greet);
changeGreet();
console.log("\t");
// FUNCTION EXPRESSIONS:It means functions are defined but it is scored under a variable
/* These are mostly nameless functions
const variable=function(arg1,arg2,arg.....){
  DO or RETURN SOMETHING
}
*/
let sum2 = function (a, b) {
  return a + b;
};
console.log("Sum of 5 and 7=" + sum2(5, 7));
let hi = function (name) {
  return `HI ${name}`;
  // return "Greeting sent";
};
console.log(hi("OJAS"));
/*
 A higher-order function in JavaScript is a function that either takes another function as an argument or returns a function as a result. These functions allow you to work with functions more flexibly, treating them as values that you can pass around and manipulate.
 */
/*
A function that takes one or more functions as an argument.
*/
/*
function multipleGreet(func, count) {
  for (let i = 0; i <= count; i++) {
    func();
  }
}
let greet2 = function () {
  console.log("Hello world");
};
multipleGreet(greet2, 2);
*/
function multiExecute(func, count) {
  // higher order function
  for (let i = 0; i <= count; i++) {
    func();
  }
}
let helloWorld = function () {
  console.log("HELLO");
};
multiExecute(helloWorld, 2);
function greeting() {
  console.log(`Happy New Year`);
}
greeting();
function canVote(age) {
  if (age >= 18) {
    return console.log(`Can vote`);
  } else {
    return console.log(`Can't vote`);
  }
}
canVote(19);
function rollADice() {
  let random = Math.floor(Math.random() * 6) + 1;
  return console.log(random);
}
rollADice();
function newYear(year) {
  console.log(`Welcome ${year}.BYE-BYE ${year - 1}`);
}
newYear(2024);
function avgMarks(phy, chem, math, bio) {
  let avg = (phy + chem + math + bio) / 4;
  return console.log(avg);
}
avgMarks(90, 90, 99, 90);
function hey() {
  console.log("HEY1");
  console.log("HEY2");
  return;
  // HEY 3 and HEY4 will not be printed as they are after the return statement
  console.log("HEY3");
  console.log("HEY4");
}
hey();
function sumOfNumbers(num) {
  let sum = 0;
  console.log("\t");
  for (let i = 0; i <= num; i++) {
    console.log(`${i}+`);
    sum += i;
  }
  return console.log(`Sum of ${num} numbers is: ${sum}`);
}
sumOfNumbers(3);
// FUNCTION THAT RETURNS CONCATENATION OF ALL STRINGS OF AN ARRAY
function concatStrings(str) {
  let rel = "";
  for (let i = 0; i < str.length; i++) {
    rel = rel + str[i];
  }
  return console.log(`Concatenation of all strings is:` + rel);
}
concatStrings(["OJAS", "OJAS1", "OJAS2", "OJAS3", "OJAS4"]);
concatStrings(["OJAS1", "OJASSSSSSSSS"]);
function multipleWish(func, count) {
  for (let i = 1; i <= count; i++) {
    func();
  }
}
multipleWish(hey, 3);
multipleWish(function () {
  console.log("NAMASTE");
}, 2);
/*
function oddEvenTest(request) {
  if (request == "odd") {
    let odd = function (n) {
      console.log(!(n % 2 == 0));
    };
    return odd;
  } else if (request == "even") {
    let even = function (n) {
      console.log(n % 2 == 0);
    };
  } else {
    console.log("Wrong request!");
  }
}
oddEvenTest("odd");
*/
//  WHEN FUNCTIONS ARE DEFINED UNDER OBJECTS THEY ARE KNOWN AS METHODS
let calc = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
  div: function (a, b) {
    return a / b;
  },
};
console.log(calc.sub(1, 1));
console.log(calc.add(111, 11));
/*"this" keyword refers to an object that is executing the current piece of code
 */
let student1 = {
  name: "Ojas",
  phy: 40,
  chem: 35,
  maths: 80,
  getAvg: function () {
    let avg = (this.phy + this.chem + this.maths) / 3;
    return `${this.name} got average marks ${avg}`;
  },
};
console.log(student1.getAvg());
/*
The try statement allows you to define a block of code to be tested for errors while it is being executed
The catch statement allows you to define a block of code to be executed,if an error occurs in the try block
*/
let a = 2;
try {
  console.log("Value of a is:" + a);
} catch {
  console.log("A IS NOT DEFINED");
}
let sumOfTwo2 = (a, b) => {
  return console.log(a + b);
};
sumOfTwo2(4, 4);
let cube = (n) => {
  return console.log(`CUBE of ${n} is:` + n * n * n);
};
cube(3);
const squareOfNum = (n) => {
  return console.log(`Square of ${n}` + n * n);
};
squareOfNum(2);
/*
Set-Time Out:settimeout(function,timeout)
The timeout is calculated in milliseconds (if we have to pass 1second ===1000) 
2seconds=2000,3seconds==3000 and so on..
*/
console.log("Hi");
/*
setTimeout(function () {
  console.log("OJAS");
}, 3000);
*/
// console.log("WELCOME");
let newer = {
  name: "D1",
  prop: this,
  getName: function () {
    return this.name;
  },
  getMarks: () => {
    return this.marks;
  },
};
console.log("name:" + newer.getName());
console.log("marks:" + newer.getMarks());
