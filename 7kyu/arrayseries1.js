/* Problem
Given an array of integers ,
Find the minimum sum which is obtained from summing each Two integers product
*/

function minSum(arr) {
    let leftArr = [];
    let rightArr = [];
    let total = [];
    arr.sort((a,b)=>a-b); //Sort even array.
    for(i=0;i<arr.length/2;i++){ 
        rightArr.push(arr[i]); //Get the smallest values and push them into rightArr.
    }
    for(i=arr.length-1;i>=arr.length/2;i--){
        leftArr.push(arr[i]); //Get the smallest values and push them into leftArr.
    }
    for(i =0;i<rightArr.length;i++){
        total.push(leftArr[i] * rightArr[i]);//Multiply and push it into total.
    }
    return total.reduce((a,b)=>a+b); //Return the added amount.
    } 
    //Tests
    console.log(minSum([12,6,10,26,3,24]), 342);