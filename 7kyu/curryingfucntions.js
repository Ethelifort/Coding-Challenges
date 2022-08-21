function multiplyAll(arr){

    function single(int){
  
      return arr.map((elem)=>elem * int);
      
    }
    return single;
  }
  //Tests
  
  console.log(multiplyAll([1, 2, 3])(2));