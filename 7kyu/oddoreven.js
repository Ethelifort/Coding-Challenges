/* Problem

Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
*/

function oddOrEven(array) {

  
    if(array.length == 0 ){
      return "even";
    
    }
  
    let total = array.reduce((a,b)=>a+b);
  
    if(total % 2 == 0){
    return "even";
    } 
    else{
      return "odd"; }
  }
  
  //Tests
  
  oddOrEven([ 1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5 ]);
  