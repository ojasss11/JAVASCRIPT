// undefined is a value
// not defined is an error
// null is also a value
// ARRAYS IN JAVASCRIPT(WHAT,HOW ,WHY)
let user1 = "harsh";
let user2 = "harshita";
let user3 = "harshiyaaa";
let user4 = "harshika";
let user5 = "harshi";
console.log(user1, user2, user3, user4, user5);
let usersArr = ["harsh", "harshita", "harshiyaa", "harshika", "harshi"];
console.log(usersArr[0]);
console.log(usersArr[1]);
console.log(usersArr[2]);
console.log(usersArr[3]);
console.log(usersArr[4]);
console.log(usersArr[5]); //UNDEFINED
let usersArray2 = [[], function () {}, 12, 10];
console.log(usersArray2[1]);
// a lot of time the data is in the shape of more than one value
let numArr = [10, 10, 10, 10, 10];
// How to loop an array
// How to loop an array and do something with each element
// add all members of array
// count all the members of the array
numArr.forEach(function (element) {
  console.log(element);
});
let sum = 0;
for (let i = 0; i < numArr.length; i++) {
  sum += numArr[i];
}
console.log(`sum of array is :` + sum);
// LOOPING AN ARRAY=> we use forEach loop
let numNewArray = [100, 101, 102, 103, 104];
let basicCount = [1, 2, 3, 4, 5];
basicCount.forEach(function (el) {
  // the function will run each time for 1,2,3,4,5
  console.log(`HEY ${el}`);
});
// PRINTING THE BASIC COUNT +10
basicCount.forEach(function (el) {
  console.log(el + 10);
});
// OBJECTS IN JAVASCRIPT[what,how,when and why]
// OBJECTS ek tarika hai jisse ki hum ek identity ki details ko ek sath rakh sakte hai
// KAI logo ka data== Array
//EK BANDE KA KAI SARA DATA ==Objects
//  []===Array   {}===OBJECT
// TO save all the details at one place we use objects
let obj = {};
let obj2 = new Object();
let obj3 = {
  name: "Harsh",
  age: 25,
  email: "harsh22@gmail.com",
  contact: 9999999999,
};
let laptopDetails = {
  laptopName: "VICTUS",
  ram: "16GB",
  windows: 11,
  price: 48000,
  isWorking: true,
};
// laptopDetails.laptopName;
console.log(laptopDetails.laptopName);
