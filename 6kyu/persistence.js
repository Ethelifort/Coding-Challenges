/* Problem
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
which is the number of times you must multiply the digits in num until you reach a single digit.
*/

function persistence(num) {

    let total = 0;
    let number = 0;
    let numArray = num.toString().split("");
    let counter = 0;
  
    if(numArray.length == 1){
      return 0;
    }
  
    for(i = 0; i<numArray.length; i++){ //Get the first result of multiplication
      total = numArray.reduce((a,b)=>a*b);
  }
  
  if(total.toString().length == 1){//Start
    return counter+1;
  }counter++;
  
  if(number.toString().length == 1){
    return counter+1;
  } counter++;
  
  for(i = 0; i<total.toString().split("").length; i++){
    total = number.toString().split("").reduce((a,b)=> Number(a*b));
  }
  
  if(total.toString().length == 1){
    return counter+1;
  } counter++;
    
  for(i = 0; i<total.toString().split("").length; i++){
    number = total.toString().split("").reduce((a,b)=> Number(a*b));
    if(number.toString().split("").length == 1){
      return counter+1;
    }counter++;
  }
  
  return counter;
  }
  //Tests
  console.log((persistence(25)));