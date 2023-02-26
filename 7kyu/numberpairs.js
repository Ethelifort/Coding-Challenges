/* Problem
In this Kata the aim is to compare each pair of integers from 2 arrays, and return a new array of large numbers.
Note: Both arrays have the same dimensions.
*/

function getLargerNumbers(a, b) {
    let emptyArray = [];
      
    a.forEach((num1, index) => {
      const num2 = b[index];
      
      if(num1>num2){
      emptyArray.push(num1);}
      
      else{emptyArray.push(num2);}
    });
      return emptyArray;
    }

//Tests

console.log(getLargerNumbers([23, 64, 53, 17, 88],[34, 14, 53, 17, 88]));
