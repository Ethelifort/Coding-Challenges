/* Problem
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
Input will always be valid, i.e. no negative integers.
*/
let countSheep = function (num){
    let sheepText = " sheep..."
    let sheepCount = "";
    for(i = 1;i<=num;i++){
      sheepCount = sheepCount  + i + sheepText;
    }
    return sheepCount;
    }
    //Tests
    
    console.log(countSheep(5));