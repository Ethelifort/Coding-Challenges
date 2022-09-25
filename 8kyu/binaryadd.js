/* Problem
Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.
If your language can handle float binaries assume the array won't contain float or doubles.*/

function arr2bin(arr){
  
    let newArr = arr.filter((a)=> typeof(a) == 'number');
    if(newArr.length < 1 || null){
      return '0';
    }
     return newArr.reduce((a,b)=>a+b).toString(2);
    }
  
  //Tests
  console.log((arr2bin([1,2]), "11"));
  console.log(arr2bin([true,true,false,15]));
  