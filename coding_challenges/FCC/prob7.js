// repeat a string
function repeatStringNumTimes(str, num) {
   let newStr = "";
   for (let i = 0; i < num; i ++) {
        newStr = str.repeat(num); // ES6
        newStr += str;
   }
   return newStr;
  }
  
  console.log(repeatStringNumTimes("abc", 3));