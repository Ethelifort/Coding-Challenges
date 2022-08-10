/* Problem
Check to see if a string has the same amount of 'x's and 'o's.
 The method must return a boolean and be case insensitive. The string can contain any char.*/

//My Solution


function XO(str) {
    //Variables to count the number of x's or o's
    let amountOf_o = 0; 
    let amountOf_x = 0;
    //Loop through each letter
    for (var i = 0; i < str.length; i++) { 
        if (str[i].toLowerCase() === "x") {
            amountOf_x++;// Increment counter
        } else if (str[i].toLowerCase() === "o") {
            amountOf_o++; //Increment counter
        }
    }
    return amountOf_x === amountOf_o;
}
  


//Tests(XO('xoxo'),true); //Should return true.