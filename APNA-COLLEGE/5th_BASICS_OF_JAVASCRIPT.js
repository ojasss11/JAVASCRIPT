// LOOPS IN JAVASCRIPT
/*
for (initialisation,condition,updation) {
   Do something
}
*/
let arr = ["1", "2", "3", "4", "5"];
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log(element);
}
console.log("\t");
// I=10 TO i=
for (let i = 10; i >= 1; i = i - 3) {
  console.log(i);
}
//Print all odd numbers(1 to 15)
for (let i = 1; i <= 15; i = i + 2) {
  console.log(i);
}
// PRINTING BACKWARDS
console.log("BACKWARD LOOP");
for (let i = 15; i >= 1; i = i - 2) {
  console.log(i);
}
console.log("EVEN NUMBERS BETWEEN 2 TO 100");
for (let i = 2; i <= 100; i = i + 2) {
  console.log(i);
}
// FROM 10 TO 2 EVEN
console.log("Even from 10 to 2");
for (let i = 10; i >= 2; i = i - 2) {
  console.log(i);
}
// MULTIPLICATION TABLE OF 5
// let n = prompt("Enter the number for which you want to print the table");
// n = Number.parseInt(n);
let n = 5;
console.log("TABLE OF 5:");
for (let i = 1; i <= 10; i++) {
  console.log(`${n} * ${i} = ${n * i}`);
}
console.log("ANOTHER WAY");
for (let i = 5; i <= 50; i = i + 5) {
  console.log(i);
}
console.log("\t");
// NESTED LOOOPS
for (let i = 1; i <= 3; i++) {
  console.log(`OUTER LOOP::::::::::::::: ${i}`);
  for (let j = 1; j <= 3; j++) {
    console.log(`INNER LOOP ${j}`);
    // console.log(j);
  }
}
/*WHILE LOOPS IN JS:
while(condition){
  DO SOMETHING
}
*/
/*
let favoMovie = "Avatar";
let guess = prompt("Enter your favourite movie:");
while (guess != favoMovie && guess != "quit") {
  if (guess === "quit") {
    console.log("QUITING THE GAME");
    break;
  }
  console.log("Wrong");
  guess = prompt("Enter your favourite movie:");
}
*/
// BREAK keyword:break keyword is used in javascript to get us out of the loop execution
let fruitArr = ["mango", "litchi", "orange", "grapes", "banana"];
fruitArr.push("pineapple");
// fruitArr.reverse();
// LAST INDEX WILL BE (array.length-1)
for (let i = 0; i < fruitArr.length; i++) {
  console.log(i, fruitArr[i]);
}
console.log("\t");
console.log("PRINTING IN REVERSE");
for (let i = fruitArr.length - 1; i >= 0; i--) {
  console.log(i, fruitArr[i]);
}
console.log("\t");
let heroes = [
  ["ironman", "superman", "thor"],
  ["spiderman", "wonderwomen", "flash"],
];
// i is the outer array i.e. i=2 and j is the inner element of the array
for (let i = 0; i < heroes.length; i++) {
  console.log(`List #${i}`);
  // console.log(heroes[i]);
  for (let j = 0; j < heroes[i].length; j++) {
    console.log(`${j},${heroes[i][j]}`);
    // console.log("\t");
  }
}
let studWithMarks = [
  ["ojas", 97],
  ["aniket", 90],
  ["sujal", 95],
];
for (let i = 0; i < studWithMarks.length; i++) {
  console.log(`Information of Student #${i}`);
  for (let j = 0; j < studWithMarks[i].length; j++) {
    // console.log(`Student: ${studWithMarks[i][j]},Marks:${studWithMarks[i][j]}`);
    console.log(studWithMarks[i][j]);
  }
}
let friends = [
  ["f1", "f2", "f3"],
  ["f4", "f5", "f6"],
];
for (let fr of friends) {
  for (let fr2 of fr) console.log(fr2);
}
for (let c of "apna") {
  console.log(c);
}
