"use strict"; // treats all JS CODE in newer version
const accountId = 2;
let accountCity = "Mumbai";
let accountPass = "123132123";
let accountMail = "ojas0jaoasojas@gmail.com";
let accountState;
// PREFER NOT TO USE VAR-->bcoz of issue in block scope
console.log(accountMail);
console.log(accountCity);
console.table([accountMail, accountId, accountCity, accountPass, accountState]);
console.log("\t");
accountMail = "djajdasj@jjss";
accountCity = "DELHI";
// alert(3 + 3);//we are using nodeJs not Browser
let name = "OJAS";
console.log(name);
let age = 12;
let isLoggedIn = false;
let temperature = null;
/*
console.log(temperature);
console.log(typeof "ME");
console.log(typeof 9);
console.log("type of null is:" + typeof null); //type of null is OBJECT
console.log("type of undefined is:" + typeof undefined);
*/
//type of undefined is UNDEFINED
let score = "33";
// score = Number.parseInt(Number);
// console.log(typeof score);
let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);
// console.log(typeof null);
let sat = "2332112abab";
let valueInSat = Number(sat);
console.log("Value in sat is:" + valueInSat);
console.log(typeof valueInSat);
let number2 = "33abc";
let value2 = Number(number2);
console.log(value2);
//"33"==>33
//"33abc"==>Nan(Not A Number)
let isLoggedOut = 1;
isLoggedOut = Boolean(isLoggedOut);
console.log(isLoggedOut);
let empty = "";
console.log(Boolean(empty));
// THE BOOLEAN OF EMPTY STRING IS FALSE
// 1==>true;0==>false
// ""==>false; as it is an EMPTY STRING it gives value false
// "hitesh"==>it returns value as true as the string is not empty
// ************OPEARTIONS IN JS**************
let val = 9;
let negativeValue = -val;
console.log("negative of value is:" + negativeValue);
let value = 3;
let negValue = -value;
console.log(negValue);
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);
let str = "hello";
let str2 = "hitesh";
console.log(str + " " + str2);
console.log(1 + "2");
console.log(1 + 2);
let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
// ⁡⁣⁣⁢The increment (++) operator increments (adds one to) its operand and returns the value before or after the increment, depending on where the operator is placed.⁡
let x = 3;
let y = x++;
console.log(x, y);
x = 2;
y = ++x;
console.log(x, y);

let x2 = 3n;
const y2 = x2++;
console.log(x2, y2);
// x2 is 4n; y2 is 3n
console.log(3 + 4 + 3);
// ***********COMPARISON OF DATA-TYPES IN JS
console.log(2 > 3);
console.log(2 < 3);
console.log("2" > 1);
console.log("02" > 1);
console.log(null == 0);
console.log(null > 0);
console.log(null < 0);
// console.log(null 0);
// '===' is a strict check operator
console.log("2" === 2);
console.log("2" == 2);
let a1 = 5;
let b1 = "5";
console.log("a1===b1:" + (a1 === b1)); // false (strict equality)
console.log("a1 === 5:" + (a1 === 5)); // true (strict equality)
// BRUSH UP OF DATA-TYPES
/* ⁡⁣⁣⁢Primitive data types in JavaScript are immutable and directly operate on the actual value. They are stored directly in memory, and when you work with them, you manipulate the actual value⁡.*/
// ⁡⁣⁣⁢7 types:BB NN SS U (BOOLEAN,BIGINT,NULL,NUMBER,SYMBOL,STRING,UNDEFINED)⁡
let bigInt = 123123123123123n;
console.log(bigInt);
let heroes = ["Shatiman", "Ironman", "Captain America"];
let fun = function () {
  console.log("Hello World");
};
fun();
console.log(typeof bigInt);
// MEMORIES ARE OF TWO TYPES:STACK AND HEAP
// Stack(Primitive memory) HEAP(Non-primitive)-->Reference is passed
let myYoutubeName = "Hitesh Choudhary";
console.log(myYoutubeName);
let anotherName = myYoutubeName;
console.log(anotherName);
anotherName = "chaiaurcode";
console.log("Youtube name:" + myYoutubeName);
console.log(anotherName);
let user = {
  email: "Useratgoogle@gmail.com",
  upi: "12213upi",
};
console.log(user.email);
let userTwo = user;
console.log(userTwo);
userTwo.email = "user2@mail.com";
console.log(user.email);
console.log(userTwo.email);
// STRINGS IN JAVASCRIPT
let naam = "FIRST";
let num = 23213;
let repoCount = 2;
console.log(naam + " " + num);
console.log(`My name is ${name} and my repo count is ${repoCount}`);
let gameName = new String("GTA VICE CITY");
console.log(gameName);
/*
console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName[2]);
*/
console.log("Length of gamename is:" + gameName.length);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
/*
The charAt() method is used to get the character at a specified index within a string. The index is zero-based, meaning the first character is at index 0, the second character is at index 1, and so on.
*/
/*
The indexOf() method returns the index of the first occurrence of a specified substring within a string. If the substring is not found, it returns -1.
*/
let str1 = "Hello World";
console.log("str1[0]:" + str1.charAt(0));
console.log("str1[1]:" + str1.charAt(1));
console.log(str1.indexOf("W"));
/*
 ⁡⁣⁣⁢substring(startIndex, endIndex) Method⁡:
⁡⁣⁣⁢The substring() method is used to extract a portion of a string between two specified indices. The startIndex is inclusive, and the endIndex is exclusive⁡.
*/
/*
⁡⁣⁣⁢slice(startIndex, endIndex) Method:⁡⁣⁢⁣The slice() method is similar to substring(), allowing you to extract a portion of a string. The startIndex is inclusive, and the endIndex is exclusive. Negative indices can be used to count from the end of the string⁡.⁡
*/
let str3 = "OJAS";
console.log("SUBSTRING IS:" + str3.substring(0, 4));
console.log("SUBSTRING-- IS:" + str3.substring(-4, 4));
let str4 = "                            HELLO WORLD";
console.log(str4.trim());
// The trim() method removes leading and trailing whitespaces from a string.
// ⁡⁣⁢⁣replace(oldValue, newValue) Method:The replace() method is used to replace occurrences of a specified substring or pattern with another string.⁡
let strEdited = str4.trim().replace("HELLO", "HI");
console.log(strEdited);
let fruitString = "apple,orange,banana";
console.log(fruitString.replace("apple", "APPLES"));
let url = "https://www.youtube.com/";
let urlEdited = url.replace("youtube", "facebook");
console.log(urlEdited);
