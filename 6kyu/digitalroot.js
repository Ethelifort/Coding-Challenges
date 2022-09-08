/* Problem
Given n, take the sum of the digits of n. If that value has more than one digit,
continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
*/

function digitalRoot(n) {
    let num = n.toString().split("");
    let numberArray = num.map(Number);
    let firstTotal = numberArray.reduce((a,b)=>(a+b));
    let firstTotalLength = firstTotal.toString().split("");

    if(firstTotalLength.length > 1){
        num = firstTotal.toString().split("");
        numberArray = num.map(Number);
        firstTotal = numberArray.reduce((a,b)=>(a+b));
        firstTotalLength = firstTotal.toString().split("");

            if(firstTotalLength.length > 1){
             num = firstTotal.toString().split("");
             numberArray = num.map(Number);
             firstTotal = numberArray.reduce((a,b)=>(a+b));
            }
    }
    return firstTotal;
}
//Tests

console.log(digitalRoot(16), 7);