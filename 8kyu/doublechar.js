/* Problem
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
*/

function doubleChar(str) {
    let test = "";
    
    for(i = 0; i<str.length;i++){
    test = test + str[i] + str[i];
    }
    return test;
    }
    
  
  //Tests
  console.log(doubleChar("is2 Thi1s T4est 3a"));