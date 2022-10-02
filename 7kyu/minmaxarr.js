/* Problem
Write a function that returns both the minimum and maximum number of the given list/array.*/


function minMax(arr){
    let test = arr.sort((a,b)=>a - b); //Sort the array from smallest integer to largest.
    return [test[0],test[test.length-1]]
    }
    //Tests
    console.log(minMax([7,8,9,4,3]))