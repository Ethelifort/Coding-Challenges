/* Problem
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/
let countBits = function(n) {
    let numOfOnes = 0;
    let binaryNum = n.toString(2);
    
    for(i = 0;i<binaryNum.length;i++){
    binaryNum[i] == 1? numOfOnes++: numOfOnes = numOfOnes;
    }
    return numOfOnes;
    };
    //Tests
    console.log(countBits(1234))