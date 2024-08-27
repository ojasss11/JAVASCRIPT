// let divNum=Number.parseInt(prompt("Enter any number:"))
let divNum = 6;
divNum = Number.parseInt(divNum);
if ((divNum % 2 == 0) == 0) {
  console.log(`NUMBER IS DIVISIBLE BY 2`);
}
if ((divNum % 3 == 0) == 0) {
  console.log(`NUMBER IS DIVISIBLE BY 3`);
}
// let age3 = Number.parseInt(prompt("Enter your age:"));
let age3 = 15;
switch (age3) {
  case 11:
    console.log("Your age is 11");
    break;
  case 12:
    console.log("Your age is 12");
    break;
  case 13:
    console.log("Your age is 13");
    break;
  case 14:
    console.log("Your age is 14");
    break;
  case 15:
    console.log("Your age is 15");
    break;
  default:
    console.log();
}
let num = 6;
if (num % 3 == 0 && num % 2 == 0) {
  console.log("Number is divisible by 2 as well as 3");
} else {
  console.log("Number is not divisible by 2 as well as 3");
}
// let num2=Number.parseInt(prompt("Enter a number:"));
let num2 = 11;
if (num2 % 3 == 0 || num2 % 2 == 0) {
  console.log("Number is divisible by 3 or 2");
} else {
  console.log("Number is not divisible by 3 or 2");
}
// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }
// console.log(`PRINTING FROM 1 TO 500`);
// for (let i = 1; i <= 500; i++) {
//   console.log(i);
// }
// console.log(`PRINTING FROM 1 TO 500`);
// for(let i=0;i<500;i++){
//   console.log(i+1);
// }
//program to add first n natural numbers
let sum = 0;
// let n = Number.parseInt(prompt("Enter a number:"));
let n = 2;
for (let i = 1; i <= n; i++) {
  sum += i;
  console.log(i + "+");
}
console.log(`The sum of ${n} natural numbers is:` + sum);
let obj = {
  Shubh: 45,
  Hari: 90,
  Ojas: 20,
  Aniket: 19,
};
for (let a in obj) {
  console.log(`Marks of ${a} are ${obj[a]}`);
}
function onePlusAverage(x, y) {
  return 1 + (x + y) / 2;
}
let a = (b = 2);
console.log(`One plus average of two numbers is:${onePlusAverage(a, b)}`);
function sumOfTwoNumbers(x, y) {
  return x + y;
}
console.log(`Sum of 2 and 3 is ${sumOfTwoNumbers(2, 3)}`);
function binod() {
  return "BINOD";
}
console.log(`THE FUNCTION RETURNS ${binod()}`);
let sum2 = (m, n) => {
  return m + n;
};
console.log(`Sum of 7 and 9 is ${sum2(7, 9)}`);
let hello = () => {
  return console.log("HELLO");
};
let greetGoodMorning = (name) => {
  return console.log(`GOOD MORNING ${name}`);
};
hello();
greetGoodMorning("Shubham");
let name = "Harry";
console.log(name.length);
let friend = "Prakash";
console.log(friend);
let myFriend = "Subhash";
console.log(myFriend);
function avg(x, y) {
  return (x + y) / 2;
  return console.log("Done");
}
function done() {
  return console.log("Done");
}
// console.log(`The average of 2 and 3 is ${avg(2, 3)}`);
console.log(`The average of 2 and 3 is ${avg(2, 3)}`);
done();
console.log(`The average of 3 and 3 is ${avg(3, 3)}`);
done();
console.log(`The average of 4 and 3 is ${avg(4, 3)}`);
done();
let sum7 = (m, n, p) => {
  return console.log(m + n + p);
};
let hello3 = () => {
  return console.log(`hey hi how r u?I am toh fine yaar`);
};
hello3();
let marks = {
  Harry: 98,
  Rohan: 70,
  Aakash: 7,
};
for (let i in marks) {
  console.log(`The marks of ${i} are ${marks[i]}`);
}
/*
let cn = 90;
let ent_num;
while (ent_num != cn) {
  // prompt("Enter a number");
  ent_num = prompt(`Enter a number`);
}
console.log(`You entered the correct number`);
*/
function meanOfFiveNumber(a, b, c, d, e) {
  return (a + b + c + d + e) / 5;
}
console.log(`The mean of 2,3,4,5,6 is: ${meanOfFiveNumber(2, 3, 4, 5, 6)}`);
console.log(`The mean of 2,2,2,2,2 is: ${meanOfFiveNumber(2, 2, 2, 2, 2)}`);
let namen = "Ojas";
console.log(`The length of the string is ${namen.length}`);
// IF THE STRING STARTS WITH A SINGLE QUOTE CLOSE IT WITH SINGLE QUOTE
// IF THE STRING STARTS WITH A DOUBLE QUOTE CLOSE IT WITH DOUBLE QUOTE
let myFriend2 = "Subhash";
let boy1 = "Pramod";
let boy2 = "Nikhil";
console.log(`${boy1} is a friend of ${boy2}`);
console.log(`${boy2} is also friend of ${boy1}`);
// Template literals use backtiks
// We can insert variables name directly in template literals.This is called as String Interpolation
let fruitm = `Bana'na`;
console.log(fruitm);
fruitm = "Bana'na";
console.log("Using escape sequence characters", +fruitm);
name = "Harry";
console.log(`Length of the string ${name.length}`);
console.log(`uppercase method():` + name.toUpperCase());
console.log(`uppercase method():${name.toUpperCase()}`);
console.log(`lowercase method(): ${name.toLowerCase()}`);
// console.log(`lowercase method(): ${name.toLowerCase()}`);
console.log(`Slicing of string ${name.slice(0, 2)}`);
name2 = "               DHIROZ                   ";
name3 = "               RORAJ                   ";
console.log(name2.trim());
console.log(name3.trim());
let str1 = "A string primitive";
let str2 = "Another primitive";
let str3 = `Yet another string primitive`;
let fr = "Shivika";
// console.log(fr[0]);
// console.log(fr[1]);
// console.log(fr[2]);
for (let i = 0; i <= fr.length; i++) {
  console.log(fr[i]);
}
myfr = "Shivika" + " Rohan " + "Ritesh";
console.log(myfr);
/*ERROR IN CODE
let sentence = "Dhiraj took 1000 Rs from Manish";
let word = "Dhiraj";
console.log(`The word "${word}" ${sentence.includes(word)?'is':'is not' in the sentence}`);
*/
function lowerString(name) {
  let newstr = name.toLowerCase();
  return console.log(newstr);
}
function upperString(name) {
  let newstr = name.toUpperCase();
  return console.log(newstr);
}
lowerString("RAMESH");
lowerString("PRAKESH");
upperString("rhitesh");
let rupeeString = `Please give me RS1000`;
let amt = rupeeString.slice("Please give me RS".length);
console.log(amt);
console.log(typeof amt);
let marks_class_12 = [90, 93, 92, 94, 95, 100, "NOT PRESENT"];
console.log(marks_class_12[0]);
console.log(marks_class_12[1]);
console.log(marks_class_12[2]);
console.log(marks_class_12[3]);
console.log(marks_class_12[4]);
console.log(marks_class_12[5]);
console.log(marks_class_12[6]);
console.log(`The length of marks_class_12 is:` + marks_class_12.length);
console.log(typeof marks_class_12);
let names = ["OJAS", "AADITYA", "SUJAL", "ANIKET", "ATHARVA"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
console.log(names[5]); //gives the result undefined as it does'nt contain anything
names[5] = 90;
let stud_with_mark = [
  {
    Ojas: 20,
    Dhiraj: 20,
    Rahim: 50,
    Raj: 80,
  },
];
console.log(stud_with_mark[0]);
let arrmethod = [1, 2, 3, 34, 4];
arr4 = arrmethod.toString();
console.log(arr4);
let arr5 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
arr6 = arr5.toString();
console.log(arr6);
let d = arrmethod.join(" + ");
console.log(d);
let stud_college_marks = [91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 90];
console.log(`The length of stud_college_marks is:` + stud_college_marks.length);
console.log(`Printing marks using the help of arrays: ${stud_college_marks}`);
// ARRAYS ARE MUTABLE ARRAYS CAN BE CHANGED
//STRINGS ARE IMMUTABLE STRINGS CANNOT BE CHANGED
// IN JAVASCRIPT ARRAYS ARE OBJECTS
let n1 = stud_college_marks.toString();
console.log(n1);
// console.log(typeof n1);
let n2 = stud_college_marks.join(" and ");
console.log(n2);
stud_college_marks.pop();
console.log(stud_college_marks);
stud_college_marks.push(32232);
console.log(stud_college_marks);
let compare = (a, b) => {
  return a - b;
};
let numArray = [123, 1545, 91231, 12419240];
numArray.sort();
console.log(numArray);
numArray.sort(compare);
console.log(numArray);
num = [
  1124124, 212124, 1243, 12414, 124124124125, 124124126, 7124124, 8123, 134,
];
console.log(`PRINITNG ARRAY USING FOR LOOP`);
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}
array.forEach((element) => {});
