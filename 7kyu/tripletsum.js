/* Problem
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
*/
function maxTriSum(numbers){
    let filteredArr = numbers.filter((item,index) => numbers.indexOf(item) === index);
    filteredArr.sort((a,b)=>a-b);
    const triNum = filteredArr.slice(-3);
    return triNum.reduce((a,b)=>a+b);
    }
      
    //Tests
    console.log(maxTriSum([2,1,8,0,6,4,8,6,2,4]));