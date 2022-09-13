/* Problem
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
*/

function invert(array) {

    let newArr = array.map((a)=>{
        if(a>0){ 
            return -a;
        } else {
            return a * -1;
        }
    })   
    return newArr;
     }
    //Tests
    console.log(invert([1,-2,3,-4,5]), [-1,-2,-3,-4,-5])