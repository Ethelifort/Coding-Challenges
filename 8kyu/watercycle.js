/* Problem
Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
*/

function litres(time) {
    let total = Math.floor(0.5 * time);
    return total;
  }
  //Tests
  
  console.log(litres(2));