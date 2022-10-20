/* Problem
Write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return 0.
  */


function findAverage(array) {
    return array.reduce((a,b)=>a+b) / array.length;
  }
  
  
  //Tests
  console.log(findAverage([5,5,4,7,2,3]))