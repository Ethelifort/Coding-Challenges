/* Problem
In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.*/

function alphabetPosition(text) {
    let  letters = String.fromCharCode(97);
    let arr = [];
    let lowerCaseArr =  text.toLowerCase();
    console.log(lowerCaseArr);
  
    for(i = 0; i<26;i++){
      arr.push(letters);
      letters =  String.fromCharCode(98 + i);
    }
  
    for(j = 0; j<lowerCaseArr.length;j++){
      
    }
  
  }
  //Tests
  console.log(alphabetPosition("The sunset sets at twelve o' clock."));