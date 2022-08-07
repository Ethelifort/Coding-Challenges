/* Problem
 Given an array of numbers,
  return a new array of length number containing the last even numbers from the original array (in the same order).
  The original array will be not empty and will contain at least "number" even numbers.

*/

//My solution

function evenNumbers(array, number) {

    //Sort even numbers in the array.
    let sortedArray = array.filter((a)=>a%2===0);
    //Slice and return the last "Number" of elements that I need.
    return(sortedArray.slice(-number));
    

}


/*Tests

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]);
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26]);
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6]);

*/