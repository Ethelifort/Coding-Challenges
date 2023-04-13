/* Problem
Write a function feast that takes the animal's name and
 dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
 /* Notes
 */

 function feast(beast, dish) {
    return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);
    }
    
    //Tests
  
  console.log((feast("great blue heron", "garlic naan"), true));
  console.log((feast("chickadee", "chocolate cake"),true))