/* Problem
You will be given an array and a limit value.
 You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
*/
function smallEnough(a, limit){
    a.sort((a,b)=>b-a);
    let result = a[0] < limit || a[0] == limit? true: false
    return result;
  }
  //Tests
  console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))
    