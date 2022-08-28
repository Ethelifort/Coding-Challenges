/* Problem
Given a string s. You have to return another string such that even-indexed
and odd-indexed characters of s are grouped and groups are space-separated (see sample below)
*/


function sortMyString(S) {

  let evenWords = '';
  let oddWords = ''; 

  for(i = 0;i<S.length;i++){

     if(i % 2 ==0){
      evenWords = evenWords + S[i];
     }

     else {
      oddWords = oddWords + S[i];
     }

  }
  return evenWords.concat(' ', oddWords);
}




//Tests
console.log(sortMyString("YCOLUE'VREER"));   