/* Problem
Find the mean (average) of a list of numbers in an array.
*/

let findAverage = function (nums) {
    let total = nums.reduce((a,b)=>a+b);
    return total/nums.length;
  }
  
  //Tests
  console.log(findAverage([1, 3, 5, 7]), 4)