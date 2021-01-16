// Truncate a string
function truncateString(str, num) {
    if(str.length <= num) return str;
   let newStr = str.slice(0, num) + "...";
   
   return newStr;
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

  // first, 