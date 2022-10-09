/* Problem
Palindrome strings
An AI has infected a text with a character!!
This text is now fully mutated to this character.
If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!
Note: The character is a string of length 1 or an empty string.
*/


function contamination(text, char){
    let result = "";
    for(i=0;i<text.length;i++){
      result = result + char;
    }
    return result;
    }
    //Tests
    
    console.log(contamination("abc","z"))