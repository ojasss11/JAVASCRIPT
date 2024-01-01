// A variable is simply the name of the storage location
let name = "Tony stark";
let a = 16;
console.log("Type of a is:" + typeof a);
let price = 99.99;
console.log("Typeof price is:" + typeof price);
let b = 8;
console.log("a-b:" + (a - b));
a = 0.999999999999999999999;
console.log(a); //a will become 1 that is the nearest integer
(a = 20), (b = 10); //a and b are called as operands
console.log("The value of a is:" + a);
console.log("The value of b is:" + b);
console.log("a+b:", a + b); //+ is the operator(Addition)
console.log("a-b:", a - b); //+ is the operator
console.log("a*b:", a * b); //+ is the operator
console.log("a/b:", a / b); //+ is the operator
console.log("Modulo operator:" + (a % b)); //Modulo operator gives the remainder
console.log("Exponential operator::" + a ** 2); //20 raised to 2
// Exponential is also known as power operator
/*
 NaN:stands for NOT A NUMBER(The Nan is a global property representing not a number)
 E.G.] 0/0,NaN-1,Nan*1,Nan+1,Nan+Nan
*/
console.log(typeof NaN); //type of NaN is a number
console.log(typeof (NaN + 1));
//Operator precedence:It is a general order of solving an expression
// E.g] () then **  then *,/,% then +,_,*
console.log("(2+1)*3:", (2 + 1) * 3);
console.log("3/1+2**2:", 3 / 1 + 2 ** 2);
console.log("4 + 1 * 6 / 2:", 4 + (1 * 6) / 2);
let age = 23;
age++;
console.log("age is:" + age);
let cgpa = 8.9;
console.log("cgpa is:" + cgpa);
let num1 = 1;
let num2 = 2;
let sum = num1 + num2;
console.log("sum is:" + sum);
let side = 4;
console.log("AREA OF SQUARE:" + side * side);
/*
 CONST KEYWORD:values of constant can't be changed with re-assignment & they can't be re-declared.
*/
const year = 2024;
const PI = Math.PI;
console.log("value of pi is:" + PI);
let newnNum = 10;
console.log(newnNum);
let hindi = 80,
  eng = 90,
  math = 100;
let avg = (hindi + eng + math) / 3;
console.log("Avg :" + avg);
//ASSIGNMENT OPERATOR
console.log("age:" + age);
age += 1;
console.log("(age+=1):" + age);
age -= 1;
console.log("(age-=1):" + age);
age *= 2;
console.log("(age*=2):" + age);
// unary operators::increment and decrement
/*
PRE-INCREMENT::(Change then use)
let age=10;
let newAge=++age;
POST-INCREMENT::(USE THEN CHANGE)
let age=10;
let newAge=age++;
*/
let num = 5;
let newNum = num++;
newNum = ++num;
console.log("num:" + num);
console.log("newNum:" + newNum);
/*
 IDENTIFIER RULES::
All Javascript variables must be identified with unique names(identifies).
~Names can contain letters,digits,underscores, and dollar signs(no space)
~Names must begin with a letter
~Names can also begin with $ and _
~Names are case sensitive(y and Y are different variables).
~Reserved words(like Javascript keywords) CANNOT be used as names
*/
// camelCase convention is prefered in Javascript
// BOOLEANS IN JS:Booleans represent a truth value (TRUE OR FALSE)
age = 23;
let isAdult = true;
if (isAdult) {
  console.log("You are above 18");
}
// ERRORS IN THE CODE
/*
let 1age=3;//Invalid or unexpected token
let 2age=20;Invalid or unexpected token
let isTrue = True;//True is not defined(t should be capital)
*/
let marks = 74;
let isPass = "True";
// Strings are textual information or sequence of characters
let emptyString = " ";
let char = "a";
console.log(typeof char);
let name2 = "OJAS";
// console.log(name2[name2.length-1]);//total length minus 1==last character
console.log(name2[0]);
console.log(name2[1]);
console.log(name2[2]);
console.log(name2[3]);
console.log(name2[name2.length - 1]);
console.log(`Length of Shradha is :` + "Shradha".length);
let real = "Tony Stark";
console.log(real[real.length - 1]); //gives the last index
let fullName = "Tony" + " " + " Stark";
console.log(fullName);
console.log("Ojas" + "1");
/* 
UNDEFINED:A variable that has not been assigned a value of type undefined.
null:The NULL value represents the intentional absence of any object value.
*/
let a1 = undefined;
console.log("type of a1::" + a1);
let a2 = null;
console.log("typeof a2::" + a2);
let myName = "Ojas";
console.log("First character of myname:" + myName[0]); //first char
console.log("Last character of myname:" + myName[myName.length - 1]); //last char
let check = "Ojasbidkar" + 124;
console.log(check);
console.log(typeof check);
emptyString = "";
console.log("Length of empty string:" + emptyString.length);
let stringWithSpace = " ";
console.log("Length of String with space:" + stringWithSpace.length);
// console.log:It is used to write a message on the console
// For linking a javascript file in the html code we use the script tag
// TEMPLATE LITERALS:they are used to add embedded expressions in a string
let pencilPrice = 12;
let penPrice = 10;
console.log(`The price of Pen is: ${penPrice}`);
console.log(`The price of Pencil is: ${pencilPrice}`);
console.log(`The total price is ${penPrice + pencilPrice} rupees`);
/* 
OPEARTORS IN JS::
ARITHMETIC OPERATORS,UNARY,ASSIGNMENT,COMPARSION OPERATOR,LOGICAL OPERATOR
*/
// COMPARISON OPERATORS ARE USED TO COMPARE 2 VALUES
/* 
 >:GREATER THAN
>=:GREATER THAN EQUAL TO
<:LESS THAN
<=:LESS THAN EQUAL TO
==:EQUAL TO
!=:NOT EQUAL TO
*/
//5==5-->true
//5 != 5;-->false;
//5 > 5;-->false;
//5 < 5;-->false;
let n = 5;
let str = "5";
console.log(str > n);
console.log(n > str);
// "==" is used to compare values but not types
// "===" is used to compare types as well as values
console.log(`("a" > "A"):` + ("a" > "A"));
console.log(`("a" < "A"):` + ("a" < "A")); //UNICODES are compared
// "a"-->61,"b"-->62,"A"-->41,"B"-->42
