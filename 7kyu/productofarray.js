/* Problem
Given an array/list [] of integers , Find the product of the k maximal numbers.*/
function maxProduct(numbers, size){
    numbers.sort((a,b)=> a-b); //Sort the numbers from smallest to largest.
    const arrNum = numbers.slice(-size);//Slice the "size" out of the array and store it into arrNum
    return arrNum.reduce((a,b)=>a*b);//Return the product.
}
  
//Tests
  console.log((maxProduct([10,2,3,8,1,10,4], 5)));