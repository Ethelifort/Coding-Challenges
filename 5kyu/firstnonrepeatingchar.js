/* Problem
Write a function named first_non_repeating_letter that takes a string input,
and returns the first character that is not repeated anywhere in the string.


 /* Notes
 If a string contains all repeating characters, it should return an empty string.
 */
 function firstNonRepeatingLetter(s) {
    let lowerCaseString =  s.toLowerCase();
    let counter = 0;
    let counter2 = 0;
   
   if(lowerCaseString.length<1) return '';
   if (lowerCaseString.length == 1) return lowerCaseString[0];
   
    for (let i = 1; i<lowerCaseString.length; i++){
         if(lowerCaseString[0] == lowerCaseString[i]) counter2++;
         if(counter2 == lowerCaseString.length) return "";
   
         for(let j = 0; j<lowerCaseString.length; j++){
           if(lowerCaseString[i] == lowerCaseString[j]) counter++;
         }
   
         if(counter > 1){
           counter = 0;
          }
          if(counter == 1){ 
           return s[i];
          }
    }
    return "";
   }
   //Test
   console.log(firstNonRepeatingLetter("sssss"),"");
   console.log(firstNonRepeatingLetter("sTress"),"t");