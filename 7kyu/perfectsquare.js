/* Problem
Given an integral number, determine if it's a square number:
*/
let isSquare = function(n){

    if(n < 0){return false;
      }else if(n == 0){return true;}
      
    let numRoot= Math.floor(Math.sqrt(n));
    let result = numRoot * numRoot == n? true : false
    return result;
    }
  
  //Tests
  
  console.log(isSquare(3));