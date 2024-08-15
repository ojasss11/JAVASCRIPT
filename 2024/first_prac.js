"use strict";
console.log("OJAS");
console.log("I AM USING JS");
const accountId = "ojas";
console.log(accountId);
let accountEmail = "ojas.ojas@gmail.com";
console.log(accountEmail);
let accountName = "ojas";
console.table([accountName, accountId, accountEmail]);
let state;
console.log(typeof state);
// alert(3 + 3);
// WE ARE USING NODEJS not browser
let score1 = 33;
let score2 = "33";
console.log(`DATATYPE OF SCORE IS: ` + typeof score1);
console.log(`DATATYPE OF SCORE IS: ` + typeof score2);
let myName = "OJAS";
let myrealName = "MAIN HU OJAS";
myrealName = myName;
console.log(myName);
console.log(myrealName);
let user = {
  name: "user1",
  upi: "user@icici.upi",
  email: "usericici@yahoo.co",
};
console.log(user["name"]);
console.log(user["upi"]);
let me = "MY repo count is:";
let repoCount = 90;
console.log(me + repoCount);
console.log(`My name is ${myName} and my repository count is ${repoCount}`);
const gameName = String("PUBG");
console.log(`The length of gamename is:` + gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf("K"));
let i = 10;
console.log("USING WHILE LOOP");
while (i <= 20) {
  console.log(i);
  // i++;
  i = i + 2;
}
let myArray = ["Btman", "deadpool", "wolverine", "spiderman", "shaktiman"];
let arr = 0;
while (arr < myArray.length) {
  console.log(`Value is :${myArray[arr]}`);
  arr = arr + 1;
}
console.log("BREKING");
console.log(`USING DO WHILE LOOP:`);
let score = 1;
do {
  console.log(`Value of score is ${score}`);
  score++;
  if (score === 8) {
    break;
  }
} while (score < 12);
const arrNew = [1, 2, 3, 4, 5];
for (const iterator of arrNew) {
  console.log(iterator);
}
const array44 = {
  name: "Ojas",
  surname: "Bidkar",
  rollNo: 34,
};
const greeting = "HELLO";
for (const i of greeting) {
  console.log(`Each char is : ${i}`);
}
let fruits = new Map();
fruits.set("apple", 500);
fruits.set("banana", 400);
let nation = new Map();
nation.set("IN", "INDIA");
nation.set("US", "UNITED STATE OF AMERICA");
// console.log(nation);
// console.log(fruits);
// MAPS ARE FOR UNIQUE VALUES
for (const [key, value] of nation) {
  console.log(`USING FOROF LOOP IN MAP::` + key, value);
}
