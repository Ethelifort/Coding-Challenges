/* Problem

An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
Note: anagrams are case insensitive
Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
Examples
"foefet" is an anagram of "toffee"
"Buckethead" is an anagram of "DeathCubeK"

*/
function validAnagram(str1,str2){

    let lookup = {};
  
    for(let i = 0; i < str1.length;i++){
      let letter = str1[i];
      //if letter exists, increment, otherwise set to 1.
      lookup[letter]  = (lookup[letter] || 0) + 1;
  
    }
  
  
  
    for(let i = 0; i<str2.length;i++){
      let letter =  str2[i];
      if(!lookup[letter]){
        return false;
      } else{
        lookup[letter] -= 1;
      }
    }
  
    return true;
  }
  //Tests
  console.log(validAnagram('anagram', 'nagaram')) // truevalidAnagram('', '') // true
  console.log(validAnagram('aaz', 'zza')) // false
  
  