/* Problem
Given a sequence of numbers, find the largest pair sum in the sequence.

I'm thinking sort them in decending order and push the largest two elements in a new array.

*/


//My solution  


function largestPairSum (numbers) {
    //TODO: Write your Code here
//Creating variables
    let newArray = [];
    let arrayPair = [];

        //Sorted the array from smallest to largest to get the pair at the end.
        newArray = numbers.sort((a,b)=>a-b);
        //Grabbed the pair and put it into arrayPair.
        arrayPair = newArray.slice(-2);
        //Return the sum.
        return (arrayPair.reduce((a,b)=>a+b))
  }

  

/*Tests
    console.log(largestPairSum([10,14,2,23,19]));
    console.log(largestPairSum([-100,-29,-24,-19,19]));
    console.log(largestPairSum([1,2,3,4,6,-1,2]));
    console.log(largestPairSum([-10, -8, -16, -18, -19]));

*/