let age = 12;
if (age > 21) {
  console.log("You are adult");
} else {
  console.log("You can't marry");
}
console.log("Before my if statement");
if (age === 20) {
  console.log(`You are2 20 yrs old`);
} else {
  console.log(`You are not 20`);
}
console.log(`AFTER IF STATEMENT:`);
let firstname = "Shraddha";
if (firstname === "Shraddha") {
  console.log(`Welcome ${firstname}`);
}
let color = "red";
if (color === "red" || color === "Red" || color === "RED") {
  console.log(`Stop!Light color is red`);
}
if (color === "yellow") {
  console.log(`Slow down`);
}
if (color === "green") {
  console.log(`You can go`);
}
/*
if(condition 1){
  DO SOMETHING
}
else if(condition 2){
  DO SOMETHING
}
else if(condition 3){
  DO something
}
*/
let marks = 80;
if (marks >= 80) {
  console.log(`A+ GRADE`);
} else if (marks >= 60) {
  console.log(`A GRADE`);
} else if (marks >= 50) {
  console.log("B GRADE");
} else if (marks <= 33) {
  console.log("F GRADE");
}
let month = "January";
if (month === "January") {
  console.log(`Winter is here`);
} else if (month === "April") {
  console.log(`Summer is here`);
}
// IF ALL THE ABOVE CONDITIONS in the if block and if-else block are not executed then the conditions in the else block are exectued
// TRAFFIC LIGHT CODE WITH IF-ELSEIF-ELSE BLOCK
let clr = "white";
if (clr === "red") {
  console.log(`Stop. Traffic light color is ${clr}`);
} else if (clr === "yellow") {
  console.log(`Wait.`);
} else if (clr === "green") {
  console.log(`You can go`);
} else {
  console.log(`Traffic light is broken`);
}
// SYSTEM to calculate poprcorn prices based on size
let popcornSize = "xl";
let price;
if (popcornSize === "XL" || popcornSize === "xl") {
  price = 250;
} else if (popcornSize === "l" || popcornSize === "L") {
  price = 200;
} else if (popcornSize === "M" || popcornSize === "m") {
  price = 100;
} else if (popcornSize === "S" || popcornSize === "s") {
  price = 50;
}
console.log(
  `The popcorn price is Rs.${price} for the popcorn-size "${popcornSize}"`
);
// NESTED IF-ELSE:nesting is to write if-else statements in another if-else statements.
// It can have many levels
console.log("\t");
let marks2 = 90;
if (marks2 > 33) {
  console.log(`PASS`);
  if (marks2 > 80) {
    console.log(`OUTSTANDING`);
  } else {
    console.log("A GRADE");
  }
} else {
  console.log(`Better luck next time`);
}
/*
LOGICAL OPERATORS ARE USED TO COMBINE OPERATORS-->they always returns boolean values
LOGICAL AND(&&)
LOGICAL OR(||)
LOGICAL NOT(!)
*/
console.log(`(true && true):` + (true && true));
console.log(`(true && false):` + (true && false));
console.log(`(false && false):` + (false && false));
let string = "anuj";
if (string[0] === "a" && string.length > 3) {
  console.log(`${string} is a good string`);
} else {
  console.log(`${string} is not a good string`);
}
let num = 12;
if (num % 3 === 0 && (num + 1 == 15 || num - 1 == 11)) {
  console.log(`Safe`);
} else {
  console.log(`Unsafe`);
}
/* 
Truthy and falsy values::Everything in JS is true or false(in boolean context).
This doesn't mean their value itself is false or true,but they are treated as false or true if taken in boolean context
FALSY VALUES:: false,0,-0,0n(BigInt Value),""(empty string),null,undefined,NaN
Truthy VALUES::Everything else
*/
if ("") {
  console.log(`It is a truthy value.`);
} else {
  console.log(`It is a falsy value.`);
}
if (" ") {
  console.log(`It is a truth value.`);
}
console.log("\t");
let colors = "red";
switch (colors) {
  case "red":
    console.log(`RED COLOR`);
    break;
  case "yellow":
    console.log(`YELLOW COLOR`);
    break;
  case "green":
    console.log(`GREEN COLOR`);
    break;
  default:
    console.log(`Not a valid color`);
    break;
}
// DAYS OF A WEEK USING SWITCH
let day = 12;
switch (day) {
  case 1:
    console.log(`Monday`);
    break;
  case 2:
    console.log(`Tuesday`);
    break;
  case 3:
    console.log(`Wednesday`);
    break;
  case 4:
    console.log(`Thursday`);
    break;
  case 5:
    console.log(`Friday`);
    break;
  case 6:
    console.log(`Saturday`);
    break;
  case 7:
    console.log(`Sunday`);
    break;
  default:
    console.log(`Not a valid day`);
    break;
}
/*ALERT AND PROMPT::
Alert displays an alert message on the page.
alert("Something is wrong!");
Prompt displays a dialog box that asks user for some input
prompt("Enter your roll no.")
*/
console.log("PRACTICE QUESTIONS::");
let num2 = 100;
if (num2 % 10 == 0) {
  console.log(`GOOD`);
} else {
  console.log(`BAD`);
}
// SWITCH TO PRINT MONTHS IN A QUARTER
let quarter = 1;
switch (quarter) {
  case 1:
    console.log(`January.February.March`);
    break;
  case 2:
    console.log(`April.May.June`);
    break;
  case 3:
    console.log(`July.August.September`);
    break;
  case 4:
    console.log(`October.November.December`);
    break;
  default:
    console.log(`Not a valid month`);
    break;
}
let str = "Kakash";
if ((str[0] === "A" || str[0] === "a") && str.length > 5) {
  console.log(`${str} is a GOLDEN STRING`);
} else {
  console.log(`${str} is NOT A GOLDEN STRING`);
}
// LARGEST OF THREE NUMBERS
let number1 = 1222;
let number2 = 12;
let number3 = 19;
if (number1 > number2 && number1 > number3) {
  console.log(`${number1} is largest among the three numbers`);
} else if (number2 > number1 && number2 > number3) {
  console.log(`${number2} is largest among the three numbers`);
} else {
  console.log(`${number3} is largest among the three numbers`);
}
// PROGRAM TO CHECK IF TWO NUMBERS HAS THE SAME LAST DIGIT
let numlast1 = "10";
let numlast2 = "11";
if (numlast1[numlast1.length - 1] === numlast2[numlast2.length - 1]) {
  console.log(
    `Both the numbers has the same last digit i.e. ${
      numlast1[numlast1.length - 1]
    }`
  );
} else {
  console.log(`Don't have the same last digit`);
}
