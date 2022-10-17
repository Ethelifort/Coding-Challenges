/* Problem
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
Use conditionals to return the proper message:
Examples
*/

// complete the function
function greet (name, owner) {
  
    if(name == owner){
      return "Hello boss"
    } else{
      return "Hello guest"
    }
  }
  //Tests
  
  console.log(greet('Greg', 'Daniel'), 'Hello guest')