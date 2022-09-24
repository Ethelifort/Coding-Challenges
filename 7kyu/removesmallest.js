/* Problem
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. 
If you get an empty array/list, return an empty array/list.*/


function removeSmallest(numbers) {
    let arr = [];
    let counter = 1;
  if(numbers.length < 1){
    return [];
  }
  const min = numbers.reduce((a, b) => Math.min(a, b))
  
  for(i=0;i<numbers.length;i++){
  if(numbers[i] !== min){
          arr.push(numbers[i]);
  } else if(counter == 1){
    counter++;
  }
  else if(counter == 2){
    arr.push(numbers[i]);
  }
  }
  return arr;
  }
  
  //Tests
  console.log(removeSmallest([2, 2, 1, 2, 1]), [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]")