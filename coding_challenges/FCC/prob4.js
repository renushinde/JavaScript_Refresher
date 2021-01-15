// Longest word in a string

function findLongestWordLength(str) {
    let total = "";
    let strArr = str.split(" ");
    console.log(strArr);
    for (let i = 0; i < strArr.length; i ++) {
        if (strArr[i].length > total.length) {
            total = strArr[i];
        }
    }
    return total.length;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));