/* Problem
An isogram is a word that has no repeating letters, consecutive or non-consecutive.
Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
*/

function isIsogram(str){

    let arr = [];
      let strLowercaseArr = str.split("");
      let strLowercase = strLowercaseArr.map((a)=>a.toLowerCase());
      console.log(strLowercase)
    
      for(i = 0; i<strLowercaseArr.length;i++){
        for(j = 1; j <str.length; j++){
          if(strLowercaseArr[i] == str[j]){
            console.log("Test")
          }
        }
      }
    
    //Tests
    }
    console.log(isIsogram("moOse"))