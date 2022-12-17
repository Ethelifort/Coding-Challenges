/* Problem
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/
function removeExclamationMarks(s) {
  
    let word = "";
      for(i = 0; i<s.length;i++){
    
        if(s[i] !== '!'){
        word = word + s[i];
        }
        
      }
      return word;
  
  }
  
  //Tests
  console.log(removeExclamationMarks("I like turtles!!!!!!!!!"));
  