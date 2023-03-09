/* Problem
You are given an array of values.
Sum every number value in the array, and any nested arrays (to any depth).
Ignore all other types of values.
*/

function arraySum(arr) {
    let flattenedarr =  arr.flat(Infinity);
    
      
      for (let i = 0; i < flattenedarr.length; i++) {
        if (typeof flattenedarr[i] !== 'number' || isNaN(flattenedarr[i])) {
          flattenedarr.splice(i, 1);
          i--; // Decrement index after removing an element
        }
      }
      
        if(flattenedarr.length <= 0 ) return 0;
    
      return arr[0] + arraySum(flattenedarr.slice(1));
    }
    
  //Test
  console.log(arraySum([1, 2, 3, "pig"]), 6);