/* Problem

Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

*/

function capMe(names) { 

    // Map creates new array, slice removes the first letter, toUppercase to capitalize and 
    // We add it to the rest of the string lowercase.
    
      return names.map(names=>names.slice(0,1).toUpperCase()+names.toLowerCase().slice(1));
  
      
      }
  
  
  //Test
  
  capMe(['jo', 'nelson', 'jurie']) 