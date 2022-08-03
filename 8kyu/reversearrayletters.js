/** Problem
Complete the solution so that it reverses the string passed into it.
 */

//My solution

function solution(str){

    let strHolder = '';
  
    
    if(str){//If string truthy
        //For loop, starts at the of the element and moves towards 0. (Reverse)
    for(i = str.length-1; i>= 0; i--){
  
      strHolder += str[i]; //Store reversed string and concatenate next string.
    }
  }
  
  else {return str;}//Catches empty strings
  
    return strHolder; //Function return.
  
  }
  