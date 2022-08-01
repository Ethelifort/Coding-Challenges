/** Problem
 * Returns product of all numbers in a numeric array.
 * Returns null if param is null or array is empty.
 * @param {Array} values - The array containing the items.
 * 
 * Calculate the product of all elements in an array.

If the array is null or is empty, the function should return null.
 */

//My solution

function product(values) {

    //Create new array.
    
      let newArray =[];
    
    //Runs if value is not null and truthy
      if (values !== null || values){
    //Second if checks if value is not an empty array.
    
        if (!values.length == 0){
          //Reduce method to multiply the elements.
          newArray = values.reduce((a,b)=> {
        
          return a * b;      
    
        });
                                 }
    
       else{
        return null; //Return null if condition not met.
          }
    
        return newArray;
    
                                     } 
        else {
    
          return null; //Return null if condition not met
        }
    
      }
    
      console.log((product([5, 4, 1, 3, 9])));
      console.log((product([-2, 6, 7, 8])));
      console.log((product([10])));
      console.log((product([0, 2, 9, 7])));
      console.log((product(null)));
      console.log((product([])));
    