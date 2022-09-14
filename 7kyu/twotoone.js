/* Problem
Take 2 strings s1 and s2 including only letters from a to z.
Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
*/
function longest(s1, s2) {
    let addedString = s1 + s2;
    let splitString =  addedString.split("");
    let filteredArr = splitString.filter((item,index) => splitString.indexOf(item) === index);
    let newString = filteredArr.join("").split("");
    return newString.sort().join("");
}

//Tests
console.log((longest("aretheyhere", "yestheyarehere"), "aehrsty"))