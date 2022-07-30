//Problem - A Nice array is defined to be an array where for every value n in the array,
// there is also an element n - 1 or n + 1 in the array.

//A Solution

function isNice(arr){
  let niceCount = 0;//Is going to be a way to count how many times we got a nice array.

    for (let i = 0; i < arr.length; i++){

      console.log(arr[i]);
        //Will iterate completely before the above for loop does.
      for (let j = 0; j < arr.length; j++){

        console.log(arr[j]);

        //Checks arr[i] with arr[j]
        if (arr[i] === arr[j]-1 || arr[i] === arr[j]+1){
          
          niceCount++;
          break; //After getting a nice array, break out back to outerloop
        } else{console.log("Fail")}

      }
    }
    
   return niceCount === arr.length && arr.length !== 0 //Returns true or false and takes care of Empty arrays.
  }
  


console.log(isNice([2,10,9,3]));