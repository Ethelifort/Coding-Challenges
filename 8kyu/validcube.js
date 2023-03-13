/* Problem
Return true if the cuboid could have equal sides, return false otherwise.
Return false for invalid numbers too (e.g volume or side is less than or equal to 0).
*/

var cubeChecker = function(volume, side){

    if (volume <= 0 || side <= 0) {
     return false;
   }
   
   const length = Math.cbrt(volume);
   return length === side;
   
  };
    
  //Test
  console.log(cubeChecker(8,3));
  