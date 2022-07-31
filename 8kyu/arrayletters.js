//Problem - Create a function that takes an array of letters, and combines them into words in a sentence.
//My  Solution

function arrAdder(arr){

    let arraySentence = [];  //Created a new empty array.
  
  //First for loop
    for(z=0;z<arr.length;z++){
  
  
     
      //Z will only run == arr.length.
      //If the end of z is reached that means were moving on to the next row.
      if(z !== arr.length){
        arraySentence.push(" ");//Push to seperate the arrays
      }
  
        //Second for
        for(i = 0; i<arr.length;i++){
  
  
        if (i <= arr.length){
         arraySentence.push(arr[i][z]); //Pushing arr into arraySentence by letter.
         completedSentence = arraySentence.join('');  //Combines arraySentence letters to create words.
  
          }
      }
  
    }
  
  if (z = arr.length){}
    return completedSentence.trim(); //Returns the completed sentence. Trim remove unessasary spaces at the end and beginning.
  
    }
  
  console.log(arrAdder([ 
    [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
    [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
    [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
    [ '', 'o', '', '', 'e', '', '', 'l' ],
    [ '', 'c', '', '', 'r', '', '', '' ],
    [ '', 'h', '', '', 'h', '', '', '' ],
    [ '', 'o', '', '', 'o', '', '', '' ],
    [ '', 'n', '', '', 'u', '', '', '' ],
    [ '', 'd', '', '', 's', '', '', '' ],
    [ '', 'r', '', '', 'e', '', '', '' ],
    [ '', 'i', '', '', '', '', '', '' ],
    [ '', 'a', '', '', '', '', '', '' ] ]));
  