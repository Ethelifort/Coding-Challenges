//Problem.
//Given an array/list [] of integers ,
// Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].



function productArray(numbers){

    const totalProduct = numbers.reduce((acc, curr) => acc * curr, 1);
    const products = numbers.map(num => totalProduct / num);

    return products;
  }


  console.log(productArray([3,27,4,2]),"[216,24,162,324]")