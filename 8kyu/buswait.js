/* Problem
Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
*/

// complete the function
function enough(cap, on, wait) {
    if(cap >= wait + on){
      return 0;
   } else{
      return wait - cap + on;
    }
  }
  
  //Tests
  console.log(enough(100, 60, 50), 10);