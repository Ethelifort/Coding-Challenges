/* Problem
You are given an odd-length array of integers, in which all of them are the same, except for one single number.
Complete the method which accepts such an array, and returns that single different number.
The input array will always be valid! (odd-length >= 3)
*/

function stray(numbers) {
    let odd = numbers.sort((a,b)=>a-b);
    if(odd[0] !== odd[1]){
      return odd[0];
    } else{
      return odd[odd.length-1];
    } 
  }
    
    
  
  
  //Tests
  console.log((stray([5,5,5,5,5,5,5,1])));