/* Problem
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
*/

function solution(nums){
    if(nums !== null){
    return nums.sort((a,b)=>a-b);
      } else{
        return [];
      }
    }
  //Tests
  console.log(nums([7,8,9,4,3]))