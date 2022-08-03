function positiveSum(arr) {


    //Check if arr is truthy.
          if(arr) {
            //check if array is empty
            if(!arr.length == 0){
          //Store filtered array with non negative numbers
          let positiveNumbers = arr.filter(val => val> 0);
          //Check if empty array was passed.
          if(positiveNumbers.length == 0){
            return 0;
          }
    
        //Return Reduce Method to add elements
        return positiveNumbers.reduce((a,b)=>a+b);
          //If negative number is given return
        }else{
          
          return 0;
        }
      }
        
        else{
    
          return 0;
    
        }
    
      }