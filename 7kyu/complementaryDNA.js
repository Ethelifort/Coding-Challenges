/* Problem
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
*/
function DNAStrand(dna){

    let result = '';
    
    for(i = 0; i <= dna.length;i++){
      if(dna[i] == 'A'){
        result = result + 'T';
      }
       else if(dna[i] == 'T'){
        result = result + 'A';
      }
      else if(dna[i] == 'C'){
        result = result + 'G';
      }
      else if(dna[i] == 'G'){
        result = result + 'C';
    
      }
    } 
    return result;
    }
    
    //Tests
    console.log((DNAStrand("ATCG")));