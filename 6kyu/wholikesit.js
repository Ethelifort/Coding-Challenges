/* Problem

You probably know the "like" system from Facebook and other pages.
People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item.
It must return the display text as shown in the examples:

*/
function likes(names) {
  
    if (names === undefined || names.length == 0){
      return "no one likes this";
      }
  
    for (i = 0;i<names.length;i++){
    if(names.length == 1){
    return names[i] +  " likes this";
  }
  
  else if(names.length == 2){
    return names[i] + " and " + names[i+1] +" like this";
  }
  
  else if(names.length == 3){
    return names[i] + ", " + names[i+1] +" and "+ names[i+2]+" like this";
  
  }
  
  else if(names.length >= 4){
    let ottherPeople = names.length -2;
     return names[i] + ", " + names[i+1] + " and " +ottherPeople+ " others like this";
  
  }
  }
  }
  //Tests
  
  console.log(likes([]));
  
  