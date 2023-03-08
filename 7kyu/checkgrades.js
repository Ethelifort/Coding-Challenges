/* Problem
The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
If the score < 0, return 0.
*/


function checkExam(array1, array2) {
    let score = 0;
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) { // if the answers match, add 4 points
        score += 4;
      } else if (array2[i] === "") { // if the answer is left blank, no points deducted
        continue;
      } else { // if the answer is wrong, deduct 1 point
        score -= 1;
      }
    }
    return score < 0 ? 0 : score; // return the score, but not negative
  }

  //Tests

  console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6)