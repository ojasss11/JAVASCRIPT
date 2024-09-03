"use strict";
const restaurent = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23 Firenze Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Brushchetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
const arr = [2, 3, 4];
let a = arr[0];
let b = arr[1];
let c = arr[2];
// console.log();
const [x, y, z] = arr;
console.log(x, y, z);
/*
const [first, , , second] = restaurent.categories;
console.log(first, second);
const [f1, , f3] = restaurent.starterMenu;
console.log(f1, f3);
*/
let [main, , secondary] = restaurent.categories;
console.log(main, secondary);
/*
let temp;
temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);
*/
[main, secondary] = [secondary, main];
console.log(main, secondary);
console.log(restaurent.order(2, 1));
let nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);
const foodHome = {
  name: "Dwelish Food Center",
  items: ["Sandwiches", "Pizza", "Burger", "Special Hamburger"],
  status: "Open",
  beverages: ["Tea", "Coffee", "ColdCoffee", "Nescoffee", "Black-tea"],
  order: function (itemIndex, beverageIndex) {
    return [this.items[itemIndex], this.beverages[beverageIndex]];
  },
  openingHours: {
    thurs: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 24,
    },
    sat: {
      open: 10,
      close: 24,
    },
    sun: {
      //open 24 hours
      open: 0,
      close: 24,
    },
  },
};
/*
console.log(foodHome.order(0, 0));
const [p, q, r] = [3, 4];
console.log(p, q, r);
*/
console.log("\t");
const { name, items, openingHours } = foodHome;
console.log(name, items, openingHours);
console.log("\t");
const { name: restaurentName, openingHours: hours, items: menu } = foodHome;
console.log(restaurentName, hours, menu);
