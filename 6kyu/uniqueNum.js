/* Problem
There is an array with some numbers. 
All numbers are equal except for one. Try to find it!
 /* Notes
 */
 function findMinMax(arr) {
    let minNum = arr[0];
    let maxNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < minNum) minNum = arr[i];
      if (arr[i] > maxNum) maxNum = arr[i];
    }
    return { min: minNum, max: maxNum };
  }
  
  function findUniq(arr) {
    let maxCounter = 0;
    let nums = findMinMax(arr);
    let minNum =  nums.min;
    let maxNum = nums.max;
    
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] == maxNum){
          maxCounter++;
      }
    }
    if(maxCounter == 1){
      return maxNum;
    }
    else{
      return minNum;
    }
  }
  
  //Test
  console.log(findUniq([ 3, 1, 3, 3, 3 ]));
  