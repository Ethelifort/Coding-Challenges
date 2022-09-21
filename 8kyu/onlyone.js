/* Problem
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
Array can contain numbers or strings. X can be either.
Return true if the array contains the value, false if not.*/


function check(a, x) {
    let positiveCheck = 0;
      for(i=0;i<a.length;i++){
        if(a[i] == x){
          positiveCheck++;
        } 
        }
      if(positiveCheck>1){
        return true;
      } else {
        return false;}
  }
  
  //Tests
  console.log((check([66, 101], 66)));