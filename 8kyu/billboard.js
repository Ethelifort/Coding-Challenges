function billboard(name, price = 30){
    let cost = 0;
    for(i = 0; i<name.length;i++){
      cost = cost + price;
    }
    return cost;
  } 
  
  //Tests
  console.log(billboard("Paolo Oli"), 270);