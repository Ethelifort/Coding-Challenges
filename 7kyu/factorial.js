/* Problem
You have to create the function factorial that receives n and returns n!. You have to use recursion.
*/

const factorial = n => {
    if (n < 0 ) return 0;
    if (n <= 1 ) return 1;
    return n * factorial(n-1); 
  };
  
  //Test
  console.log(factorial(4));