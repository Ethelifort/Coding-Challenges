/* Problem
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your 
is to convert that string to either lowercase only or uppercase only based on:
make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
*/

function solve(s){

    let numOfLowerCase = 0;
    let numOfUpperCase = 0;

    for (i = 0; i<s.length;i++){
        
        if (s[i] == s[i].toUpperCase()){
            numOfUpperCase++;
        } else if(s[i] == s[i].toLowerCase()){
             numOfLowerCase++;
        }
    }

    if (numOfLowerCase > numOfUpperCase){
        return s.toLowerCase();

    }  else if (numOfLowerCase === numOfUpperCase){
        return s.toLowerCase();

    }else {return s.toUpperCase()}

} 
//Tests


console.log(solve("COde"));
