//Practice of javascript by APNA college
let delhi = {
  latitude: "23231.6N",
  longitude: "31414S",
};

console.log(delhi.latitude);
const student1 = {
  name: "OJAS",
  id: 5,
};
console.log(student1["name"]);
console.log(student1.id);
let stud3 = {
  name: "IAS",
  id: 12213,
};
console.log(stud3);
let student4 = ["Shraddha", 45, 234324.3];
console.log(student4);
let item = {
  price: 231,
  color: "pink",
};
console.log(item.price);
let threadPost = {
  name: "OJAS A. BIDKAR",
  id: "@ojas43",
  likes: 45,
  comments: 90,
  folloers: 500,
  following: 455,
  noOfPosts: 10,
  content: "Technological Advancements",
};
console.log(threadPost);
let obj = {
  name: 1,
  c: true,
  d: " null",
  null: "d",
};
console.log(obj.d);
console.log(obj.null);
let s3 = {
  name: "Shraddha",
  rollNo: 34,
  city: "Delhi",
  gender: "female",
};
console.log(s3.city);
console.log(s3.gender);
let classInformation = {
  aman: {
    grade: "A+",
    city: "Delhi",
  },
  sujal: {
    grade: "B+",
    city: "Mumbai",
  },
  aniket: {
    grade: "C+",
    city: "Panvel",
  },
};
console.log(classInformation);
console.log(classInformation.sujal.grade);
console.log(Math.PI);
console.log(Math.E);
let a = Math.abs(-9.123123);
console.log(a);
let b = Math.pow(2, 2);
console.log(b);
function hello() {
  console.log("HELLO");
}
hello();
/*
let age = 20;
function isAdult(age) {
  if (age > 18) {
    console.log("ADULT");
  } else {
    console.log("NOT ADULT");
  }
}
console.log(isAdult);
*/
function printPoem() {
  console.log("Twinkle Twinkle Little Star");
  console.log("How i wonder how you are?");
}
printPoem();
let randomNumber = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber);
function printInfo(name, age) {
  console.log(`${name}'s age is: ${age}`);
}
printInfo("OJAS", 19);
function sum(a, b) {
  let sum = a + b;
  console.log(sum);
}
sum(4, 5);
sum(10, 5);
sum(5, 5);
function avg(a, b, c) {
  let avg = (a + b + c) / 3;
  console.log(`Average is: ${avg} `);
}
avg(10, 10, 100);
function printTable(n) {
  for (let i = 1; i < 11; i++) {
    console.log(n * i);
  }
}
console.log("PRINTING TABLE OF 10");
printTable(10);
