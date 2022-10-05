/* Problem
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language )
that receive a list of integers as input, and return the largest and lowest number in that list, respectively.*/

let min = function(list){
    let minNum = list.sort((a,b)=>a-b);
    return minNum[0];
}

let max = function(list){
  
  let maxNum =  list.sort((a,b)=>a-b);
  return maxNum[maxNum.length-1]
}
//Tests

console.log(max([0,4,10,15,2]));
console.log(min([0,4,10,15,2]));