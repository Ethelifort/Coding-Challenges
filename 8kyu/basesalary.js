/* Problem
If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
Return the total figure the individual will receive as a string prefix
*/


function bonusTime(salary, bonus) {
  if(bonus == true){
    let newSalary =  salary * 10;
    return "£" + newSalary;
  } else {
    return "£" + salary; 
  }
}
//Tests

console.log(bonusTime(5,true))