/* Problem
Given a random non-negative number, 
you have to return the digits of this number within an array in reverse order.
*/

function digitize(n) {  
    let array = n.toString().split("");
    return array.reverse().map((a)=>Number(a)); 
    }
  
  //Tests
  console.log(digitize(554869));