/* Problem
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
 /* Notes
 */

 function hasSurvived(attackers, defenders){
    if(attackers.length<1 && defenders.length>1) return true;
    if(attackers.length>1 && defenders.length<1) return false;
  
      
    let totalAttackers =  attackers.reduce((a,b)=>a+b)
    let totalDefenders = defenders.reduce((a,b)=> a+b);
  
    if(totalAttackers < totalDefenders){
      return true;
    } else{
      return false;
    }
      }
    
    //Tests
  
    console.log((hasSurvived([1, 3, 5, 7], [2, 4, 6, 8])));
    console.log(hasSurvived([32, 65, 21, 83, 85, 7, 71, 45, 20, 63], [83, 44, 38, 55, 84, 80, 58, 20, 4, 74]));