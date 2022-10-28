/* Problem
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
*/

function sumArray(array) {
    if(array !== null && array.length === 0){
    let sortedArray = array.sort((a,b)=>a-b);
      sortedArray.pop();
      sortedArray.shift();
      return sortedArray.reduce((a,b)=> a+b);
      } 
  
      return 0;
  }
  //Tests
  
  console.log(sumArray(null), 0);
  console.log( sumArray([ ]), 0);
  console.log(sumArray([ 6, 2, 1, 8, 10 ]),16)