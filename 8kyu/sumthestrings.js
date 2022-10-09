/* Problem
Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
*/
function sumStr(a,b) {
    let result = Number(a) + Number(b);
    return result.toString();
    }
  //Tests
  console.log(sumStr("4","5"))