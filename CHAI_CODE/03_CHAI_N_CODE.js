if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}
// console.log(a);
// console.log(b);
console.log(c);
function one() {
  let username = "Hitesh";
  function two() {
    let website = "Youtube";
    console.log(username);
  }
  // console.log(website);
  // two();
}
one();
let a = 10;
let user = {
  name: "Hitesh",
  price: 999,
  welcome: function () {
    console.log(`${this.name} welcome to the website`);
    console.log(this);
  },
};
user.welcome();
console.log(this);
// this keyword is mostly used in objects rather than function
function me(username) {
  console.log(`${this.username}`);
}
console.log(me("ojas"));
// Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("DB CONNECTED");
})();
(function () {
  console.log("EXECUTE THIS IMMEDIATELY!");
})();
let temperature = 41;
if (temperature < 50) {
  console.log("less than 50");
} else {
  console.log("Temperature is greater than 50");
}
let userLoggedIn = true;
let userHasDebit = true;
if (userLoggedIn && userHasDebit) {
  console.log("Allow user to buy");
}
let month = 3;
switch (month) {
  case 1:
    console.log("JANUARY");
    break;
  case 2:
    console.log("FEBRUARY");
    break;
  case 3:
    console.log("MARCH");
    break;
  case 4:
    console.log("APRIL");
    break;
  case 5:
    console.log("MAY");
    break;
  case 6:
    console.log("JUNE");
    break;
  case 7:
    console.log("JULY");
    break;
  case 8:
    console.log("AUG");
    break;
  default:
    console.log("ENTER VALID NUMBER");
    break;
}
let userMail = "";
if (userMail) {
  console.log("USER HAS A MAIL");
} else {
  console.log("USER DOES NOT HAVE A MAIL");
}
if (userMail.length === 0) {
  console.log("It is empty");
}
/*
for (let i = 0; i <= 3; i++) {
  const element = i;
  console.log(`OUTER LOOP VALUE ${i}`);
  for (let j = 0; j <= 3; j++) {
    // console.log(`INNER LOOP VALUE:::::::: ${j}`);
    console.log(`i =${i} and j=${j}`);
    console.log(`i * j = ${i * j}`);
    
  }
}
*/
let arr = ["JARVIS", "PYTHON", "JAVA"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
/*
for (let i = 1; i < 21; i++) {
  if (i == 10) {
    break;
  }
  console.log(i);
}
console.log("\t");
for (let i = 0; i <= 10; i++) {
  // don't print 4
  if (i == 4) {
    continue;
  }
  console.log(i);
}
*/
for (let i = 1; i < 10; i++) {
  if (i == 5) {
    console.log("5 DETECTED!");
    break;
  }
  console.log(i);
}
const year = 2024;
