"use strict";
function calcAge(birthYear) {
  const age = 2023 - birthYear;
  function printAge() {
    const output = `${firstName} you are ${age} born in ${birthYear}`;
    console.log(output);
  }
  printAge();
  // console.log(firstName);
  return age;
}
let firstName = "OJAS";
console.log(calcAge(2003));
// DESTRUCT. ARRAYS
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic", "Burgers"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    mon: {
      open: 12,
      close: 12,
    },
    tues: {
      open: 12,
      close: 12,
    },
    wednes: {
      open: 12,
      close: 12,
    },
    thurs: {
      open: 12,
      close: 12,
    },
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "22:00",
    address,
  }) {
    console.log(
      `Order received!${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicous pasta with ${ing1},${ing2} and ${ing3}`);
  },
  orderPizza: function (...ingredients) {
    console.log(`Your pizza is ready with (${ingredients})`);
  },
};
restaurant.orderDelivery({
  time: "22:30",
  address: "Via '",
});
// Destructuring is breaking a complex data structure into a smaller data-structure
//Array destructuring
const arr = [3, 4, 5];
let a = arr[0];
let b = arr[1];
let c = arr[2];
const [x, y, z] = arr;
console.log(x, y, z);
let [first, second, , third] = restaurant.categories;
console.log(first, second);
// Switching variables trick
let temp = first;
first = second;
second = temp;
/*
let temp = first;
first = second;
second = temp;
*/
// console.log(first, second);
// SWITCHING VARIBALES TRICK
[first, second] = [second, first];
[first, second] = [second, first];
console.log(first, second);
let [fr, fr1, fr2] = restaurant.starterMenu;
// Example of ordering from the restaurant
console.log(restaurant.order(0, 1)); //gives focaccia and pasta
console.log(restaurant.order(2, 0)); //gives Garlic bread and pizza
const [starter, maincourse] = restaurant.order(2, 0);
console.log(starter, maincourse);
//Nested destructuing
let nested = [2, 3, [56, 6]];
let [m, j, [, k]] = nested;
console.log(m, j, k);
//default values
let [p, q, r] = [3, 4];
console.log(p, q, r); //3 4 undefined
let [p1 = 1, q1 = 1, r1 = 1] = [2, 2];
console.log(p1, q1, r1);
//Destructuring objects
console.log("\t");
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
console.log("\t");
console.log("\t");
let {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
// DEFAULT VALUES
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
// MUTATING VARIABLES IN OBJECT
let a1 = 111;
let b1 = 222;
const obj = { a1: 12, b1: 12, c: 12 };
({ a1, b1 } = obj);
console.log(a1, b1);
let a2 = 3,
  b2 = 90;
const obj2 = { a2: 3434, b2: 343443 };
({ a2, b2 } = obj2);
console.log(a2, b2);
const { mon } = openingHours;
console.log(mon);
// ARRAY DESTRUCTURING EXAMPLES
const colors = ["green", "yellow", "red"];
const [firstColor, secondColor] = colors;
console.log(firstColor, secondColor);

let numbers = [1, 2, 3, 4, 5, 76, 8];
let [n1, n2, n3] = numbers;
console.log(n1, n2, n3);
let fruits = ["apple", "orange"];
// Destructuring with default values
let [firstFruit, secondFruit, thirdFruit = "banana"] = fruits;
console.log(firstFruit, secondFruit, thirdFruit); // 'apple' 'orange' 'banana'
const person = {
  name: "OJAS",
  lastname: "Bidkar",
  age: 20,
  address: "Mumbai",
  country: "INDIA",
};
const { name: firstname, lastname } = person;
console.log(firstname, lastname);
// Function with array destructuring
function printColor([fcolor, scolor, tcolor]) {
  console.log(`First Color: ${fcolor}`);
  console.log(`Second Color: ${scolor}`);
  console.log(`Third Color: ${tcolor}`);
}
let cc = ["red", "green", "blue"];
printColor(cc);
console.log("\t"); //for tab in the OUTPUT
let array1 = [4, 5, 6];
let newarr = [array1[0], array1[1], array1[2], 1, 1, 2, 2, ...array1];
console.log(newarr);
//another example using SPREAD OPERATOR
/* ⁡⁣⁣⁢The spread operator (...) in JavaScript is used to expand elements of an iterable (like an array)⁡ */
const array3 = [1, 2, 3];
const array4 = [4, 5, 6];
const mergedArray = [...array3, ...array4];
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]
//Another example of array
let colorArray = ["red", "green", "blue"];
let lightc = ["lightred", "lightgreen", "lightblue"];
let combinedArr = [...colorArray, ...lightc];
console.log(combinedArr); //combines both the arrays
// COMBINING RESTAURENT MENUS
let newMenu = [...restaurant.mainMenu, "Gooci"];
console.log(newMenu);
let fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(fullMenu);
// order Pasta function
console.log(restaurant.orderPasta("cheese", " breed", " garlic"));
/*
const ingridents = [
  prompt("Let's make pasta!Ingridient 1?"),
  prompt("Ingridient 2?"),
  prompt("Ingridient 3?"),
];
console.log(ingridents);
restaurant.orderPasta(ingridents[0], ingridents[1], ingridents[3]);
*/
//Real life example
const mavkarHotel = {
  openingHours: {
    Sunday: { open: "8:30AM", close: "7:30PM" },
    Monday: { open: "8:30AM", close: "7:30PM" },
    Tuesday: { open: "8:30AM", close: "7:30PM" },
    Wednesday: { open: "8:30AM", close: "7:30PM" },
    Thursday: { open: "8:30AM", close: "7:30PM" },
    Friday: { open: "8:30AM", close: "7:30PM" },
    Saturday: { open: "8:30AM", close: "7:30PM" },
  },
  hotelmenu: ["Vada", "Vadapav", "Misal", "Chai", "Coffee", "Pav"],
  menuWithPrice: {
    Vadapav: 15,
    Vada: 13,
    Misal: 40,
    Pav: 2,
    Chai: 10,
    Coffee: 10,
  },
  address: "W86C+4FC, Karjat, Maharashtra, India",
  tagline:
    "Whenever you come here, you notice the nice service. At this restaurant, people can enjoy the pleasant atmosphere.",
  rating: { Google: 4.6, Food: 5, Service: 5, Atmosphere: 5 },
};
const { openingHours: hoursOpened } = mavkarHotel;
console.log(hoursOpened);
let updatedMenu = [...mavkarHotel.hotelmenu, "idli", "sambar"];
console.log(updatedMenu);
// REST PARAMETERS AND PATTERNS
let ARR = [1, 2, ...[3, 4]];
let [A1, B1, ...others] = [1, 2, 3, 4, 5];
console.log(A1, B1, others);
let add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
// add(2, 3, 2, 3, 32, 312, 1323, 1, 23, 32, 1);
add(10, 10, 10, 10);
let x1 = [20, 20, 20];
add(...x1);
// CALLING THE pizza function in restaurent
restaurant.orderPizza("cheese", "onion", "tomato", "paneer");
restaurant.orderPizza("Tomato", "Cheese", "Mushrooms", "Pepperoni");
let [f, s, t, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(f, s, t, rest);
// SHORT-CIRCUITING IN JS
/*Short-circuiting is a behavior in JavaScript where the evaluation of an expression stops as soon as the result is determined. This behavior is often used with logical operators, especially && (logical AND) and || (logical OR).*/
/*
RULES:THEY can use nay datatype,
They can return any data type,They do the short-circuit evaluation
*/
console.log("*******SHORT-CIRCUITING*******");
console.log(`3||'Ojas':`, 3 || "Ojas");
console.log(`" "||"Ojas"::`, " " || "Ojas");
console.log("true || 0:    " + (true || 0));
console.log(`undefined||null:  ` + (undefined || null));
let guests1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guests1);
console.log("Hello" && 23 && null);
console.log("Hello" && 23 && "OJASSS");
let rest1 = {
  name: "Capri",
  numGuest: null,
};
let rest2 = {
  name: "La pizzada",
  other: "Givoneni burger",
};
rest1.numGuest = rest1.numGuest || 10;
rest2.numGuest = rest2.numGuest || 10;
// console.log(rest2.numGuest);
console.log(rest1);
console.log(rest2);
