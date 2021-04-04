// Old way
function add(a, b) {
    return a + b;
}

console.log(add(4)); // will get NaN error

// Here, I've created a simple function add that will add 2 numbers a and b.
// If, we execute the function without passing the second param, we get NaN.

// Before, defalt params were introduced we've to do something like this - 

function add (a, b) {
    b = typeof b !== 'undefined' ? b : 2;
    return a * b;
}
console.log("Passing the defalut value ", add(4));
// Now, we try to execute function without passing the value of b,
// b will get the default value of 2 and the function will run.


function add (a, b = 2) {
    return a + b;
}

// Spread Operator 

const nums = [ 9, 3, 2, 8];
Math.max(nums); //NaN 
// Here max is expecting seperate arguments, each one being a number. 
// That's why we get NaN. 

// SPREAD TO THE RESCUE

Math.max(...nums); // with the ... syntax entire array is going to be spread out into seperate arguments.


// SPREAD with arrays

const primaryColors = ['red', 'green', 'blue'];
const secondaryColors = ['purple', 'pink', 'crimson'];

// spread allows us to spread in iterable like an array into a new array.
const allColors = [...primaryColors, ...secondaryColors];
console.log("Result of concatening primaryColors and secondaryColors ", allColors); // Array(6) 

console.log(['orange', ...secondaryColors]); // orange gets added at the beginning of secondaryColors array.

console.log([...primaryColors, ...secondaryColors, 'white', 'black']); // white and black are added at the end.

// spread with Objects

const personA = {
    name: "Renu"
    
}

const personB = {
    lastName:"Pujari"
}

const family = {...personA, ...personB, isCool:true}; 
console.log(family); // Here, the properties of personA and personB are copied into family object. 
//We can even add a new property to this object.

// ARGUMENTS OBJECT

function sum (){
    console.log(arguments); // arguments object is automatically going to collect all arguments passed to the function.
    }
console.log(sum(2,3,4,5,6)); // It contains all of the values in an order.


// Can't use array methods like reduce.

function sum() {
    return arguments.reduce((total, el) => total + el);
} // arguments.reduce is not a function


// REST params

function sum (...nums) {
    return nums.reduce((total, el) => total + el);
}

// Another example

function sumOfAllArray (...arr) {
    let total = 0;
    for (let i of arr) total +=i;
    return total;
}

console.log("The sum of array is: ", sumOfAllArray(3,4,5));  // 12

// ARRAY DESTRUCTURING

let numbers = [6, 5, 4, 3]; 

// Here, I want to single out max and second Max number.
// old way of doing it-
// let max = numbers[0];
// let secondMax = numbers[1];

const [max, secondMax, ...lowerNumbers] = numbers;

console.log(max); // Here max is holding the value of numbers[0];
console.log(secondMax); // 5
console.log(lowerNumbers); // We've used spread to singling out the remaining values [4,3]
console.log(numbers); // numbers is unchanged.


// OBJECT DESTRUCTURING
