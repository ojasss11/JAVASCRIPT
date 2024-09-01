// JS THE LANGUAGE-->code
// JS DOM-->change the content dynamically
// 99% times we use if -else and 1% times we use switch()
// TYPES ARE MOSTLY TWO ==>Primitive DT|| Reference DT
// (),{},[]-->reference dt
let a = 12;
let b = a;
// console.log(b);
// console.log(a);
console.log(a, b);
b = b + 2;
console.log(a, b);
let arr = [1, 2, 3, 4, 5, 6];
let arr2 = arr;
console.log(arr, arr2);
arr.pop(); //in reference datatype the actual reference is copied
// copy is not passed
console.log(arr, arr2); //as it is a reference data type
// FOR COPYING THE ACTUAL REFERENCE we use the SPREAD OPERATOR
let newer = [1, 2, 3, 4];
let newer2 = [...newer]; //new is a reserved word in js
console.log(newer, newer2);
// CONDITIONAL:if else, if-else if,switch case(never is used mostly in the code)
// When we want to take a programmic decision about the next execution of the code we use CONDITIONALS
let age = 24;
if (age > 0) {
  console.log(`Valid age i.e. ${age}`);
  if (age > 10 && age < 15) {
    console.log(`KID i.e. ${age}`);
  } else if (age > 18) {
    console.log(`ADULT i.e ${age}`);
  }
} else {
  console.log(`Invalid age`);
}
// TRUTHY AND FALSY VALUES-->Each value can be true or false
// NULL NAN undefined 0 false "" '' document.all  all are falsy values
console.log(`Boolean null ::${Boolean(null)}`);
console.log(`Boolean 0 ::${Boolean(0)}`);
console.log(`Boolean false ::${Boolean(false)}`);
console.log(`Boolean 1 ::${Boolean(1)}`);
console.log(`Boolean "hellelelo" ::${Boolean("hellelelo")}`);
let driveCheckAge = 19;
if (driveCheckAge > 18) {
  console.log(`YOU CAN DRIVE`);
} else {
  console.log(`YOU CANNOT DRIVE`);
}
let canDrive =
  driveCheckAge > 18
    ? `You can drive as your age is ${driveCheckAge}`
    : `You cannot drive as your age is ${driveCheckAge}`;
console.log(canDrive);
// LOOPS-repeatation are the loops
// for,while,do-while,for-each,forin forof
// 70% FOR LOOP,25% TIMES FOR-EACH
/*
for (start; end; change) {}
for (start; end; change) {}
for(start;end;change){}
for(start;end;change){}
for (start; end; change) {}
*/
for (let i = 5; i < 11; i++) {
  console.log(i);
}
// 1 -10
for (let i = 1; i < 11; i++) {
  console.log(`FROM 1 TO 10: ${i}`);
}
console.log("                ");
// 25-50
for (let i = 25; i < 51; i++) {
  console.log(`FROM 25 TO 50: ${i}`);
}
// 35-40
console.log("                ");
for (let i = 25; i < 41; i++) {
  console.log(`FROM 25 TO 40: ${i}`);
}
console.log("                ");
// 20-5
for (let i = 20; i >= 5; i--) {
  console.log(`FROM 20 TO 5: ${i}`);
}
console.log("                ");
// 5-1
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
// start;while(END){CHANGE;}
// start;while(END){CHANGE;}
// start;while(END){CHANGE;}
// 1-10
console.log("                  ");
let i1 = 1;
while (i1 < 11) {
  console.log(`USING WHILE:` + i1);
  i1++;
}
// start;while(end){change;}
console.log("---------------------");
// 20-30
let i3 = 20;
while (i3 < 31) {
  console.log(`USING WHILE:` + i3);
  i3++;
}
console.log("---------------------");
// 32-45
let i4 = 32;
while (i4 < 46) {
  console.log(`USING WHILE:` + i4);
  i4++;
}
console.log("---------------------");
// 45-32
let i5 = 45;
while (i5 >= 32) {
  console.log(`USING WHILE:` + i5);
  i5--;
}
console.log("---------------------");
// 12-1
let i6 = 12;
while (i6 >= 1) {
  console.log(`USING WHILE:` + i6);
  i6--;
}
console.log("---------------------");
// GLORY WITH LOOPS::   1]TRY TO CREATE BASIC LOOP STRUCTURES 2]Try to conquor basic loop structures ranging from one number to another
// for(start;end;change)
// 1 3 5 7 9 11-->using for
for (let i = 1; i < 12; i = i + 2) {
  console.log(i);
}
console.log("---------------------");
// FOR EACH ek normal loop nhi hai(for and while ki tarha jo numbers pe ya start,end pe chalta hai)
// FOR EACH loop sirf arrays pe chalta hai
// FUNCTIONS IN JAVASCRIPT
// es5 and es6
// ES5-->function statements,functions expressions,anonymous functions
// ES6--> fat arrow functions
// a)Basic fat arrow
// b) FAT ARROW WITH ONE PARAM
// c)Fat arrow with implicit return
// FUNCTIONS--> js main functions normal programming language jaise nhi hai
function kaamKro() {
  console.log(`COOK FOOD`);
  console.log(`iron clothes`);
}
function printOneToFive() {
  for (let i = 1; i < 6; i++) {
    console.log(`using function:` + i);
  }
}
printOneToFive();
let todayDate = "30AUG";
function happyBirthday(day) {
  if (day === todayDate) {
    console.log(`*** Happy Birthday ***`);
  } else {
    console.log(`ERROR Birthday did'nt matched as u mentioned ${day}`);
  }
}
happyBirthday("30AUG");
happyBirthday("31AUG");
function add12(num) {
  console.log(12 + num);
}
add12(88);
/*

 */
function abcd1() {
  // function statement
}
var abcd = function () {
  // function expression-->putted a function inside a variable
};
/*
function(){
  // anonymous function-->function without a name
}*/
// FAT ARROW FUNCTION
let fatArrow = () => {
  // eg of fat arrow function
};
let ag = (a) => {
  // FAT ARROW WITH ONE PARAMETER
};
/*
let one=(parameter)=>{
  }
*/
let fatArrowWithOneParameter = (param) => {};
//as there is a single parameter the fat can be removed directly,it is not neccessary/mandatory task to remove the fat
let five = () => "five";
let ans = five();
console.log(ans);
console.log(five());
let check = () => 12;
check(); // here 12 will be stored
let checkValue = check();
console.log(checkValue);
