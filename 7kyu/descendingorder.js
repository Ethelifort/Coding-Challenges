/* Problem
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
 Essentially, rearrange the digits to create the highest possible number.



*/

//My solution

function descendingOrder(n){
    //Transform n into a string and store it into nString
    let nString = n.toString();
    //Split nString into an array
    nString = nString.split('')
    //Sort it from decending order.
    nString = nString.sort((a,b)=>b-a)
    //Join the reversed array.
    let joinedString = nString.join('');
    
    return parseFloat(joinedString);
    
    
    
    }
    
    
    
    
    //Test console.log(descendingOrder(1021))