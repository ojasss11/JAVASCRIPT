"use strict";
const restaurent = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return `${this.starterMenu[starterIndex]},${this.mainMenu[mainIndex]}`;
  },
};
let arr = [12, 3, 4];
let a = arr[0];
let b = arr[1];
let c = arr[2];
// console.log(a, b, c);
let [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);
let [first, second] = restaurent.categories;
console.log(first, second);
let [f1, , f3] = restaurent.categories;
console.log(f1, f3); //it will print the first and third of the categories in the restaurent
let [starter1, , starter3] = restaurent.starterMenu; //second element will be skipped i.e. Bruschetta
console.log(`THE STARTERS ARE:: ${starter1}, ${starter3}`);
console.log(restaurent.categories);
// [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ] are the categories of the restaurent
// NOW SUPPOSE THE OWNER HAS TO CHANGE THE primary as vegetarian and secondary as ITALIAN
// we can use destructuring to change the values of the categories
restaurent.categories[0] = "Vegetarian";
restaurent.categories[1] = "Italian";
console.log(restaurent.categories);
let order1 = restaurent.order(2, 1); //garlic bread and pasta
console.log(order1);
let nested = [2, 3, [4, 5]];
let [i, j] = nested;
console.log(i, j);
let [i1, , [j1, k1]] = nested;
console.log(i1, j1, k1);
