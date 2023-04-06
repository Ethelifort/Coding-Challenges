/* Problem
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number. */

 /* Notes
  Return given array in string phone number format.
 */

  function createPhoneNumber(numbers){
    let arr = [];

    for(i = 0; i<numbers.length;i++){
      if(i == 0) arr.push("(");
      if(i == 3) arr.push(")");
      if(i == 3) arr.push(" ");
      if(i == 6) arr.push("-");

      arr.push(numbers[i]);
    }
    return arr.join("")
  }

  //Tests

  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
  console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");