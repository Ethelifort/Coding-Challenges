/* Problem
Oh no, Timmy's created an infinite loop! 
Help Timmy find and fix the bug in his unfinished for loop!
*/

function createArray(number){
    let newArray = [];
    
    if(number == 1){
      return [1];
    }
    
    for(let counter = 1; counter <= number;){
      newArray.push(counter);
      counter++;
  
    }
    
    return newArray;
  }
  
  //Tests
  console.log(createArray(1));
  console.log(createArray(1));
  console.log(createArray(4));
  console.log(createArray(10));