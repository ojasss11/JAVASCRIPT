"use strict";
// let i = 1;
for (let i = 1; i < 10; i++) {
  console.log(i);
  if (i == 5) {
    break;
  }
}
console.log(`We used break at 5`);
let fruits = ["M1", "m2", "m3", "m4"];
console.log("length of fruits is:" + fruits.length);
for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}
/*
console.log(`Letters of the word are:`);
let word = "Ojas Bidkar";
for (let char of word) {
  console.log(char);
}
*/
let namings = ["OB", "AB", "SB"];
for (let names of namings) {
  console.log(names);
}
let hero = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10],
];
for (let list of hero) {
  // console.log(list);
  for (let i of list) {
    console.log(i);
  }
}
