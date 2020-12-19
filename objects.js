// 1. Create an object that has your firstName, lastName, and occupation as keys.

let person = {
    firstName:"Renu",
    lastName:"Shinde",
    occupation:"Mom"
};

// 2. Access each value from your object using both dot notation and bracket notation.

console.log(person.firstName);
console.log(person["lastName"]);
console.log(person.occupation);

// 3. Add a key for hobby to your object. Remove the key and value for occupation.

person.hobby = "reading";
console.log(person);

// Looping over objects - for...in, if...in

let obj = {
    firstName: "Elie",
    lastName: "Schoppik",
    favoriteColor: "purple",
    job: "instructor",
    isDeveloper: true
};
console.log(obj.firstName);
console.log(obj.lastName);
console.log(obj.favoriteColor);

for(let key in obj) {
    console.log("Using for..in " + obj[key]);
}

// Determine if a key exist in an object use if..in

let obj1 = {
    favoriteNumber: 33,
    favoriteColor: 'blue'
}

if("favoriteColor" in obj1) {
    console.log("The favoriteColor key exists!!!");
}

if("name" in obj1) {
    console.log("The name key exists!!!");
}

// Given the following object below, write code to print the value then the key to the console separated by '=>':

let namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
}

for (let keys in namesAndHobbies) {
    console.log(keys  + "=> " + namesAndHobbies[keys] );
}

// Add a key for your name, and a value for your favorite hobby to the namesAndHobbies object.

namesAndHobbies.Renu = "reading";
console.log(namesAndHobbies);

// Write an if statement that console.logs your name and hobby to the console if the key of your name is contained in the object.

if ("Renu" in namesAndHobbies) {
    console.log("Renu", namesAndHobbies.Renu);
}

// Object Exercises

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// 1. Write the command to add the language "Go" to the end of the languages array.
console.log(programming.languages.push("Go"));
console.log(programming.languages);

// 2. Change the difficulty to the value of 7.

programming.difficulty = 7;
console.log(programming);

// 3. Using the delete keyword, write the command to remove the jokes key from the programming object.

delete programming.jokes;
console.log(programming);

// 4. Write the command to add a new key called isFun and a value of true to the programming object.

programming.isFun = true;

// 5. Using a loop, iterate through the languages array and console.log all of the languages.

for (let key in programming.languages) {
    console.log(programming.languages[key]);
}

// 6. Using a loop, console.log all of the keys in the programming object.

for (let key in programming) {
    console.log(programming[key]);
}

// 7. Using a loop, console.log all of the values in the programming object.

for (let key in programming) {
    console.log(key);
}

