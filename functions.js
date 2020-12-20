// write a function that returns true if a random number is over .5 - otherwise the function should return false. 
function isOverPointFive () {
    if (Math.random() > 0.5) {
        return true;
    } 
        return false;
    
}

console.log (isOverPointFive());

// Write a function called myName that logs your full name. Save your full name to a variable inside of the function body, then use console.log to print your name to the console.

function myName () {
    return "Renu";
}

console.log(myName());

// Create an array called favoriteFoods which contains the strings "pizza" and "ice cream".

let favoriteFoods = ["Pizza", "ice cream"];

// Write a function called randomFood. The function should use Math.random to randomly choose a favorite food in your favoriteFoods array to return. 

function randomFood () {
    return Math.random(favoriteFoods.length);
} 
console.log(randomFood());

// Create a variable called numbers which is an array that contains the numbers 1 through 10.

let numbers = [1,2,3,4,5,6,7,8,9,10]