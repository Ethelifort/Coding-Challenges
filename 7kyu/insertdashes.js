/* Problem

Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num.
For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.
 
 */

 /* Notes
  Number as arg
  If a num is odd and the umber next to it is odd place a dash in between.
 */


  function insertDash(num) {
  
    let arr = [];
    let number = num.toString().split("").map(Number);
    
    for(let i = 0; i<number.length;i++){
          arr.push(number[i]);
    
         if(number[i] % 2 !== 0 && number[i + 1] % 2 !== 0 && number[i+1] !== undefined){
                  arr.push("-");
          }
    }
    return arr.join("");
    
     }
      
//Test
console.log(insertDash(454793),'4547-9-3')
console.log(insertDash(123456),'123456')