//Get the mean of an array


//My Solution

function getAverage(marks){

    let initalValue = 0;
    let initalValue2 = 0;
    //Reduce method to add the numbers in the array
    let sum = marks.reduce((a,c,d)=>(a+c),initalValue)
    //Reduce Method to add the indexes.
    let indexCounter = marks.reduce((x,y,z)=>(z+0),initalValue2)
    indexCounter++;


    //Checking Values
    console.log(sum);
    console.log(indexCounter);
    //Rounding down
     return Math.floor(sum/indexCounter);


    
 
  }