"use strict"; // Enables strict mode for the entire script

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; // Conditional assignment based on the passTest variable

if (hasDriversLicense) console.log(`I can drive`); // Logs a message to the console if hasDriversLicense is true

// const interface="Audio" // Strict mode reserved, will throw an error

function logger() {
  // Function declaration
  console.log(`I am a logger`);
}

logger(); // Function call
// logger(); // Additional function calls

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice; // Returns a string
}

let appleJuice = fruitProcessor(5, 0); // Function call with arguments
console.log(appleJuice); // Logs the result to the console

let appleOrangeJuice = fruitProcessor(4, 4);
console.log(appleOrangeJuice);

let appleOrangeJuice2 = fruitProcessor(4, 2);
console.log(appleOrangeJuice);

function calcAge1(birthYear) {
  let currentYear = 2023;
  const age = currentYear - birthYear;
  return age; // Returns the calculated age
}

console.log(calcAge1(2003)); // Logs the result of calcAge1 to the console

function calcAge2(birthYear) {
  // Function declaration with variable declarations and assignments
  let currentYear = 2023;
  const age = currentYear - birthYear;
  return age; // Returns the calculated age
}

// console.log(calcAge2(2003)); // Function call (commented out)

const calcAge3 = (name, birthYear) => {
  // Arrow function for calculating age
  birthYear = Number.parseInt(birthYear);
  let currentYear = 2023;
  const age = currentYear - birthYear;
  return console.log(`${name}'s current age is: ${age}`);
};

calcAge3("Ojas", 2003); // Function call

const yearsUntilRetirement = (name, birthYear) => {
  // Arrow function for calculating years until retirement
  birthYear = Number.parseInt(birthYear);
  const age = 2023 - birthYear;
  const retirementYearsLeft = 57 - age;
  let state = `${name} has ${retirementYearsLeft} years left until retirement`;
  return console.log(state);
};

yearsUntilRetirement("Ojas", 2003); // Function call

const yearsUntilRetirement2 = (name, birthYear) => {
  // Arrow function with improved readability and using the current year dynamically
  birthYear = Number.parseInt(birthYear);
  const age = new Date().getFullYear() - birthYear;
  const retirementAge = 57; // Assuming retirement age is 57
  const yearsLeftUntilRetirement = retirementAge - age;

  let state = `${name} has ${yearsLeftUntilRetirement} years left until retirement`;
  console.log(state);
};

yearsUntilRetirement2("Ojas", 2003); // Function call

// Additional examples (commented out)
/*
yearsUntilRetirement2("Anand", 1970);
yearsUntilRetirement2("Vaishali", 1980);
*/
// console.log(new Date().getFullYear() - 1997); // Logs the difference between the current year and 1997
function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor3(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apple pieces and ${orangesPieces} oranges pieces.`;
  return juice; // Returns a string
}
console.log(fruitProcessor3(3, 3));
/*
let calcAverage = (a, b, c) => {
  let avg = (a + b + c) / 3;
  return avg;
};
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);
*/
let friend1 = "DHIRAJ";
let friend2 = "MANISH";
let friend3 = "VAIBHAV";
let friends = [friend1, friend2, friend3];
console.log(friends);
const years = new Array(1990, 1991, 1992, 1993);
console.log(years);
console.log(friends.length);
console.log(friends.length - 1);
console.log(friends[friends.length - 1]); //automatic retrivel of the last element of the array
function calcAge(birthYear) {
  let currentYear = 2023;
  const age = currentYear - birthYear;
  return age; // Returns the calculated age
}
const y = [1923, 2003, 2200];
console.log(calcAge(y[0]));
friends.push("JAY");
console.log(friends);
friends.unshift("John");
console.log(friends);
let friends2 = ["Kasturi", "Aniket", "Sejal", "Sujal", "Sairam"];
console.log(friends2.indexOf("Sejal"));
console.log(friends2.includes("Sejal"));
if (friends2.includes("Sejal")) {
  console.log("YOU HAVE A FRIEND PETER");
} else {
  console.log("YOU DONT HAVE A FRIEND PETER");
}
let collegeFriends = ["Suyash", "Dhiya", "Aaditya", "Atharva", "Angela"];
console.log(collegeFriends.push("Zhoya"));
console.log(collegeFriends);
collegeFriends.pop();
console.log(collegeFriends);
collegeFriends.unshift("Raj");
console.log(`After unshifting array :${collegeFriends}`);
console.log(friends.indexOf("Shashi"));
console.log(friends.includes("Shashi"));
collegeFriends.push(23);
console.log(collegeFriends);
if (collegeFriends.includes("Dhiya")) {
  console.log(`You have a college friend named Dhiya`);
} else {
  console.log(`You don't have a college friend named Dhiya`);
}
let jonasArray = ["Jonas", 45, "Schedtman", 213];
let jonas = {
  firstname: "Jonas",
  lastname: "Schedtmann",
  age: 40,
  birthYear: 1980,
  job: "TEACHER",
  friends: ["Micheal", "Peter", "Animesh"],
  middlename: "M",
};
console.log(jonas.friends);
console.log(jonas["friends"]);
const nameKey = "name";
console.log(jonas["first" + nameKey]);
console.log(jonas["middle" + nameKey]);
console.log(jonas["last" + nameKey]);
let ojas = {
  firstname: "Ojas",
  lastname: "Bidkar",
  middlename: "Anand",
  age: 20,
  job: "Student",
  friends: ["Aniket", "Aaditya", "Sujal"],
};
// console.log(ojas["firstname"]);
/*
let interestedInOjas = prompt(
  "What are you interested in OJAS?(Choose between firstname,middlename,lastname,age,job,friends)"
  );
*/
// console.log(ojas[interestedInOjas]);
console.log(ojas.lastname);
let ojasInfo = {
  name: "Ojas",
  friends: ["Aniket", "Aaditya", "Sujal"],
  lastname: "Bidkar",
  firstname: "Ojas",
  middlename: "Anand",
  job: "Student",
  birthday: 11,
  calcAge: function (birthYear) {
    return 2023 - birthYear;
  },
};
console.log(ojasInfo.job);
ojasInfo.location = "KARJAT";
ojasInfo.insta = "ojasss11";
console.log(ojasInfo["location"]);
console.log(
  `${ojasInfo.name} has ${ojasInfo.friends.length} friends and his best-friend is ${ojasInfo.friends[0]}`
);
console.log(ojasInfo.calcAge(2003));
