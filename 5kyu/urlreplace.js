/* Problem
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
url = "http://github.com/carbonfive/
*/

// complete the function
function domainName(url){
    if(url.split("/")[0] == 'codewars'){
      return 'codewars';
    }
    return url.replace("www.",'').replace(".com",'').replace("http://",'').replace("https://",'').split(".")[0];
  }
  
  //Tests
  console.log((domainName("www.xakep.ru"), "xakep"))
  console.log(domainName("http://google.com"), "google")
  console.log(domainName("codewars/kata/"));
  console.log(domainName("http://google.co.jp"))