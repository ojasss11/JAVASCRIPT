console.log("HELLO WORLD WITH OJAS");
let a = 12;
let b = 12;
let c = 12;
console.log(a + b + c);
function addThreeNumbers(a, b, c) {
  return a + b + c;
}
console.log("The sum of three numbers is:" + addThreeNumbers(10, 10, 10));
// VARIABLES ARE LIKE CONTAINERS
// let 6ojas=99;// this is not allowed while declaring variables
let ojas$Bidkar = "OB";
console.log(ojas$Bidkar);
var l = 10;
l = 12213;
console.log(l);
let d = null;
let e = 234;
let f = true;
let g = undefined;
let h = Symbol("I am nice symbol");
console.log(typeof h);
// NN BB SS U
//NULL  NUMBER  BOOLEAN  BIGINT STRING SYMBOL UNDEFINED
//OBJECT IS A NON-PRIMITIVE DATA TYPE
const item = {
  Ojas: true,
  Dhiraj: false,
  Lovish: 34,
  Dhiraj: 99,
};
console.log(item["Ojas"]);
console.log(item["Dhiraj"]);
// PRACTICE SET QUESTIONS
let ab = "Animesh";
ab = ab + 45;
console.log(ab); //Animesh45
console.log(typeof ab); //typeof will give the output as STRING
const item2 = {
  Dhiraj: 23,
  Dhiren: 45,
  Vaibhav: 28,
  Shashi: 1223,
  Bhargav: 1212,
};
item2["Dhiraj"] = 90;
console.log(item2["Dhiraj"]);
item2["Mahesh"] = 23;
console.log(item2["Mahesh"]);
const dict = {
  appreciate: "recognise the whole worth of it",
  coder: "a person who codes",
  time: "a scalar quantity in physics",
};
console.log(`The meaning of time is-${dict["time"]}`);
console.log(dict.time);
7;
("BINOD");
(a = 45), (b = 4);
console.log("The value of a+b is", a + b);
console.log("The value of a-b is", a - b);
console.log("The value of a*b is", a * b);
console.log("The value of a/b is", a / b);
console.log("The value of a%b is", a % b);
console.log("The value 2 to the power 3 is " + 2 ** 3);
console.log("The value of ++a is " + ++a);
a = 10;
a += 10; //is as same as a=a+10;
console.log(a);
let assignment = 10;
assignment *= 10;
console.log(`The current value of assignment is ${assignment}`);
(a = 6), (b = "6");
console.log("The value of a==b is:" + (a == b));
console.log("The value of a!=b is:" + (a != b));
console.log("The value of a===b is:" + (a === b)); //gives result as false as it also checks for datatype
console.log("The value of a!==b is:" + (a !== b));
/*multiple
lines 
comment*/
/*//age simple program
let age = prompt("What is your age?");
age = Number.parseInt(age);
console.log(typeof age);
if (age >= 18) {
  console.log(`You can drive the car`);
} else {
  console.log("You cannot drive");
}
*/
/*
let A = prompt("Enter a number");
A = Number.parseInt(A);
console.log(typeof A);
*/
/*
let num = prompt("Enter a number");
num = Number.parseInt(num);
if (num === 0) {
  console.log(`The number is zero`);
} else if (num > 0) {
  console.log("It is a positive number");
} else if (num < 0) {
  console.log("It is a negative number");
}
*/
/*
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
for (let i = 1; i <= 10; i++) {
  let inputNumber = Number.parseInt(prompt(`Enter number:${i}`));
  if (inputNumber === 0) {
    zeroCount++;
  } else if (inputNumber < 0) {
    negativeCount++;
  } else if (inputNumber > 0) {
    positiveCount++;
  }
}
console.log("The number of Positive Numbers are:" + positiveCount);
console.log("The number of Negative Numbers are:" + negativeCountCount);
console.log("The number of Zero's are:" + zeroCountCount);
*/
/* CODE WITH ERROR
let ageDhiraj = Number.parseInt(prompt(`Enter Dhiraj's age:`));
let ageManish = Number.parseInt(prompt(`Enter Manish's age:`));
if (isNaN(ageDhiraj)) {
  alert("Enter valid age for Dhiraj");
  let ageDhiraj = Number.parseInt(prompt(`Enter Dhiraj's age:`));
  if (isNaN(ageManish)) {
    alert("Enter valid age for Manish");
    let ageManish = Number.parseInt(prompt(`Enter Manish's age:`));
  }
  if (ageDhiraj > ageManish) {
    console.log("Dhiraj is elder than manish");
  }
  if (ageDhiraj < ageManish) {
    console.log("Manish is elder than Dhiraj");
  } else if (ageDhiraj === ageManish) {
    console.log("Both have the same age");
  }
}
if (isNaN(ageManish)) {
  alert("Enter valid age for Manish");
  let ageManish = Number.parseInt(prompt(`Enter Manish's age:`));
  if (ageDhiraj > ageManish) {
    console.log("Dhiraj is elder than manish");
  }
  if (ageDhiraj < ageManish) {
    console.log("Manish is elder than Dhiraj");
  } else if (ageDhiraj === ageManish) {
    console.log("Both have the same age");
  }
}
if (ageDhiraj > ageManish) {
  console.log("Dhiraj is elder than manish");
}
if (ageDhiraj < ageManish) {
  console.log("Manish is elder than Dhiraj");
} else if (ageDhiraj === ageManish) {
  console.log("Both have the same age");
}
*/
/*
AGE CHECKER SIMPLE CODE
let ageDhiraj = Number.parseInt(prompt(`Enter Dhiraj's age:`));
let ageManish = Number.parseInt(prompt(`Enter Manish's age:`));
if (ageDhiraj > ageManish) {
  console.log("Dhiraj is elder than manish");
}
if (ageDhiraj < ageManish) {
  console.log("Manish is elder than Dhiraj");
} else if (ageDhiraj === ageManish) {
  console.log("Both have the same age");
}
*/
/* //DRIVING CODE
let age2 = Number.parseInt(
  prompt("Enter your age to check if you cannot drive or not:")
);
if (age2 > 9 && age2 < 18) {
  console.log("You are a kid and you can think of driving");
} else if (age2 <= 9) {
  console.log("You cannot drive");
} else {
  console.log("You can drive");
}
*/
//(condition)?exp1:exp2
let intage = 10;
intage = Number.parseInt(intage);
if (intage > 10 && intage < 20) {
  console.log(`Age lies between 10 and 20`);
} else {
  console.log(`Age does not lies between 10 and 20`);
}
// let divNum=Number.parseInt(prompt("Enter any number:"))
let divNum = 6;
divNum = Number.parseInt(divNum);
if ((divNum % 2 == 0) == 0) {
  console.log(`NUMBER IS DIVISIBLE BY 2`);
}
if ((divNum % 3 == 0) == 0) {
  console.log(`NUMBER IS DIVISIBLE BY 3`);
}
