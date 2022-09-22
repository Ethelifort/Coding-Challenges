/* Problem
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
*/
function validParentheses(parens) {
    let openParens = 0;
    let closedParens = 0;
    
    for(i=0;i<parens.length;i++){
      if(parens[i]== '('){
        openParens++;
      } else{
        closedParens++;
      }
    }
      if(parens.length == 1){
        return false;
      }
      if(parens.length == ""){
        return true;
      }
    if(parens[0] == "(" && parens[parens.length-1] == ")" && parens.length % 2== 0 && openParens == closedParens){
      return true;
    } else{
      return false;
    }
    }
    //Tests
    console.log(validParentheses( "()" ), true)