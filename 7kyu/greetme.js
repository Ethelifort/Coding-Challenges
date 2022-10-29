/* Problem
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
*/

var greet = function(name) {
  
    let lowercaseName = name.toLowerCase();
    return "Hello " + lowercaseName[0].toUpperCase() + lowercaseName.substring(1) + "!";
  
  };
  //Tests
  
  console.log(greet("ERNST"));