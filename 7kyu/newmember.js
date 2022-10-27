/* Problem
The Western Suburbs Croquet Club has two categories of membership, Senior and Open.
They would like your help with an application form that will tell prospective members which category they will be placed.
*/

function openOrSenior(data){
    //The data thats coming in is an array.
    //I have to check it's two arguments.
    
      let arr = [];
      if(data.length>0){
      for(i = 0; i<=data.length; i++){
        for(j=0;j<data.length;j++){
          if(data[j][0] >= 55 && data[j][1] > 7){
            arr.push("Senior");
          } else{
            arr.push("Open");
          } 
          if(arr.length == data.length){
            return arr;
          }
        }
      }
    }else{
      return [];
    }
    }
  //Tests
  console.log(openOrSenior([[54,18],[73,17],[68,7],[65,4],[58,3]]));