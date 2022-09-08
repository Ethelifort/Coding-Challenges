/* Problem
Given n, take the sum of the digits of n. If that value has more than one digit,
continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
*/

function findNextSquare(sq){
    let squareRoot;
    let nextRoot;
    if(Math.sqrt(sq)%1 == 0){
        nextRoot=Math.sqrt(sq)
        nextRoot=nextRoot+1
    }else{
        return -1;
    }
    return nextRoot*nextRoot;
}

//Tests

console.log(findNextSquare(121));