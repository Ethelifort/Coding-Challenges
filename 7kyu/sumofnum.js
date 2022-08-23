/* Problem
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it.
 If the two numbers are equal return a or b.

Note: a and b are not ordered!
*/

function getSum(a, b, c = 0) {

    if (a <= b) {
      for (i = a; i <= b; i++) {
        c += i;
      }
      return c;
    } else if (a > b) {
      for (i = b; i <= a; i++) {
        c += i;
      }
      return c;
    }
  }
  //Tests
  
  
  getSum(1,2);