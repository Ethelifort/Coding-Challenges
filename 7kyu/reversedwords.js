/* Problem
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
*/
function reverseWords(str) {

    let arr = [];
    let strArray = str.split(" ");
  
    for(i = 0;i<strArray.length;i++){
      
      let test = strArray[i];
      console.log(test.reverse())
  
    }
  
  
  
  }
  //Tests
  console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))