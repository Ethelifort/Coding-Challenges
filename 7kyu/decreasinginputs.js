/* Problem

This kata is all about adding numbers.
You will create a function named add. It will return the sum of all the arguments. Sounds easy, doesn't it?

Well Here's the Twist. The inputs will gradually decrease with their index as parameter to the function.

  add(3,4,6); 
  returns ( 3 / 1 ) + ( 4 / 2 ) + ( 6 / 3 ) = 7

Remember the function will return 0 if no arguments are passed and it must round the result if sum 


  */
 
function add() {
       
    const args = Array.prototype.slice.call(arguments);
  
    let total = 0;
    if(args.length<1) return 0;
  
  for(let i = 0;i<args.length;i++){
    total = total + args[i] / (args.indexOf(args[i]) + 1);
  }
  
  if (Number.isInteger(total)){
    return Math.floor(total);
  } else{ 
    return  Math.ceil(total)
  }
  
  }
        
  //Test
  console.log(add(4, -3, -2), 2)
  console.log(add(100, 200, 300), 300)