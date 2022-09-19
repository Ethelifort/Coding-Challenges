/* Problem
In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.*/

function alphabetPosition(text) {
    let  letters = String.fromCharCode(97);// Get the letter a and push 
    let arr = [];
    let textIndex = [];
    let lowerCaseArr =  text.toLowerCase();
  
    for(i = 0; i<26;i++){  
      arr.push(letters);
      letters =  String.fromCharCode(97 + i);
    }
    for(j = 0; j<lowerCaseArr.length;j++){
      for(k = 0;k<=arr.length-1;k++){
        if(lowerCaseArr[j] ==  arr[k]){
          textIndex.push(arr.indexOf(arr[k]));
        }
    }    
    }
  
    return textIndex.join(" ")
  
  }
  //Tests
  console.log(alphabetPosition("The sunset sets at twelve o' clock."));