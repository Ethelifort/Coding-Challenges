/* Problem
An isogram is a word that has no repeating letters, consecutive or non-consecutive.
Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
*/

function isIsogram(str){

  let arr = [];
    let strLowercaseArr = str.split("");
    let strLowercase = strLowercaseArr.map((a)=>a.toLowerCase());
    let counter = 0;
  
    for(i = 0; i<strLowercase.length;i++){
      arr.push(strLowercase[i]); //Push first letter into arr.
      for(j = 0; j < arr.length;j++){
        if(strLowercase[i+1] == arr[j]){ //Check the first letter with letters in StrlowerCase starting from the seocnd letter.
          counter++;  
        }
      }
    }
  
    let result = counter>0? false :  true;
    return result;
  }
  
  
  
  
  //Tests
  
  console.log(isIsogram("moose"))