// OBJECT LITERALS:Used to store keyed collections & complex entities
// property(key,value) pair==>Objects are collection of properties
// OBJECTS ARE COLLECTION OF PROPERTIES
// MOST IMP:::(Math.floor(Math.random() * (max - min + 1))+min)
let city = {
  name: "DELHI",
  sub: ["NEW-DELHI", "OLD-DELHI"],
};
let student = {
  name: "Ojas",
  lastname: "Bidkar",
  middlename: "Anand",
  cpga: 8.1,
  location: "mumbai",
};
let item = {
  amount: 100,
  discount: 10,
  color: ["red", "yellow", "green"],
};
let threadPost = {
  username: "ojasss11",
  content: "spiritual",
  likes: 98,
  repost: 4,
  tags: ["#divine", "#believe"],
};
console.log("\t");
console.log(`username of thread post is:` + threadPost.username);
console.log(`username of thread post is:` + threadPost["username"]);
let student1 = {
  name: "Sujal",
  lastname: "Deshmukh",
  cgpa: 8.9,
  location: "Panvel(Navi-mumbai)",
};
console.log(`Fullname of student is:${student1.name} ${student1.lastname}`);
// mostly we use the dot operator but in some cases the bracket notations are use
/*
GET VALUES:Javascript automatically converts object keys to strings.
Even if we made the number as a key,the number will be converted to a string.
*/
// delete keyword is used to delete the keys of an object (delete ojas.grade)
let obj = {
  1: "a",
  2: "b",
  true: "c",
  null: "d",
  undefined: "e",
};
console.log(obj["1"]);
student.location = "Delhi";
student.grade = "A";
student.gender = "Male";
console.log(student);
delete student.grade; //deletes grades
console.log(student);
// NESTED OBJECTS-->OBJECTS OF OBJECTS
let classInfo = {
  ojas: {
    grade: "A+",
    city: "Mumbai",
  },
  dhiraj: {
    grade: "drop",
    city: "Navi Mumbai",
  },
  kunal: {
    grade: "A",
    city: "Kamothe",
  },
  sakshi: {
    grade: "B",
    city: "Raigad",
  },
  manoj: {
    grade: "A",
    city: "Delhi",
  },
};
console.log(`City of ojas : ${classInfo.ojas.city}`); //Mumbai
let classInfo2 = [
  {
    name: "ojas",
    grade: "A+",
    quality: "OUTSTANDING",
    city: "Mumbai",
  },
  { name: "dhiraj", grade: "drop", city: "Navi Mumbai" },
  {
    name: "kunal",
    grade: "A",
    city: "Kamothe",
  },
  {
    name: "sakshi",
    grade: "B",
    city: "Raigad",
  },
  {
    name: "manoj",
    grade: "A",
    city: "Delhi",
  },
];
console.log(classInfo2[0].name);
console.log(classInfo2[0].quality);
/*
MATH OBJECT:Math.PI,Math.exp(0),Math.pow(2,2),Math.floor(4.000000000)
Math.floor()::Returns the greatest integer less than or equal to its numeric argument.
Math.abs():Returns the absolute value of a number (the value without regard to whether it is positive or negative). For example, the absolute value of -5 is the same as the absolute value of 5.
Math.sin()::Returns the sine of a number.
FLOOR-->Round of to nearest,smallest integer value
CEIL-->Round of to largest integer value
Math.random()-->Returns a pseudorandom number between 0 and 1.excluding 1
*/
console.log(Math.exp(0));
console.log(Math.pow(2, 2));
console.log(Math.floor(4.0));
console.log(Math.floor(4.999999999999999));
console.log(Math.floor(9.999999999999999));
console.log("Absolute of -2:" + Math.abs(-2));
console.log(Math.sin(0));
console.log(Math.ceil(9.2));
console.log(Math.floor(Math.random() * 20) + 1);
console.log("RANDOM INTEGER'S FROM 1 TO 10");
let num = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);
console.log(`The random integer between (1-10) is: ${num}`);
console.log(`The other-random integer between (1-10) is: ${num2}`);
// RANDOM NUMBER BETWEEN 1 TO 5
console.log("RANDOM NUMBER BETWEEN 1 TO 5::");
let ranNum = Math.floor(Math.random() * 5) + 1;
console.log(ranNum);
// RANDOM NUMBER BETWEEN 1 TO 100
console.log("RANDOM NUMBER BETWEEN 1 TO 5::");
let ranNumHundred = Math.floor(Math.random() * 100) + 1;
console.log(ranNumHundred);
// 21 to 25
let min = 21;
let max = 25;
let randomT = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("random is:" + randomT);
// FUNCTIONS IN JAVASCRIPT
// Functions are blocks of reusable code that can be defined and called to perform a specific task.
/*FUNCTION DEFINITION(TELLING JAVASCRIPT)
function(funcName){
  DO SOMETHING
}
FUNCTION CALLING
funcName();
*/
function hello() {
  console.log(`hello`);
}
hello();
function printName(name) {
  console.log(`hello ${name}`);
}
printName("OJAS");
function print1To5() {
  // prints 1,2,3,4,5
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}
print1To5();
function isAdult(firstName, age) {
  age = Number.parseInt(age);
  if (age >= 18) {
    return console.log(`${firstName} is adult`);
  } else {
    return console.log(`${firstName} is not adult`);
  }
}
isAdult("ojas", 20);
console.log("\t");
function printPoem() {
  //prints a poem
  console.log(`Beneath the moonlit sky's embrace,
Whispers of the night in grace.
Stars weave tales of dreams untold,
Nature's lullaby, a story unfolds.
In the quiet, magic takes hold.`);
  console.log("\t");
}
printPoem();
function rollDice() {
  let num = Math.floor(Math.random() * 6) + 1;
  return console.log(`The number on the dice is ${num}`);
}
rollDice();
/*Functions in JavaScript can take arguments (input parameters) to perform operations based on the provided values.
Values we pass to the functions.
function funcName(arg1,arg2,arg3....){
  DO SOMETHING
}
*/
function add(a, b) {
  return console.log(a + b);
}
function multiply(x, y) {
  return console.log(x * y);
}
add(2, 3);
add(5, 5);
multiply(10, 10);
add(2, "hi"); //2hi
function averageOfThree(a, b, c) {
  let avg = (a + b + c) / 3;
  return console.log(`Average of ${a},${b},${c} is:${avg}`);
}
averageOfThree(2, 2, 22222);
averageOfThree(2132, 122, 2);
averageOfThree("hi", "hi", "hi"); //NaN
// FUNCTION THAT PRINTS MULTIPLICATION OF A TABLE
function printTable(n) {
  console.log(`PRITING TABLE OF ${n}::`);
  for (let i = 0; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
  console.log("\t");
}
printTable(7);
printTable(10);
printTable(173);
/*
return keyword::return keyword is used to return some value from the function
function funcName(arg1,arg2,arg3...){
  DO SOMETHING
  return val;
}
The return keyword is used to specify the value that a function should return. When a function is invoked and encounters the return statement, it immediately exits, and the specified value is returned to the calling code.
The code in the function after return keyword is not executed.
*/
// add(add(5, 5), 5);
function sum(a, b) {
  return a + b;
}
console.log(sum(sum(5, 5), 5));
function calcSumOfN(n) {
  let sum = 0;
  console.log("\t");
  for (let i = 0; i <= n; i++) {
    console.log(`${i}+`);
    sum += i;
  }
  // console.log("\t");
  return sum;
}
console.log(calcSumOfN(3));
function concatStr(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    result += string[i];
  }
  return result;
}
console.log(concatStr(["ojas", "ojas2", "ojas3"]));
