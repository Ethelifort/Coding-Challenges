/* Problem
In this Kata, you will be given an array of strings and your task is to remove all
 consecutive duplicate letters from each string in the array.
*/
function dup(s) {
    s = s.toString();
    let stringArr =  s;
    let emptyArr = [];
    for(i = 0; i<s.length;i++){
        if(s[i] !== stringArr[i+1]){
                emptyArr.push(s[i]);
        }
    }  
    return emptyArr.join("").split(",");
    }
//Tests

console.log(dup(["abracadabra","allottee","assessee"]));