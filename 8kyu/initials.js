/* Problem
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
*/

function abbrevName(name){

    let nameArr = name.split(" ");
    for(i=0;i<nameArr.length;i++){
    return nameArr[0].slice(0,1).toUpperCase() + "." + nameArr[1].slice(0,1).toUpperCase();
    
        }
        }
    //Tests
    console.log(abbrevName("Sam Harris"), "S.H")