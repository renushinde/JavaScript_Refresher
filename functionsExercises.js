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
  for (let i = 0; i < arr.length; i++) {
      return (arr[i] + arr[i+1]) /arr.length;
  }

}

console.log(average([1,4,3,4,5]));
