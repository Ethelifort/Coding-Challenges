/* Problem
Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".Write a function which takes a list of strings and returns each line prepended by the correct number.
The numbering starts at 1. The format is n: string. Notice the colon and space in between.
*/
function arithmetic(a, b, operator){
    if(operator == 'add'){
      return a+b;
    }
    if(operator == 'subtract'){
      return a-b;
    }
    if(operator == 'multiply'){
      return a*b;
    }
  
    if(operator == 'divide'){
      return a/b;
    }
  }
    
  //Tests
  console.log(arithmetic(1, 2, "add"));