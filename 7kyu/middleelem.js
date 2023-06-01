/* Problem
As a part of this Kata, you need to create a function that when provided with a triplet,
 returns the index of the numerical element that lies between the other two elements.
 /* Notes
 */

 function gimme (triplet) {
    let sortedArr = triplet.slice();
  
     triplet.sort(function(a, b) {
        return a - b;
      });    
     let middleElem = triplet[1];
    
      for(let i = 0; i<sortedArr.length; i++){
        if(sortedArr[i] == middleElem) return i;
      }
  }  
  
  console.log(([-2, -3.2, 1], 0));
  console.log([-5, -10, -14],1);
  