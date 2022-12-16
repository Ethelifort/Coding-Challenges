/* Problem
Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.
Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'..
*/

function min(arr, toReturn) {
    arr.sort((a,b)=>a-b);
    
      if(toReturn === 'value'){
        return arr[0];
      } 
            
    if(toReturn === "index"){
      return arr.indexOf(arr[0]);
    }
    }
    
  
  //Tests
  console.log(min([1,2,3,4,5]));
  