/* Problem
Complete the solution so that the function will break up camel casing, using a space between words.
*/
// complete the function
function solution(string) {

    let strArray = string.split("")
    let arr = [];
      for(i = 0; i<strArray.length; i++){
        if(strArray[i].toUpperCase() == strArray[i]){
          arr.push(" ")
        }
        arr.push(strArray[i]);
      }
      return arr.join("");   
    }
  //Tests
  
  console.log(solution('camelCasingTest'))