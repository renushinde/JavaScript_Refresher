//alert ("Hello");
// 1. Write a function called stringIndexOf, which accepts two strings: the first is a word and the second is a single character.The function should return the first index in the word at which the character exists or -1 if the character is not found.

function stringIndexOf (word, char) {
    for (let i = 0; i < word.length; i ++) {
      if (word[i] === char) return i;
    }
    return -1;
  }
  
  console.log(stringIndexOf ("awesome", "z"));