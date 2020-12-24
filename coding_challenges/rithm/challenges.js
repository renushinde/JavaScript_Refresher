//alert ("Hello");
// 1. Write a function called stringIndexOf, which accepts two strings: the first is a word and the second is a single character.The function should return the first index in the word at which the character exists or -1 if the character is not found.

function stringIndexOf (word, char) {
    for (let i = 0; i < word.length; i ++) {
      if (word[i] === char) return i;
    }
    return -1;
  }
  
  console.log(stringIndexOf ("awesome", "z"));



// Last Index Of ==>> Descending for loop

function stringLastIndexOf(word, char) {
    for (let i = word.length - 1; i >= 0; i--) {
      if (word[i] === char) return i;
    }
    return -1;
  }
  
  stringLastIndexOf ("awesome", "e");

  // Write a function called repeat, which accepts a string and a number and returns a new string with the string repeated that number of times.

  function repeat(str, num) {

    var newStr = '';  // string we will build up
  
    for (let i = 0; i < num; i++) {
      // note that this creates a new string every iteration of the loop
      //  because JavaScript strings are immutable
      newStr += str;
    }
  
    return newStr;
  }


  // Write a function called removeFromString, which accepts a string, a starting index (number) and a number of characters to remove. The function should return a new string with the characters removed. 

  function removeFromString(str, startIndex, numCharToRemove) {
    let arr = str.split('');
    arr.splice(startIndex, numCharToRemove);
    return arr.join('');
  }
 console.log (removeFromString('Elie', 0, 1));
 console.log( removeFromString('Elie', 2, 2));


 // Another way

 function removeFromString(str, start, removeCount) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
      if (i < start || i >= start + removeCount) {
        newStr += str[i];
      }
    }
    return newStr;
  }
  
  console.log (removeFromString('Elie', 0, 1));
  console.log( removeFromString('Elie', 2, 2));