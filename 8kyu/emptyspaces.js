/* Problem
Simple, remove the spaces from the string, then return the resultant string.


*/

function noSpace(x){
    let string =  x.split(" ");
    return string.join("")
  }
  
  //Tests
  noSpace('8 j 8   mBliB8g  imjB8B8  jl  B');