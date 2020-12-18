/* Part 1
1. Create the following variables
name, which is a string set to your current name
dayOfBirth, which is a number set to the day of your birth month

2. See what happens when you have multiple variables of the same name. Which one takes precedence?

3. Write some JavaScript that prompt's the user for their favorite color. Once the user has submitted a favorite color, log that color to the console along with a friendly message.

4.Create a string that contains both single quotes and double quotes.
What is the difference between null and undefined?
What is NaN in JavaScript? What is the typeof NaN?
You can declare a variable by typing let thing;. What is the value of thing? 

let name = "Renu";
name = "Pipu";
let favoriteColor = prompt ("What is your favorite color?"); 

console.log ("You are " + name + " and your favorite color is " + favoriteColor);
let dayOfBirth = 10; 
let doubleQuote = "You are so kind!!!";
let singleQuote = 'you are great';
console.log(doubleQuote);
console.log(singleQuote); */

/* Part 2 - Boolean logic

write an if statement that console.log's "Over 0.5" if Math.random returns a number greater than 0.5. Otherwise console.log "Under 0.5".
*/

if (Math.random() >= 0.5) {
    console.log(Math.random()+ "is" + "Over 0.5");

} else {
    console.log("under 0.5");
}


/* Part 3 - Array 
Create an array of your favorite foods (call it favoriteFoods). Make sure it has at least three elements.
Access the second element in favoriteFoods.
Change the last element in favoriteFoods to some other food.
Remove the first element in favoriteFoods and store it in a variable called formerFavoriteFood.
Add a favorite food to the back of the favoriteFoods array.
Add a favorite food to the front of the favoriteFoods array.
What happens when you try to pop from an empty array?
In the examples below, use splice to convert the first array to the second array:
[2, 3, 4, 5] -> [2, 4, 5]
["alpha", "gamma", "delta"] -> ["alpha", "beta", "gamma", "delta"]
[10,-10,-5,-3,2,1] -> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
*/

let favoriteFoods = ["Pizza", "Paratha", "Tea"];
console.log (favoriteFoods);

console.log("The second element is " + favoriteFoods[1]);
favoriteFoods[2] ="Pilaf";
console.log(favoriteFoods);

let formerFavoriteFood = favoriteFoods.shift();
console.log("The removed first element is " + formerFavoriteFood);

favoriteFoods.push("Mangoes");
console.log("New element added to the end of the array " + favoriteFoods);

favoriteFoods.unshift("Bread");
console.log("New element added to the beginning of the array " + favoriteFoods);

let arr1 = [2,3,4,5];
arr1.splice(1,1);
console.log("Spliced array is " + arr1);

let arr2 = ["alpha ", "gamma ", "delta "];
arr2.splice(1,0,"beta ");
console.log("Spliced array is " + arr2);

let arr3 = [10,-10,-5,-3,2,1];
arr3.splice(1, 3, 9,8,7,6,5,4,3);
console.log("spliced array is " + arr3);


/* Part 4
*/

// Create an empty array called arr.
let arr =[];

//Add your first name to the arr variable
arr.unshift("Renu ");
console.log("first name is " + arr);

// Add your last name to the end of the arr variable

arr.push("Shinde ");
console.log("Last name is " + arr);

//Add your favorite color to the beginning of the arr variable
arr.unshift("pink ");
console.log("Addded favorite color " + arr);

//Remove the favorite color from the arr variable
arr.shift();
console.log("After removing favorite color " + arr);

//Create another array called arr2.
let arr5 = [];

//Add your favorite number to arr2
arr5.unshift(2);
console.log(arr5);

//Add the string "JavaScript" to the end of the arr2 variable
arr5.push("JavaScript");
console.log(arr5);

// See if the value 42 exists in the arr5 array

console.log(arr5.indexOf(42));


//Create a new variable called combinedArr which is the result of your arr and arr2 variables combined into one array.

let combinedArr = arr.concat(arr5);
console.log("The combined array is: " + combinedArr);


//Complete the following, starting from the following array: let arr = ["JavaScript", "Python", "Ruby", "Java"]

let arr6 = ["JavaScript", "Python", "Ruby", "Java"];

// Return the following array: ["Python", "Ruby"].

console.log ("Splice- Removed value: " + arr6.splice(1,2).concat("Haskell" , "Clojure"));
console.log("The array6 is: " + arr6);

//Return the string "JavaScript, Python, Ruby, Java".
console.log(arr6.join(" "));

