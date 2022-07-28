//Merge two arrays then sort them in numerical order.

function mergeArrays(arr1, arr2) {
    //Concat arr method merges two arrays
  
    let newArray = arr1.concat(arr2);
    //.Sort Method to sort array in acending order.
    newArray.sort((a,b)=> a-b)
  
  //Removes Duplicates Function
    function removeDuplicates(newArray) {
      return [...new Set(newArray)];
  }
  
    return removeDuplicates(newArray);
  
  }