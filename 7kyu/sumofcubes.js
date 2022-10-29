/* Problem
Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.
Assume that the input n will always be a positive integer.
*/

function sumCubes(n){

    let num = 0;
    let total = 0;
  
    for(i = 1; i<=n;i++){
      let num = Math.pow(i,3);
      total = total + num;
      
    }
    return total;
  }
  //Tests
  
  console.log(greet("ERNST"));