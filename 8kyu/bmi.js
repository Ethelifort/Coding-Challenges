/* Problem
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"*/

// complete the function
function bmi(weight, height) {
    let bmi = (weight/Math.pow(height,2));
    if(bmi <= 18.5){
      return "UnderWeight";
    }
      if(bmi <= 25.0){
      return "Normal";
    }
      if(bmi <= 30){
      return "OverWeight";
    }
      if(bmi > 30 ){
      return "Obese";
    }
    }
  //Tests
  
  console.log(bmi(115,1.80))