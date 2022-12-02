/* Problem
Return a string like "This white dog has 4 legs." given an object.
*/

function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
  }
  
  
    
  //Tests
  console.log((animal({name:"dog",legs:4,color:"white"})));
  