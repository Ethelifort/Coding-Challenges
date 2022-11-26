/* Problem
Сalculate how many years ago the father was twice as old as his son
(or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
*/

function twiceAsOld(dadYearsOld, sonYearsOld) {
    let doubleYears = sonYearsOld * 2;
      
      if(doubleYears > dadYearsOld){
        return Math.abs(dadYearsOld - doubleYears);
        
      } else{
        return dadYearsOld - doubleYears;
    
      }
    }
  //Tests
  
  console.log(twiceAsOld(50,6))