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
