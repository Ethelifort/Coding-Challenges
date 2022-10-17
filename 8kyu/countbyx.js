/* Problem
Create a function with two arguments that will return an array of the first n multiples of x.
Assume both the given number and the number of times to count will be positive numbers greater than 0.
Return the results as an array or list ( depending on language ).
Examples
*/

// complete the function
function countBy(x, n) {
    let z = [];
    let num = 0;
    
    for(i = 0; i<n; i++){
      z.push(num = num + x);
    }
  return z;
  }
  
  //Tests
  
  console.log(countBy(1,10), [1,2,3,4,5,6,7,8,9,10])