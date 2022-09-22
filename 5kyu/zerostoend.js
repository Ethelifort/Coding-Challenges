/* Problem
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
*/
function moveZeros(arr) {
    let zeroNums = arr.filter((a)=>a == 0);
    let nonZero = [];
    let zeroCounter = 0;
    for(i = 0; i<arr.length;i++){
          if(arr[i] !== 0){
            nonZero.push(arr[i]);
          } else {
            zeroCounter++;
          }
    }
    for(j = 0; j<zeroCounter; j++){
      nonZero.push(0);
    }
    return nonZero;
    }
    //Tests
    console.log(moveZeros([ 1, 2, 0, 1, 0, 1, 0, 3, 0, 1 ]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);