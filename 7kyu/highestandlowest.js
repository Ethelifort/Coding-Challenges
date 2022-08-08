/* Problem
 In this little assignment you are given a string of space separated numbers,
  and have to return the highest and lowest number

*/

//My solution


function highAndLow(numbers){
    
    let stringToNumber;
    //Convert is string number into an a real integer.
    numbers = numbers.split(" ");
    //sort the numbers from smallest to largest.
    stringToNumber = numbers.sort((a,b)=>a-b);
    //Return the largest number at the end of string with the first number on the string 
    return (stringToNumber[stringToNumber.length-1] +' ' + stringToNumber[0]);
    
  }




  /*Tests
  console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
  console.log((highAndLow("1 2 3")));
  */