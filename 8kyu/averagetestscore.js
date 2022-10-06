/* Problem
You receive an array with your peers' test scores. Now calculate the average and compare your score!
Return True if you're better, else False!
*/

function betterThanAverage(classPoints, yourPoints) {
    let average = classPoints.reduce((a,b)=>a+b) / classPoints.length;
     if(yourPoints > average){
       return true;
     } else{
       return false;
     }
   }
   
   //Tests
   
   console.log(betterThanAverage(([100, 40, 34, 57, 29, 72, 57, 88]), 75))