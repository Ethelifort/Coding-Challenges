/* Problem
Complete the square sum function so that it squares each number passed into it and then sums the results together.
*/

function squareSum(numbers){
    let arr = [];
    for(i=0;i<numbers.length;i++){
     arr.push(Math.pow(numbers[i],2))
 }
    if(arr.length>1){
    return arr.reduce((a,b)=>a+b);
  } else{ 
        return 0;
        }
}

//Tests

console.log(squareSum([1,2]), 5)