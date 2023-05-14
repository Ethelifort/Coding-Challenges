/* Problem
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

 /* Notes
Two adjacent numbers. 
 */


function adjacentElementsProduct(array) {
    let maxNum = Number.NEGATIVE_INFINITY;
  
    for(let i = 0; i < array.length-1; i++){
      let product = array[i] * array[i+1]    
      if(product > maxNum) maxNum = product;
    }
  return maxNum;
  }
  
  
  
  
  
  //Test
  console.log(adjacentElementsProduct([1, 5, 10, 9]),90)
  console.log(adjacentElementsProduct([[-23, 4, -5, 99, -27, 329, -2, 7, -921]] -14))