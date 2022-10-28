/* Problem
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
*/

let capitals = function (word) {
    let arr = [];
       
    for(i=0;i<word.length;i++){
        if(word[i] !== word[i].toLowerCase()){
          arr.push(word.indexOf(word[i]));
        }
    }
    return arr;
    };
  //Tests
  
  console.log(capitals("CoDeWaRs"));