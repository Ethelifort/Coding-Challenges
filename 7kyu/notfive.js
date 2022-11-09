/* Problem
Returning how many numbers are not five.
*/

function dontGiveMeFive(start, end)
{
let increment = 0;
let arr = [];

  for(i = 0; i<=end; i++){
    
    if(i !== 5){
      console.log(increment)
      increment++;
      break;
    }
  }
    return increment;

}
//Tests

console.log(dontGiveMeFive(4,17));