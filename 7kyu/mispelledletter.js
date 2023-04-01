/* Problem

 It checks if the word2 differs from word1 by at most one character.
 This can include an extra char at the end or the beginning of either of words.
 In the tests that expect true, the mispelled word will always differ mostly by one character. If the two words are the same, return True.
 */

 /* Notes
Only maximum 1 wrong letter
 */

var mispelled = function(word1, word2){
    let count = 0;
    console.log(word1.length,word2.length)
  
   if(word2.length + 1 < word1.length) return false; 
   if(word1.length + 1 < word2.length) return false; 
  
  
    if (word1.length === word2.length + 1 && word1[0] !== word2[0]) {
      count = 0;
      console.log("Test")
      for (let i = 1; i < word1.length; i++) {
        if (word1[i] !== word2[i-1]) {
          count++;
          if (count > 1) return false;
        } else{
          return true;
        }
      }
    }
  
    if (word1.length === word2.length - 1 && word1[word1.length - 1] !== word2[word2.length - 1]) {
      count = 0;
      console.log("Test")
      for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) {
          count++;
          if (count > 1) return false;
        }
      }
      return true;
    }
  
  
    for(let i = 0; i < word2.length;i++){
      console.log("Test")
  
      if(word1[i] !== word2[i]) {
        count++;
        if (count > 1) return false;
      }
  
      return true;
    } 
  }
  
  //Opmitized Solution
  function mispelled(word1, word2) {
    if (Math.abs(word1.length - word2.length) > 1) {
      return false;
    }
  
    let count = 0;
    let i = 0;
    let j = 0;
  
    while (i < word1.length && j < word2.length) {
      if (word1[i] !== word2[j]) {
        count++;
        if (count > 1) {
          return false;
        }
  
        if (word1.length > word2.length) {
          i++;
        } else if (word2.length > word1.length) {
          j++;
        } else {
          i++;
          j++;
        }
      } else {
        i++;
        j++;
      }
    }
  
    if (i < word1.length || j < word2.length) {
      count++;
    }
  
    return count === 1;
  }
  
  
  //Test
  console.log(mispelled('versed', 'v5rsed'), true)
  console.log((mispelled('versed', 'xersed'), true));
  console.log((mispelled('versed', 'applb'), false));
  console.log(mispelled('versed', 'versed1'), true);
  console.log(mispelled('aaversed', 'versed'), false);
  console.log((mispelled('versed', 'applb')))
  console.log(mispelled('aaversed', 'versed'))
  console.log(mispelled('1versed', 'versed'), true)
  console.log(mispelled('versed', 'v5rsed'), true)
  
  