/* Problem
Create a function called _if which takes 3 arguments: a boolean value bool and 2 functions (which do not take any parameters): func1 and func2
When bool is truth-ish, func1 should be called, otherwise call the func2.

Example:
*/

function _if(bool, func1 , func2) {
    if(bool){
      func1();
    } else{
      func2();
    }
    }
  
  
    function func1(){
      console.log("Func");
    }
    function bool(){
      console.log("Bool");
    }
    function func2(){
      console.log("Func2");
    }
  
  
  //Tests
  console.log(_if(true,false,true));