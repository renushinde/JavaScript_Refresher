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
 