function sumDigits(number) {
    if(number < 0){
    number = number * -1;
    }else if(number == 0){
      return 0;
    }
    let strNum = number.toString();
    strNum = strNum.split("");
    return strNum.reduce((a,b)=>Number(a)+ Number(b));
    }