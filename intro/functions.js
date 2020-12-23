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
    let randomIndex =Math.floor( Math.random() * favoriteFoods.length);
    console.log(favoriteFoods[randomIndex]);
} 
console.log(randomFood());

// Create a variable called numbers which is an array that contains the numbers 1 through 10.

let numbers = [1,2,3,4,5,6,7,8,9,10];

// Write a function called displayOddNumbers which iterates over the numbers array and console.logs out all of the numbers that are odd.

function displayOddNumbers () {
    for (let i = 0; i < numbers.length; i ++) {
        if (numbers[i] % 2 !== 0) {
           console.log(numbers[i]);
        }
    }
}
console.log(displayOddNumbers(numbers));

// Write a function called displayEvenNumbers which iterates over the numbers array and console.logs out all of the numbers that are even.

function displayEvenNumbers () {
    for (let i=0; i<numbers.length; i++) {
        if (numbers[i] %2 === 0) {
            console.log(numbers[i]);
        }
    }
}

console.log (displayEvenNumbers(numbers));

// Create a function called returnFirstOddNumber which iterates over the numbers array and returns the first odd number it finds

function returnFirstOddNumber () {
    for (let i = 0; i < numbers.length; i ++) {
        if (numbers[i] % 2 !== 0) {
           return(numbers[i]);
        }
    }

}

console.log(returnFirstOddNumber(numbers));

// Create a function called returnFirstEvenNumber which iterates over the numbers array and returns the first even number it finds

function returnFirstEvenNumber () {
    for (let i = 0; i < numbers.length; i ++) {
        if (numbers[i] % 2 === 0) {
           return(numbers[i]);
        }
    }

}

console.log(returnFirstEvenNumber(numbers));

// Create a function called returnFirstHalf which returns the first half of the numbers array

function returnFirstHalf () {
    for (let i = 0; i < numbers.length; i ++) {
        return numbers.slice(0,numbers.length/2);
    }

}

console.log(returnFirstHalf(numbers));

//Create a function called returnSecondHalf which returns the second half of the numbers array

function returnSecondHalf () {
    for (let i=0; i<numbers.length; i++) {
        return numbers.slice(numbers.length/2);
    }

}

console.log(returnSecondHalf(numbers));