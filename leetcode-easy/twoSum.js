/* Problem

Sort "array" so that all elements with the value of zero are moved to the
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
  */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 let twoSum = function(nums, target) {
    
    for(i = 0; i<nums.length;i++){
        for(j = 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target && nums.indexOf(nums[i]) != nums.lastIndexOf(nums[j])){
               return [nums.indexOf(nums[i]), nums.lastIndexOf(nums[j])]
            }
        }
    }
    
  };
  
  
  
  console.log(twoSum([2,7,11,15],9));
  