//Problem - Write a function that takes an array of strings as an argument
// and returns a sorted array containing the same strings, ordered from shortest to longest.

//My solutions 
function sortByLength (array) {
    // Return an array containing the same strings, ordered from shortest to longest
    return array.sort((a,b)=>a.length-b.length);
  };
  
  
  
  sortByLength(["Beg", "Life", "I", "To"],["I", "To", "Beg", "Life"]);