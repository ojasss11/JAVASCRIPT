let newGame = "GTA SAN ANDRES";
console.log(newGame);
console.log(typeof newGame);
console.log(newGame.toUpperCase()); // Log 'newGame' in Uppercase
console.log(newGame.toLowerCase()); // Log 'newGame' in lowercase
let newString = newGame.substring(0, 100);
console.log(newString);
console.log(newString.slice(-14, -1));
console.log(newString.trim()); // Log 'newString' with leading and trailing whitespaces removed
let url = "https://www.google.com";
let urlYoutube = url.replace("google", "youtube");
console.log(urlYoutube);
/* the split method is used to split a string into an array of substrings based on a specified delimiter. */
let csvString = "apple,orange,banana";
// Split the string into an array using a comma as the delimiter
let fruits = csvString.split(",");
// Log the resulting array
console.log(fruits);
let sen = "This is my home";
let senArr = sen.split(" ");
console.log(senArr);
/* NUMBERS AND MATHS*/
let score = 400;
let num = new Number(100);
console.log(num);
console.log(num.toString().length);
console.log(num.toFixed(3));
let balance = new Number(2000);
console.log(balance);
let otherNumber = 23.48328342;
console.log(otherNumber.toPrecision(3));
let hundreds = 10000000;
console.log(hundreds.toLocaleString("en-IN"));
/*This method is primarily used for formatting numbers in a locale-specific way, but you can use it with arrays as well. However, keep in mind that the toLocaleString method is more commonly used with numbers and dates.*/
/*
console.log(`The absolute value of (-100) is:` + Math.abs(-100));
console.log(Math.floor(4.9));
console.log(Math.floor(4.9999999999999999));
console.log(Math.min(3, 3, 11, 2, 123, 123, 123, 12, 3, 12, -1));
console.log(Math.max(3, 3, 11, 2, 123, 123, 123, 12, 3, 12, -1));
*/
console.log(Math.floor(Math.random() * 10 + 1));
let min = 10;
let max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// JavaScript Date objects represent a single moment in time in a platform-independent format.
// DATES
let myDate = new Date();
let dateString = myDate.toString();
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toDateString());
// console.log(myDate);
// console.log(dateString.toISOString);
let myCreatedDate = new Date(2024, 0, 1);
console.log(myCreatedDate.toDateString());
console.log(typeof myDate);
console.log(Date.now());
/*
J⁡⁣⁣⁢avaScript arrays are resizable and can contain a mix of different data types⁡.
JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on.
JavaScript array-copy operations create shallow copies.(A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.)
*/
let indianHeroes = ["Shaktiman", "BEN10", "Chota Bheem"];
let heroes = ["IronMan", "Captain-America", "Thor", "Hulk", "Loki"];
let allHeroes = [...indianHeroes, ...heroes]; //spread operator
console.log(allHeroes); //combines both the arrays
console.log(typeof allHeroes); //type will be OBJECT
let arr1 = ["a", "b", "c"];
let arr2 = ["d", "e", "f"];
console.log(arr1.concat(arr2)); //Joins both the arrays
let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, true];
console.log(myArr);
myArr.pop(); //removes the last element of the array
console.log(myArr);
myArr.push("HELLO"); //adds HELLO in the end of the array
console.log(myArr);
myArr.unshift("0"); //unshift() adds at the beginning of the array
console.log("AFTER UNSHIFT:" + myArr);
myArr.shift(); //shfit removes the first element of the array
console.log(myArr);
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let reverseArr3 = arr3.reverse(); //reverses the original array
console.log(reverseArr3);
console.log(myArr.includes(10)); //returns boolean datatype
//The join() method in JavaScript is used to join all elements of an array into a single string.
console.log(myArr.indexOf(100));
let arr4 = [2, 3, 4];
let arrJoin = arr4.join();
// Adds all the elements of an array into a string, separated by the specified separator string.
console.log(arrJoin);
console.log(typeof arrJoin); //returns the type to string
/*
⁡⁣⁣⁢The slice() method in JavaScript is used to extract a portion of an array and return it as a new array. It doesn't modify the original array; instead, it creates a shallow copy of the selected elements. The method takes two parameters: the starting index and the ending index (non-inclusive). If no end index is provided, it extracts elements from the starting index to the end of the array.
SYNTAX:array.slice(startIndex, endIndex)⁡;
*/
let arr5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr5Sliced = arr5.slice(0, 4); //ending index is excluded
console.log(arr5Sliced); //[0,1,2,3]
console.log(arr5); //original array
let marvel_heroes = ["THOR", "IRONMAN", "HULK"];
let dc_heroes = ["Superman", "Flash", "Batman"];
// marvel_heroes.push(dc_heroes);
let concatHero = marvel_heroes.concat(dc_heroes); //COMBINES both the arrays
console.log(concatHero); //all heroes are printed
// ALSO WE CAN USE SPREAD OPERATOR:The spread operator (...) in JavaScript is a powerful feature that allows you to spread elements of an iterable (like an array or a string) into places where multiple elements or arguments are expected.
let allHero = [...marvel_heroes, ...dc_heroes];
console.log(allHero);
let otherArr = [
  1,
  2,
  3,
  3,
  4,
  [3, (11111)[(123, 123, 213)]],
  111,
  1322222,
  [1231, 123, 12, 3],
];
let realArr = otherArr.flat(Infinity);
console.log(realArr);
let arr0 = [1, 2, 3, [4, 5, 6, 7], 8, 9, 10];
let arr00 = arr0.flat(Infinity);
console.log(arr00);
/*
The Array.isArray() method in JavaScript is used to determine whether a given value is an array. It returns true if the value is an array, and false otherwise.
*/
/*
The Array.from() method in JavaScript is used to create a new array instance from an array-like or iterable object. It allows you to convert objects that are iterable (such as strings, Set, Map, NodeList, etc.) or array-like (such as arguments objects) into actual arrays.
*/
console.log(Array.from("ojas")); //[ 'o', 'j', 'a', 's' ]
console.log(Array.isArray("hi")); //false
console.log(Array.isArray([0, 1, 2, 3, 4, 5, 6]));
/*
The Array.of() method in JavaScript is used to create a new array instance with a variable number of arguments, regardless of the number or type of the arguments. It's particularly useful when you want to create an array with specific values, especially when the number of arguments is not known at compile-time.
Syntax:Array.of(element1, element2, ..., elementN);
 */
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
let arrn = Array(3); //Creates an array with length 3, not containing elements
console.log(arrn);
let arrn1 = Array.of(3);
console.log(arrn1);
// OBJECTS IN JAVASCRIPT:Objects are a fundamental data type used to store and organize data. They consist of key-value pairs, where each key is a string (or symbol) and each value can be of any data type, including other objects.
console.log("\t");
console.log("*************  OBJECTS  *************");
let mySym = Symbol("key1");
let jsUser = {
  name: "OJAS",
  [mySym]: "key1",
  fullName: "OJAS BIDKAR",
  UID: "121CP1055",
  location: "Mumbai",
  email: "bdkaroj@yahoo.com",
  phoneNo: 999999999,
  isLoggedIn: true,
  lastLoggedInDays: ["monday", "tuesday"],
  isStudent: true,
};
console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(`User logged in last time on:` + jsUser.lastLoggedInDays);
console.log(`Full name of the user is: ` + jsUser.fullName);
console.log(typeof jsUser[mySym]);
jsUser.email = "ojas123@chatgpt.com";
console.log(jsUser.email);
// Object.freeze(jsUser);
jsUser.email = "ojas123@microsoft.com";
console.log(jsUser);
jsUser.greeting = function () {
  console.log("WELCOME TO THE JSS");
};
console.log(jsUser.greeting());
let tinderUser = new Object();
console.log(tinderUser);
tinderUser.id = "sam@11";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
console.log(tinderUser);
let regularUser = {
  email: "some@gmail.com",
  fullName: {
    userfullname: {
      firstname: "Some",
      lastname: "Smith",
    },
  },
};
console.log(regularUser.fullName.userfullname.firstname);
let obj = {
  1: "a",
  2: "b",
};
let obj2 = {
  3: "c",
  4: "d",
};
let obj3 = { ...obj, ...obj2 };
let obj4 = Object.assign({}, obj, obj2);
console.log(obj3);
console.log(obj4);
/*
The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
*/
let users = [
  {
    id: 1,
    username: "Ojas",
  },
  {
    id: 2,
    username: "Aaditya",
  },
  {
    id: 3,
    username: "Atharva",
  },
  {
    id: 4,
    username: "Kunal",
  },
];
console.log(users[0].username); //OJAS
console.log(Object.keys(users));
console.log(Object.values(users));
console.log(Object.entries(users));
/*
The Object.keys() method returns an array of a given object's own enumerable property names.
The Object.values() method returns an array of a given object's own enumerable property values.
The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
*/
let person = {
  name: "John",
  age: 30,
  city: "New York",
};
let key = Object.keys(person);
console.log(key);
let val = Object.values(person);
console.log(val);
let entry = Object.entries(person);
console.log(entry);
/*
The hasOwnProperty() method is a built-in method in JavaScript that is used to check if an object has a specific property. It returns a boolean value indicating whether the object has the specified property as a direct property of that object (not inherited through the prototype chain).
SYNTAX:object.hasOwnProperty(property);
*/
let course = {
  courseName: "JAVASCRIPT IN HINDI",
  price: "$999",
  courseInstructor: "Dr.Angela Yu",
};
// console.log(course.courseInstructor);
const { courseInstructor: instructor } = course;
console.log(instructor);
const { courseName: name } = course;
console.log(name);
console.log("\t");
console.log("************* FUNCTIONS *************");
/*
console.log("O");
console.log("J");
console.log("A");
console.log("S");
*/
function sayMyName() {
  console.log("O");
  console.log("J");
  console.log("A");
  console.log("S");
}
sayMyName();
/*
A function is a block of reusable code that performs a specific task or set of tasks. Functions can be defined using the function keyword, and they can take parameters as input, perform some computation, and return a result.
SYNTAX:function functionName(parameter1, parameter2, ...) {
  Function body - code that performs a task
  You can use parameters within the function
  Optionally, return a value
}
*/
function addTwoNumbers(a, b) {
  return a + b;
}
let res = addTwoNumbers(10, 4);
console.log("the addition of 10 and 4 is:" + res);
console.log(addTwoNumbers(4, "4"));
console.log(addTwoNumbers(4, 4));
function greet() {
  console.log("Hello!");
}
greet(); // Output: Hello!
function loginUserMessage(user = "sam") {
  // You can also put the default user parameter value like (user="sam")
  // if (user === undefined)
  if (!user) {
    //⁡⁣⁣⁢The condition if (!user) checks if the user parameter is falsy. The ! (logical NOT) operator is used to negate the truthiness of the value⁡.
    console.log("Please enter a username!!!");
    return;
  }
  return `${user} just logged in!`;
}
console.log(loginUserMessage("OJAS"));
console.log(loginUserMessage());
function calculateCartPrice(...cartItems) {
  return cartItems;
}
console.log(calculateCartPrice(3, 3, 3, 3, 3));
let user2 = {
  username: "hitesh",
  price: 199,
};
function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
    // if we do prices instead of price we will get undefined
  );
}
handleObject(user2);
handleObject({
  username: "amish",
  price: 1212,
});
function returnZerothValue(getArray) {
  // console.log("0 th value of the array is:");
  return getArray[0];
}
let ar = [10, 20, 30, 40];
console.log(returnZerothValue(ar));
console.log(returnZerothValue([10, 20, 30, 40]));
console.log(returnZerothValue([1, 1, 1, 1]));
