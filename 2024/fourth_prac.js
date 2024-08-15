"use strict";
// console.log("hi");
let arr = [];
console.log(typeof arr);
let stud = {
  name: "IO",
  rollNo: 12,
};
console.log(stud.name);
console.log(stud["name"]);
let obj = {
  1: "one",
};
console.log(`The typeof key in the object is:` + typeof obj["1"]);
let studentName = {
  name: "Ojas Bidkar",
  UID: "121CP1055A",
  age: 22,
  marks: "93%",
  gender: "MALE",
  city: "Karjat",
};
console.log(studentName.city);
studentName.city = "Navi-Mumbai";
console.log(`Changed city is:` + studentName.city);
console.log(`Marks before are: ` + studentName.marks);
studentName.marks = "A++";
console.log(`Changed marks are: ` + studentName.marks);
delete studentName.marks; //deletes the marks
console.log(studentName);
let beClassInformation = [
  {
    name: "OJAS",
    marks: 90,
    city: "Mumbai",
  },
  {
    name: "Dhiraj",
    city: "Navi-Mumbai",
    marks: 43,
  },
  {
    city: "Andheri",
    name: "Aniket",
    marks: 90,
  },
];
console.log(beClassInformation[0]);
console.log(beClassInformation[1]);
console.log(beClassInformation[2]);
// MATH OBEJCTS-->Math.PI,Math.E
console.log(`VALUE OF MATH.E EXPO` + Math.E);
console.log(`VALUE OF MATH.pi` + Math.PI);
console.log(Math.abs(2.123123));
console.log(Math.abs(-9.123123));
// Math.floor:Returns the greatest integer less than or equal to its numeric argument.
// console.log(Math.floor(9.0001212));
// console.log(Math.ceil(9.11111));
// Math.ceil:Returns the smallest integer greater than or equal to its numeric argument.
// Math.random::Returns a pseudorandom number between 0 and 1.
let randomInt = Math.random();
// Math.random generates an random integer between 0 and 1 excluding 1 it does not includes 1 in it
// multiply by 10 gives a random number between 1 to 10 excluding 10
// multiply by 5 gives a random number between 1 to 10 excluding 5
randomInt = Math.floor(randomInt * 10) + 1;
// Math.floor(randomInt * 10) will generate a random number from 1 to 9

console.log(randomInt);
let num = 1.123123132;
/*
console.log(`The number is:`+num);
console.log(`The floor of number is:`+Math.floor(num));
*/
let numbt100 = Math.floor(Math.random() * 100) + 1;
console.log(`Random number b/w (1-100) is:` + numbt100);
let numbt5 = Math.floor(Math.random() * 5) + 1;
console.log(`Random number b/w (1-5) is:` + numbt5);
// Suppose for printing numbers between 21 to 25
// Math.floor(Math.random() * 5) + 1 this logic generates a number between 1 to 5 so let's add 21 to it
// if we
let numBetween21to25 = Math.floor(Math.random() * 5) + 21;
console.log(numBetween21to25);
function print1to5() {
  console.log("USING THE FUNCTION FOR PRINTING::");
  for (let i = 1; i < 6; i++) {
    console.log(i);
  }
}
function poem() {
  console.log(`PRINTING POEM---------`);
}
print1to5();
poem();
function rollDice() {
  let num8 = Math.floor(Math.random() * 6) + 1;
  console.log(`The rolled number is: ` + num8);
  // console.log(num8);
}
rollDice();
/*
rollDice();
rollDice();
rollDice();
*/
function add(a, b) {
  let sum = a + b;
  console.log(`Sum is ${sum}`);
}
add(2, 3);
function printDetails(name, age) {
  console.log(`The age of ${name} is ${age}`);
}
printDetails("OJAS", 19);
function averageOf3(n1, n2, n3) {
  let avg = (n1 + n2 + n3) / 3;
  console.log(`Average of ${n1},${n2},${n3} is: ${avg}`);
}
averageOf3(10, 10, 10);
function generateTable(num) {
  for (let i = 1; i < 11; i++) {
    console.log(`${num}*${i}=${i * num}`);
  }
}
generateTable(10);
function s2(a, b) {
  return a + b;
}
function subtract(n1, n2) {
  return n1 - n2;
}
console.log(subtract(10, -11));
console.log(s2(2, 3));
/*DOUBT
function sumOfnNumbers(num) {
  let sumn = 0;
  for (let i = 1; i <= num; i++) {
    sumn = sumn + i;
  }
  return sumn;
}
sumOfnNumbers(4);
*/
/*
DOUBT
let str = ["hi", "hello", "hey"];
function concat(str) {
  let result = " ";
  for (let i = 0; i < str.length; i++) {
    result += result + str[i];
  }
  return result;
}
concat(str);
*/
