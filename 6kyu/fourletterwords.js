/* Problem
Write a function that takes in a string of one or more words, and returns the same string,
but with all five or more letter words reversed (Just like the name of this Kata).
Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
*/

function spinWords(string){

    let splitString = string.split(" ");
    splitString.filter((elem)=>{
  
      if(elem.length>4){
      let fourLetter = elem.split("").reverse().join("").split(" "); //Reversed 4 letter word.
      let index = splitString.indexOf(elem); //Storing index of 4+ letter element.
      splitString.splice(index, 1, fourLetter); //Replacing the word at index with reversed string.
      return elem;
      }
    })
  
  return splitString.join(" ");
  }
  
  //Tests
  
  
  console.log(spinWords("This is a test"));