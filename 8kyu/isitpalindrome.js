/* Problem
Write a function that checks if a given string (case insensitive) is a palindrome.
 */

function isPalindrome(x) {
    let newString = x.split("").reverse("").join("");
    
      if(newString.toLowerCase() == x.toLowerCase()){
        return true;
      } else{
        console.log(newString);
        console.log(x)
        return false;
      }
    }
  //Tests
  console.log(isPalindrome("hello"), false);