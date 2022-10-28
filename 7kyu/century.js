/* Problem
Given a year, return the century it is in.
*/

function century(year) {
    let century = 0;
    let num = 0;
    for(i = 0;i<year;i++){
      if(num<year){
        num  = num + 100;
      }else{
        return century;
      }
      century++;
    }
  }
  //Tests
  
  console.log(century("2022"));