// STRINGS IN JAVASCRIPT
// Methods()::actions that can be performed on objects
//Format::stringName.method()
let str = "            HELLO";
let trimmed = str.trim();
console.log(trimmed);
// str.trim():TRIMES WHITE-SPACES FROM BOTH ENDS OF STRING and returns new one(the value of the message remains the same)
/*
let password=prompt("Set your password");
console.log(password.trim());//removes the starting spaces
*/
let pass = "           new@newer199";
console.log("Password is:" + pass.trim());
// STRING ARE IMMUTABLE IN JS::No changes can be made to strings.Whenever we do try to make a change,a new string is created and older one remains the same.
str = "Random Message";
console.log("Lower Case of str is:" + str.toLowerCase());
console.log("Upper Case of str is:" + str.toUpperCase());
/* ⁡⁣⁢⁣String.toLowerCase():Converts all the alphabetic characters in a string to lowercase.
String.toUpperCase():Converts all the alphabetic characters in a string to uppercase⁡.*/
/* STRING METHODS WITH ARGUMENTS:Argument is a some value that we pass to the method.
Format::stringName.method(arg)
IndexOf:The substring to search for in the string
Returns the position of the first occurrence of a substring.
Returns the first index of occurence of some value in the string.Or gives -1 if not found.
*/
console.log(str.indexOf("R"));
let line = "ILoveCoding";
console.log("Index of Love:" + line.indexOf("Love"));
console.log("Index of J:" + line.indexOf("J")); //-1
console.log("Index of Koding:" + line.indexOf("Koding")); //-1 as not found
console.log("Index of o:" + line.indexOf("o")); //2
let name = "OJAS";
/*  O   J   A    S
    0   1   2    3
*/
console.log("Index of O:" + name.indexOf("O"));
console.log("Index of J:" + name.indexOf("J"));
console.log("Index of Z:" + name.indexOf("Z"));
// METHOD CHAINING:Using one method after another.Order of execution will be from left to right.
console.log(name.toLowerCase().trim());
/*
SLICE method:Returns a part of original string as a substring.
The index to the beginning of the specified portion of stringObj.
str.slice(-num)=str.slice(length-num)
*/
let line2 = "I Love To Code";
console.log(line2.slice("2"));
console.log("USING SLICE:" + line2.slice(2, 7));
let hello = "hello";
console.log(hello.toUpperCase().slice(0, 4));
console.log(hello.slice(-1));
/* REPLACE METHOD():Searches a value in a string & returns a new string with value replaced */
str = "I LOVE CODING";
console.log("replaced string:" + str.replace("CODING", "CRICKET"));
console.log("original string:" + str);
let college = "MGM COLLEGE OF ENGINEERING";
console.log(college.replace("MGM", "SARASWATI"));
// REPLACE():returns a string with number of copies of a string
let fruit = "mango ";
console.log("repeat method:" + fruit.repeat(3));
let msg = "help!";
console.log(msg.trim().toUpperCase());
name = "ApnaCollege";
console.log(name.slice(4, 9));
console.log("INDEX OF (na):" + name.indexOf("na"));
console.log(name.replace("Apna", "Our"));
// SEPARATE IN COLLEGE PART IN THE ABOVE STRING & REPLACE "l" with "t" in it
console.log(name.slice(4).replace("l", "t"));
console.log(name.slice(4).replace("l", "t").replace("l", "t"));
console.log("\t");
