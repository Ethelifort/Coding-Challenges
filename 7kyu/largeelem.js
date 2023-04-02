/* Problem
  Write a program that outputs the top n elements from a list.
 */

 /* Notes
  Built it sort is messy.
 */


  function doTest(n,arr){

    arr.sort((a, b) => {
      return b-a;
    });
  
    return arr.slice(0,n).reverse()  
  }
  
  
  //Test
  console.log(doTest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [9, 10]));
  console.log(doTest(0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], []));
  console.log(doTest(2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5], [-1, 0]));