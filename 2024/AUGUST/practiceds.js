const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPasta: function (ing1, ing2, ing3) {
    return `Here is your delicious Pasta with ${ing1},${ing2} and ${ing3}`;
  },
  openingHours: {
    thurs: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //open 24 hours
      close: 24,
    },
  },
};
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const [x, y, z] = arr; //DESTRUCTUING ARRAY FROM THE RIGHT SIDE
console.log(x, y, z);
const [first, , third] = restaurant.categories;
console.log(first, third);
let [starter, mainEating] = restaurant.order(2, 0);
console.log(starter, mainEating);
const nested = [2, 4, [5, 6]];
const [m, , [, k]] = nested;
console.log(m, k);
const { name, openingHours, categories, menu } = restaurant;
console.log("-------------------");
console.log(name, openingHours, categories, menu);
// const{name:restaurentName,openingHours:hours};
let newMenu = [...restaurant.mainMenu, "POTATO CHIPS"];
/*
const arrNew = [2, 3, 4, 5, 6, 7];
const badArr = [1, 2, 3, arrNew[2], arrNew[3]];
console.log(badArr);
let newARREY = [...arrNew, 2, 23];
console.log(newARREY);
let names = ["SUJAL", "SEJAL"];
let extraNames = ["ANIKET"];
let combinedNames = [...names, ...extraNames];
console.log(combinedNames);
let orderingPasta = restaurant.orderPasta("cheese", "tomato", "masala");
console.log(orderingPasta);
const restaurantDetails = {
  foundedIn: 1988,
  ...restaurant,
  foundedBy: "Danis Ritchi",
};
console.log(restaurantDetails);
*/
let rest1 = {
  name: "capri",
  numGuest: 51,
};
let rest2 = {
  name: "ITALIC",
  food: "manch",
};
rest2.numGuest = rest1.numGuest || 10;
console.log(rest2.numGuest);
console.log(restaurant.openingHours);
if (restaurant.openingHours && restaurant.openingHours.fri) {
  console.log(restaurant.openingHours.fri.open);
}
// console.log(restaurtant.openingHours.fri.open?.open);
let days3 = ["mon", "tues", "wed"];
for (let day of days3) {
  console.log(day);
  // restaurant.openingHours.day;
}
