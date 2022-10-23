/* Problem
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
*/
const snail = (array) =>{
    let finalArray = []
    while(array.length){
      finalArray.push(...array.shift())
      for (let i = 0; i < array.length; i++){
        finalArray.push(array[i].pop())
      }
      finalArray.push(...(array.pop() || []).reverse())
      for (let i = array.length -1; i >= 0; i--){
        finalArray.push(array[i].shift())
      }
    }
    return finalArray
  }
  //Tests
  console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4,]);