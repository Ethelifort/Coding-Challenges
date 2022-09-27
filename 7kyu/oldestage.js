/* Problem
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array.
 The returned value should be an array in the format [second oldest age,  oldest age].*/

 function twoOldestAges(ages){
    ages.sort((a,b)=>b-a);
    return ages.slice(0,2).reverse();
  }
  
  //Tests
  
  console.log(twoOldestAges([6,5,83,5,3,18]));
    