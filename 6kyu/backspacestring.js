/* Problem
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
Your task is to process a string with "#" symbols.
*/


function cleanString(s) {

  let arr = [];

  let splitString =  s.split("");

  for (i =0; i<splitString.length; i++){


    if(splitString[i] == '#'){

      arr.pop();
  
    } else{

      arr.push(splitString[i]);
    }
}

  return arr.join("");
}

//Tests

cleanString('abc#d##c');

