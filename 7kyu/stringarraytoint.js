/** Problem
Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.
 */

//My solution

function toNumberArray(stringarray){

    let integerArray = [];//Where I'll be storing the new array.
    
    //For Loop to run through the elements in the array.
    for(i=0;i<stringarray.length;i++){
      //Grabbing stringarray[i] and converting it to a number. Then pushing it into integerArray.
      integerArray.push(Number(stringarray[i]));
    
    }
    
    //returns integer.
    return integerArray;
      
    }
    
    
      console.log(toNumberArray((["1.1","2.2","3.3"])));