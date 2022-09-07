/* Problem
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
 Write a method that takes the array as an argument and returns this "outlier" N.
*/

function findOutlier(integers){
    const even = integers.filter((a)=>a % 2 == 0);
    const odd = integers.filter((a)=>a % 2 !== 0);
    
    if(even.length > odd.length){
        return odd[0];
    } else{ 
        return even[0];
    }
    }
    //Tests
    
    console.log(findOutlier([2, 3, 5]));