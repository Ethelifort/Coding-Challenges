/* Problem
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
 Additionally, if the number is negative, return 0 (for languages that do have them).
Note: If the number is a multiple of both 3 and 5, only count it once.
*/

//My Solution



function solution(number){
    let arrNum = [];
    let multiplesOf3and5 = [];
    
    // Push every number 1 through number into arrNum.
    for (let i = 0; i < number; i++) {
      arrNum.push(i);
    }

    // Check if i is a multiple of 3 or 5. If so push it into empty array.
    for (let i = 0; i < arrNum.length; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        multiplesOf3and5.push(i);
      }
    }

    //Add multiples and store them here.
    let sumOfMultiples = multiplesOf3and5.reduce((sum, num) => sum + num, 0);
    
    return sumOfMultiples;
  }
  