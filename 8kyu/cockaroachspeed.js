/*Problem 
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
*/


function cockroachSpeed(s) {
    // Convert speed to meters per second
      const speedMeterPerSec = s / 3.6;
    
      // Convert speed to centimeters per second
      const speedCmPerSec = speedMeterPerSec * 100;
    
      // Return the speed in centimeters per second, rounded down to the nearest integer
      return Math.floor(speedCmPerSec);}
  //Tests

  console.log(cockroachSpeed(1.08))
  
    