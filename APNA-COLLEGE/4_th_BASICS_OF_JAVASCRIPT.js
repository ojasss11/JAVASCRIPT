// ARRAYS IN JAVASCRIPT
// ARRAY(DATA-STRUCTURE):linear collection of things
// ARRAYS comes under object in Javascript
let cr = new Array(1, 2, 3, 4, 5);
console.log(cr); //[ 1, 2, 3, 4, 5 ]
let stud1 = "OJAS";
let stud2 = "ANIKET";
let stud3 = "SUJAL";
let stud4 = "BHUSHAN";
console.log(typeof cr); //object
let students = [stud1, stud2, stud3, stud4];
console.log(students);
console.log(typeof students); //object
let students2 = ["Dhiraj", "Manish", "Vaibhav", "Pratik"];
console.log(students2);
console.log("length of student2 is:" + students2.length);
let marks = [99, 92, 98, 90];
let info = ["Ojas", 20, 2003, "cgpa:8.8"];
console.log("information about ojas:" + "(" + info + ")");
let emptyArray = [];
console.log(emptyArray);
console.log(emptyArray.length);
// ARRAYS ARE MUTABLE IN JAVASCRIPT
let fruit = ["orange", "apple", "mango"];
fruit[0] = "banana";
console.log(fruit);
/*ARRAY METHODS:
push:add to the end
pop:delete from the end & returns it
unshift:add to the start
shift:delete from the start
*/
let friends = ["fr1", "fr2", "fr3", "Fr4"];
friends.unshift("friend"); //adds "friend" to the zeroth position i.e. in the start
console.log(friends);
friends.shift(); //removes the first element of the array
console.log(friends);
let car = ["xuv", "audi", "bmw", "maruti"];
car.push("honda");
console.log(car); //adds honda at the end of the array
car.pop();
console.log(car); //removes last element of the array
car.unshift("ferrari");
console.log(car);
let followers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let block = followers.shift();
// followers.shift();
console.log(followers);
let start = ["jan", "july", "march", "aug"];
start.shift();
start.shift();
start.unshift("june");
start.unshift("july");
console.log(start);
/*
indexOf and includes method in array
indexOf:returns the index of something
includes:searches for a value
includes returns boolean result(true or false)
*/
let color = ["red", "green", "blue", "yellow"];
console.log("Index of red is:" + color.indexOf("red")); //0
console.log("Index of yellow is:" + color.indexOf("yellow"));
let primary = ["red", "yellow", "blue"];
console.log(primary.indexOf("yellow"));
console.log(primary.indexOf("green")); //-1
console.log(primary.indexOf("Yellow")); //-1 as Yellow with capital Y is not present
console.log("Primary array is:" + `(${primary})`);
console.log(primary.includes("green")); //green is absent in primary array
console.log(primary.includes("red"));
console.log(primary.includes("brown"));
if (primary.includes("brown")) {
  console.log(`Brown is present in the primary!`);
} else {
  console.log(`Brown is absent in the primary!`);
}
/*
concat method():merges 2 arrays
reverse method():Reverses an array
*/
let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [7, 8, 9, 10, 11, 12];
let mergedArray = array1.concat(array2);
console.log(array1.concat(array2));
console.log(mergedArray);
let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arReversed = ar.reverse();
console.log(arReversed);
/*
SLICE AND SPLICE IN ARRAYS::
*/
let newer = ["first", "second", "third", "fourth", "fifth", "sixth"];
console.log(newer.slice(0, 2));
let numbers = [0, 1, 2, 3, 4, 5, 6, 7];
console.log(numbers.splice(4));
console.log(numbers);
console.log(numbers.splice(1));
console.log(numbers);
console.log(numbers.splice(1, 0, 1, 2, 3, 4, 5));
console.log(numbers); //[0, 1, 2, 3, 4, 5];
console.log(numbers.splice(0, 0, "0th", "000", "0000"));
console.log(numbers);
// SORT METHOD IN ARRAY
let ar1 = [
  "Dhiraj",
  "Aashish",
  "Ashish",
  "Manish",
  "Monish",
  "Vaibhav",
  "Vibhav",
];
console.log(ar1.sort());
let mark = [101, 2123, 123213142, 12421414212, "0123213213"];
console.log(mark.sort());
let realMarks = [10, 11, 12, 25, 24, 30, 15, 16, 17, 18];
console.log(realMarks.sort());
// PRACTICE
let lang = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
console.log(lang.reverse());
console.log(lang.indexOf("javascript"));
let month = ["january", "july", "march", "august"];
//i want [july,june,march,august] using splice
console.log(month.splice(0, 2, "july", "june"));
console.log(month);
// ARRAY REFERENCES::address in memory
/*
console.log([1] == [1]);
console.log([1] === [1]);
console.log([]===[]);
console.log([]==[]);
*/
const g = 9.8;
console.log(g);
// CONSTANT ARRAYS:
const al = [1, 2, 3, 4];
al.push(5);
console.log(al);
// al = [2, 3, 4, 4, 5, 5];//ERROR:Assignment to constant variable.
// NESTED ARRAYS/MULTI-DIMENSIONAL ARRAYS::
let nested = [
  [4, 4],
  [1, 2],
  [3, 4],
  [5, 6],
];
let one = nested[1];
console.log("one:" + one);
console.log(nested);
console.log(nested[1]);
let tic = [
  ["X", null, 0],
  [null, "X", null],
  [0, null, "X"],
];
console.log(tic);
// change
tic[0][1] = 0;
console.log(tic);
/* Write a JavaScript program to get the first n elements of an array. [n can be any positive number].
 */
let arrays = [7, 9, 0, -2];
let n = 3;
let arrSpice = arrays.splice(0, n);
console.log(arrSpice);
// Write a JavaScript program to check whether a string is blank or not
let enteredString = "";
if (enteredString.length === 0) {
  console.log(`Entered string is blank`);
} else {
}
console.log(`Entered string is NOT blank`);
let character = "Ojas";
let index = 3;
if (character[index] === character[index].toLowerCase()) {
  console.log(`The character at that index is lowercase`);
} else {
  console.log(`It is not lowercase`);
}
// Write a JavaScript program to strip leading and trailing spaces from a string.
let string2 = "               HI   ";
s2Trimmed = string2.trim();
console.log(s2Trimmed);
