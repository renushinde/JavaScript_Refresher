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

// REST OPERATOR

