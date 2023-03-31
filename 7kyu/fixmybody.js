/* Problem

  Save the animals by switching them back. You will be given an array which will have three values (tail, body, head).
  It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

 */

 /* Notes
    Fix the order and keep the same logic.
 */

    function fixTheMeerkat(arr) {

        return arr.reverse();
    
      }
    //Test
    console.log(fixTheMeerkat(["tail", "body", "head"]),["head", "body", "tail"])
    console.log(fixTheMeerkat(["tails", "body", "heads"]), ["heads", "body", "tails"])
    console.log(fixTheMeerkat(["bottom", "middle", "top"]), ["top", "middle", "bottom"])
    