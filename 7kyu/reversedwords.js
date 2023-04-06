/* Problem
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
 /* Notes
 */

 function reverseWords(str) {
  let words = str.split(" ");
  let reversedWords = words.map((word) => {
    return word.split("").reverse();
  });
  return reversedWords.join(" ");
}
  //Tests

  console.log(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');