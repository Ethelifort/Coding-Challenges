/* Problem
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

*/


function findOdd(A) {

    const arrCopy = A;
    let counter = 0;
  
  
  for(i=0;i<A.length;i++){
  
    for(j=0;j<arrCopy.length;j++){
  
      if(A[i] === arrCopy[j]){
        counter = counter + 1;
      } 
    }
    if (counter % 2 !== 0) {
      return arrCopy[i];
    }
  
  }
  }
  
  //Tests
  
  
  console.log(findOdd([ 1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5 ]));