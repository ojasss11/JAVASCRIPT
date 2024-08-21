// Variables and Data Types
let name = "Ojas";
let age = 25;
let isStudent = true;
let balance = 1000.5;

// Basic Operations
let sum = 10 + 20;
let difference = 30 - 10;
let product = 5 * 4;
let quotient = 20 / 4;
let remainder = 21 % 4;

// Strings
let greeting = "Hello, " + name + "!";
let upperCaseName = name.toUpperCase();
let nameLength = name.length;

// Arrays
let fruits = ["apple", "banana", "cherry"];
let firstFruit = fruits[0];
let lastFruit = fruits[fruits.length - 1];

// Array Methods
fruits.push("orange");
let removedFruit = fruits.pop();
let indexOfBanana = fruits.indexOf("banana");

// Loops
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

let counter = 0;
while (counter < 5) {
  console.log("Counter: " + counter);
  counter++;
}

// Functions
function greet(person) {
  return "Hello, " + person + "!";
}

let greetingMessage = greet(name);

function addNumbers(a, b) {
  return a + b;
}

let total = addNumbers(5, 10);

// Objects
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    console.log("Car started");
  },
};

let carMake = car.make;
car.start();

// Object Methods
let person = {
  firstName: "Ojas",
  lastName: "Deshmukh",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

let fullName = person.fullName();

// Conditional Statements
if (age >= 18) {
  console.log(name + " is an adult.");
} else {
  console.log(name + " is not an adult.");
}

// Switch Case
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Invalid day";
}

console.log("Today is " + dayName);

// Ternary Operator
let canVote = age >= 18 ? "Yes" : "No";

// Date and Time
let today = new Date();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth() + 1;
let currentDate = today.getDate();

// Random Numbers
let randomNum = Math.random();
let randomInt = Math.floor(Math.random() * 10) + 1;

// Higher-Order Functions
let numbers = [1, 2, 3, 4, 5];

let doubledNumbers = numbers.map(function (num) {
  return num * 2;
});

let evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});

let totalSum = numbers.reduce(function (acc, num) {
  return acc + num;
}, 0);

// Classes
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  speak() {
    console.log(this.name + " says hello!");
  }
}

let dog = new Animal("Buddy", "Dog");
dog.speak();

// Promises
let promise = new Promise(function (resolve, reject) {
  let success = true;

  if (success) {
    resolve("Promise resolved!");
  } else {
    reject("Promise rejected!");
  }
});

promise
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });

// Async/Await (with promise)
async function fetchData() {
  try {
    let data = await promise;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
fetchData();

// Binary Search
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1; // Element not found
}

let sortedArray = [1, 3, 5, 7, 9, 11];
let target = 7;
let result = binarySearch(sortedArray, target);

if (result !== -1) {
  console.log("Element found at index " + result);
} else {
  console.log("Element not found");
}
