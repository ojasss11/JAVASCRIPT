"use strict";
/*
   Scoping: Determines how our program's variables are organized and accessed. 
            It answers questions like "Where do variables live?" and "Where can we access a certain variable?"

   Lexical scoping: Scoping controlled by the placement of functions and blocks in the code. 
                    It defines the scope based on where variables and functions are declared.

   Scope: The space or environment in which a variable is declared. 
          There are global scope, function scope, and block scope.

   Scope of a variable: The region of our code where a certain variable can be accessed. 
                       It defines the boundaries within which a variable is visible and usable.
*/
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);
  return age;
}
const firstName = "OJAS";
calcAge(1991);
