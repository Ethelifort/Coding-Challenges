/* Problem
A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits,
 each raised to the power of the number of digits in a given base.
 In this Kata, we will restrict ourselves to decimal (base 10).
 Return true or false;
 
 */

 function narcissistic(value) {
  
    let numbervalue = value.toString().split("").map((a)=> Number(a));
    let power = value.toString().split("").length;
    let total = 0;
   
     if(numbervalue.length == 1){
      return true;
     }
     
     for(i = 0; i < numbervalue.length; i++){
      total = total + Math.pow(numbervalue[i],power);
     }
  
     if(total == numbervalue.join("")){
      return true;
     } else {
      return false;
     } 
   }
  //Tests
  console.log(narcissistic(371));