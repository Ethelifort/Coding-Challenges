/* Problem
Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
The geese are any strings in the following array, which is pre-populated in your solution:
*/

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    let arr = birds.filter((a)=>!geese.includes(a));
      return arr;
  };
  
  //Tests
  console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]),["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);
  
  