/* Problem
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
*/

var summation = function (num) {
    return num * (num + 1) / 2
}

//Tests

console.log(summation(8), 36);