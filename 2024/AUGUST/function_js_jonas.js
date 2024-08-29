"use strict";
console.log("hia");
function printName() {
  console.log("my name is ojas");
}
printName();
printName();
printName();
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Fruits with ${apples} apples and ${oranges} oranges`;
  return juice;
}
console.log(fruitProcessor(4, 4));
let yearsUntilRetirement = (firstName, birthYear) => {
  let currentYear = 2023;
  let age = currentYear - birthYear;
  let retirement = 59 - age;
  return console.log(`${firstName} retires in ${retirement} years`);
};
yearsUntilRetirement("OJAS", 2003);
// functions calling other functions
function fruitCutPieces(fruit) {
  return fruit * 4;
}
function fruitProcessing(apples, oranges) {
  const applePieces = fruitCutPieces(apples);
  const orangePieces = fruitCutPieces(oranges);
  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} oranges pieces`;
  return juice;
}
console.log(fruitProcessing(4, 4));
let calcAverage = (a, b, c) => a + b + c / 3;
console.log(calcAverage(3, 4, 5));
let friend1 = "OJAS";
let friend2 = "OJAS2";
let friend3 = "OJAS3";
let friends = [friend1, friend2, friend3];
console.log(friends);
friends[3] = "ojas4";
console.log(friends);
console.log(friends.length);
let yearArray = [2000, 2001, 2002, 2003];
function calAgeNew(birthYear) {
  return 2023 - birthYear;
}
console.log(calAgeNew(yearArray[0]));
console.log(calAgeNew(yearArray[1]));
console.log(calAgeNew(yearArray[2]));
// BASIC ARRAY METHODS
let fr = ["OJAS", "OJAS1", "OJAS2", "OJAS3"];
fr.push("OJAS4");
console.log(fr);
console.log(fr.length);
console.log("The current array is:" + fr);
fr.unshift("OJAS NEW");
console.log("\t");
console.log("Array is:" + fr);
fr.pop();
console.log(fr.push("Bob"));
console.log(fr.push("Sasha"));
console.log(fr.indexOf("Bob"));
console.log(fr.indexOf("Bob"));
if (fr.includes("Bob")) {
  console.log("You have a friend called Bob");
} else {
  console.log("You don't have a friend called Bob");
}
let sashaFr = fr.includes("Sasha")
  ? "You have a friend known as Sasha"
  : "You dont Have";
console.log(sashaFr);
let ojas = {
  name: 3,
  cl: 232,
  adsad: 1231231,
};
console.log(ojas.name);
/*In JavaScript, most things are objects, from core JavaScript features like arrays to the browser APIs built on top of JavaScript. You can even create your own objects to encapsulate related functions and variables into efficient packages and act as handy data containers. The object-based nature of JavaScript is important to understand if you want to go further with your knowledge of the language, therefore we've provided this module to help you. Here we teach object theory and syntax in detail, then look at how to create your own objects.*/
let ojasInfo = {
  name: "Ojas",
  class: "S.E.",
  rollNo: 144,
};
console.log(ojasInfo.name);
const jonas = {
  name: "JONAS",
  lastName: "Schedtmann",
  job: "teacher",
  friends: ["JONAS1", "JONAS2", "JONAS3"],
  hasDriversLicense: true,
  birthYear: 1991,
  calcAge: function (birthYear) {
    return 2023 - birthYear;
  },
};
// let calcAge()
console.log(jonas.calcAge(1991));
// console.log(jonas["calcAge(1991"]);
for (let rep = 1; rep <= 30; rep = rep + 1) {
  console.log(`Lifting weight repetiton ${rep}::🏋️`);
}
// console.log();
for (let i = 1; i <= 3; i++) {
  console.log(i);
  // console.log(i.length);
}
