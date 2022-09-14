/* Problem
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 
0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
*/
function countPositivesSumNegatives(input) {
    if (input ==  null || input.length < 1 || input == []){
        return [];
    }
  for(i = 0; i<input.length;i++){
    let positiveNums = input.filter((a)=>a>0);
    let negativeNums = input.filter((a)=>a<0);
    let negativeTotal = negativeNums.reduce((a,b)=>a+b);
    return [positiveNums.length,negativeTotal]
    }
}

//Tests
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]))