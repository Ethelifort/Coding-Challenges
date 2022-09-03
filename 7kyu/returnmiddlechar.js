/* Problem
You are going to be given a word. 
Your job is to return the middle character of the word. If the word's length is odd, return the middle character.
 If the word's length is even, return the middle 2 characters.
*/
function getMiddle(s)
{
  let middleIndex;

  if (s.length % 2 == 0){
     middleIndex = s.length/2;
    return s[middleIndex-1] + "" + s[middleIndex];
    } else if(s.length == 1){
      return s[0];
    } else if (s.length % 2 != 0){
      middleIndex = Math.floor(s.length/2);
      return s[middleIndex];
    }
}

//Tests

console.log(getMiddle("test"));