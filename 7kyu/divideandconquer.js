/* Problem
Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.
*/

function divCon(x){
    let numbers = x.filter((a)=>typeof(a) == 'number')
    let strings = x.filter((a)=> typeof(a) == 'string')
    let stringToNum = strings.map((a)=>Number(a));
      
      if(numbers.length < 1 ){
       return stringToNum.reduce((a,b)=>a+b);
    }
      if(stringToNum.length < 1 ){
       return numbers.reduce((a,b)=>a+b);
    } 
      if(numbers.length > 0 || strings.length > 0){
       return numbers.reduce((a,b)=>a+b) - stringToNum.reduce((a,b)=>a+b);
    }
    }
  //Tests
  console.log(divCon([7,"8"]), 14)