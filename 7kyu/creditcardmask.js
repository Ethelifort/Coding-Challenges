/* Problem
Your task is to write a function maskify, which changes all but the last four characters into '#'.
*/



// return masked string
function maskify(cc) {
    let visibleNum;
    let arr = [];
    
    if(cc.length > 4){
      visibleNum = cc.slice(-4);
    }
    else{
      return cc;
    }
    let hastagLength = cc.length - visibleNum.length
  
    for(i = 0; i<hastagLength;i++){
      arr.push("#");
    }
  let hastags = arr.join("");
  return hastags + visibleNum;
  }
  //Tests
  console.log(maskify('4556364607935616'), '############5616')