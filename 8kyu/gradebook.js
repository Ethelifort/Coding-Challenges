/* Problem
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
*/

function getGrade (s1, s2, s3) {
    let average = (s1 + s2 + s3) / 3;
    
      if(average >= 90.9 && average > 89){
        return 'A';
        
      } else if (average <=89.9 && average >= 80){
        return 'B';
      }
      else if (average <=79.9 && average >= 70){
    
        return 'C';
      }
      else if (average <=69.9 && average >= 60){
        return 'D';
      }
      else {
        return 'F';
      }
    }
  //Tests
  
  console.log(getGrade(92,93,94), 'A')