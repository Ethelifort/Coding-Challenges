/* Problem

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

//My Solution
function findShort(s){

    //Turn the string to an array for comparison.
    let stringtoArray = s.split(" ");
    //Sort it from the smallest to largest words.
    stringtoArray.sort((a,b)=>a.length - b.length);
    //return the first word.
    return stringtoArray[0].length;
  
  
  }
  
  /*Tests
  console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
  console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
  console.log(findShort("Let's travel abroad shall we"), 2);
  */