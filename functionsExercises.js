// 1. Make a function for add, subtract, multiply, and divide. Each of these functions should accept two parameters and return the sum, difference, product and quotient.

function multiply (a, b) {
    return a*b;

}
console.log ("The multiplication is: " + multiply(2,2)); 

function add (a,b) {
    return a+b;
}
console.log ("The addition is: " + add(2,2)); 

// 2. Write a function called sayHello that takes in a string as a parameter. If the parameter passed to the function is your first name, it should return "Hello Boss", but if the parameter passed to the function is any other name, it should return the string "Hello" and the name parameter.

function sayHello (str) {
    return "Hello " + str;
}

console.log(sayHello("Tim"));
console.log(sayHello("Janey"));

//3. Write a function called average which accepts an array as a parameter. The function should return the average of all of the numbers in the array (you can assume that the array passed to the function will contain only numbers)

function average (arr) {
  let total =0;
  for (let i=0; i<arr.length; i++) {
      total = total + arr[i];
      console.log(total);
  }
    return total/arr.length;
}

console.log(average([1,4,3,4,5]));
console.log(average([1,2,3,4,5,6]));

// 4. Write a function called extractEveryThird which accepts an array as a parameter. The function should iterate over the array and return a new array with every 3rd element in the array passed to the function.

function extractEveryThird (arr) {
    let newArr = [];
    for (let i = 2; i < arr.length; i += 3) {
        newArr.push(arr[i]);
     
    }
        return newArr;
}

console.log(extractEveryThird([1,2,3]));
console.log(extractEveryThird([1,2,9,4,5,6]));

// 5. Write a function called onlyCapitalLetters which accepts a string and returns a new string with only the capital letters passed to the string.

function onlyCapitalLetters(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i ++) {
        if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(str[i])) {
            newStr += str[i];
        }
    }
    return newStr;
}
 console.log(onlyCapitalLetters("MAmazing"));


 // Write a function called countEvensAndOdds which accepts an array as a parameter. This function should return an object with the count of even numbers and the count of odd numbers. The object returned should have the keys oddCount and evenCount.

 function countEvensAndOdds (arr) {
     let counterObject = {
        oddCount: 0,
        evenCount: 0
     }
  
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] %2 === 0) {
            counterObject.evenCount++;
        } else {
            counterObject.oddCount++;
        }
    }
  
    return counterObject;
 }

 console.log(countEvensAndOdds([1,2,3,4]));

 // Write a function called createStudent, which accepts two parameters both of which are strings. The function should return an object with the keys firstName and lastName and the values should be each of the

 function createStudent (str1, str2) {
    return {
        firstName:str1,
        lastName:str2
    }
 }

 console.log(createStudent("Renu", "Shinde"));

 //  difference this function takes in two parameters and returns the difference of the two;

 function difference (a, b) {
    return b-a;
 }

 console.log("The difference is: " + difference(2,2));

 // this function takes in two parameters and returns the product of the two;

 function product ( a, b ) {
     return a * b;
 }

 console.log("The product is: " + product(2,2));

 // this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.

 function lastElement (arr) {
   
        return arr[arr.length-1];
 }

 console.log(lastElement([1,3,4,9]));

 // this function takes in two parameters (both numbers). If the first is greater than the second, this function returns "First is greater". If the second number is greater than the first, the function returns "Second is greater". Otherwise the function returns "Numbers are equal"

 function numberCompare ( num1, num2) {
        if ( num1 > num2) {
            return "first is greater";
        } else if ( num1 < num2) {
            return "second is greater than first";
        } else {
            return "Both numbers are equal";
        }

 }

 console.log(numberCompare (2,1));
 console.log(numberCompare (1,1));
 console.log(numberCompare (2,12));

 // this function takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.
 
 function singleLetterCount (word, letter) {
    let counter = 0;
    let newWord = word.toUpperCase();
    // console.log(newWord);
    for (let i = 0; i < newWord.length; i ++) {
        if (letter.toUpperCase().includes(newWord[i])) {
            counter ++;
    }
}
    return counter;
 }

 console.log (singleLetterCount("Renu", "r"));
 console.log (singleLetterCount("Rithm School", "o"));

// this function takes in one parameter (a string) and returns an object with the keys being the letters and the values being the count of the letter.

function multipleLetterCount (str) {
    let finalObj = {};
  for(let i =0; i< str.length; i++){
    if (!(str[i] in finalObj)){
      finalObj[str[i]] = 1;
      console.log(finalObj);
    } else {
      finalObj[str[i]]++;
    }
  }
  return finalObj;
}

console.log (multipleLetterCount ("hello"));

// A Palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This function should take in one parameter and returns true or false if it is a palindrome. As a bonus, allow your function to ignore whitespace and capitalization so that isPalindrome('a man a plan a canal Panama'); returns true

function isPalindrome (word) {
    let newWord = word.toLowerCase().split("").reverse().join("");
    if (word === newWord) {
        return true;
    } else {
        return false;
    }

}

console.log(isPalindrome("rar"));