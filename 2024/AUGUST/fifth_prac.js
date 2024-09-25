"use strict";
let age = 25;
if (age > 18) {
  let str = "ADULT";
  // console.log(str);
}
// console.log(str); //the str variable is block scoped
let greet = "hello";
function changeGreet() {
  let greet = "namaste";
  console.log(greet);
  function innerGreet() {
    console.log(greet);
  }
  innerGreet(); //innerGreet is called here
}
console.log(greet);
changeGreet();
const adder = function (a, b) {
  return a + b;
};
console.log(adder(2, 2));
let hello = function () {
  console.log(`HELLO`);
};
hello();
let student = {
  name: "Shonak Lande",
  eng: 55,
  phy: 54,
  maths: 12,
  getavg() {
    let avg = (this.eng + this.maths + this.phy) / 3;
    return console.log(`${this.name} got average marks= ${avg}`);
  },
};

student.getavg();
try {
  console.log(ab);
} catch (e) {
  console.log(`ab doesn't exists`);
}
try {
  console.log(asdbbadsb);
  console.log("PRINTING HELLO");
} catch {
  console.log("ERROR OCCURED.");
}
let sum5 = (a, b) => {
  return a + b;
};
console.log(sum5(8, 8));
const cube = (n) => {
  return n * n * n;
};
let cn = cube(9);
console.log(cn);
console.log(cube(2));
