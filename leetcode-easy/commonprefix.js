/* Problem
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
*/
let longestCommonPrefix = function(strs) {
    
    if(strs.length<1){
        return "";
    }
    
  for(i = 0; i<= strs[0].length;i++){
    for(j = 1; j<strs.length;j++){
        if(strs[0][i] !== strs[j][i]){
            return strs[0].slice(0, i);
        }
        
    }
    
  }
    
  return strs[0];
    
  }
  
  //Tests
  console.log((longestCommonPrefix(["flower","flower","flight"])));