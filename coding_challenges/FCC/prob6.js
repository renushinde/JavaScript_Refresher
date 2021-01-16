// confirm the ending

 function confirmEnding(str, target) {
    let newStr = '';
  
    newStr = str.slice(str.length - target.length);
    console.log(newStr);
  
    return newStr === target;
  
  }
  
 console.log(confirmEnding("Bastian", "ian"));