"use strict";
console.log("HELLO");
// setTimeout(() => console.log("HELLO4000"), 4000);
console.log("HIIO");
// setTimeout(() => console.log(`4000000`), 3000);
// setInterval(() => console.log("HELLO"),2000);
let student = {
  name: "OJAS",
  marks: 21,
  grade: this,
  getName: function () {
    return this.name;
  },
  getMarks: function () {
    return this.marks;
  },
};
console.log(student.getName());
console.log(student.getMarks());
let square = (n) => {
  return n * n;
};
console.log(square(20));
// let helloWorld5 = setInterval(() => console.log("HELLO WORLD"), 2000);
// setTimeout(() => clearInterval(helloWorld5), 10000);
// console.log(helloWorld5);
let arr = [1, 2, 3, 4, 5];
function print(el) {
  console.log(el);
}
// arr.forEach(print);
arr.forEach(function (el) {
  console.log(el);
});
let stud = [
  {
    name: "RAJAT",
    age: 12,
  },
  {
    name: "OJAS",
    age: 21,
  },
  {
    name: "PIYUSH",
    age: 23,
  },
];
stud.forEach((student) => {
  console.log(student.age);
});
let marks = [12, 32, 23, 21, 1231];
console.log("PRINTING ELEMENTS:");
marks.forEach(function (element) {
  console.log(element);
});
console.log("USING THE FOR EACH IN FUNCTION::");
marks.forEach((elements) => {
  console.log(elements);
});
let newData = [
  { name: "OJAS", grade: "A++" },
  {
    name: "SUJAL",
    grade: "B",
  },
  {
    name: "ANIKET",
    grade: "Q",
  },
];
newData.forEach((elements) => {
  console.log(elements);
});
let numbers = [1, 2, 3, 4, 5];
let double = numbers.map((elements) => {
  return elements * 2;
});
console.log(double);
// printing square using map
let sqr = numbers.map((element) => {
  return element * element;
});
console.log(sqr);
// DOUBT
// let gpa = stud.map((element) => {
//   return element.marks / 10;
// });
// console.log(gpa);

let newStudentsData = [
  {
    name: "OJAS",
    marks: 90,
  },
  {
    name: "SUJAL",
    marks: 99,
  },
  { name: "ANIEKT", marks: 98 },
];
let number3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let even = number3.filter((elements) => {
  return elements % 2 == 0;
});
let odd = number3.filter((elements) => {
  return elements % 2 != 0;
});
console.log(even);
console.log(odd);
