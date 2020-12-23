//alert("Hello!!!");
let people = ["Greg", "Mary", "Devon", "James"];

// 1.Using a loop, iterate through this array and console.log all of the people.

for(let i=0; i<people.length; i++) {
    console.log(people[i]);
}

// 2. Write the command to remove "Greg" from the array.

console.log(people.shift());

//3. Write the command to remove "James" from the array.

console.log(people.pop());

//4. Write the command to add "Matt" to the front of the array.

people.unshift("Matt");
console.log(people);

//5. Write the command to add your name to the end of the array.

people.push("Renu");
console.log(people);

//6.Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.

for (let i=0; i<people.length; i++) {
    if (people[i] === "Mary") {
        console.log("Breaking out of the loop when i is " + people[i]);
    break;
} else {
    console.log (people[i]);
}
}

// 7. Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".

console.log("copy without" + people.slice(2));
// 8. Write the command that gives the indexOf where "Mary" is located.

for (let i=0; i<people.length; i++) {
    console.log(people.indexOf("Mary"));
}

//9. Write the command that gives the indexOf where "Foo" is located (this should return -1).

for (let i=0; i<people.length; i++) {
    console.log(people.indexOf("Foo"));
}

//10. Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].

let people2  = ["Greg", "Mary", "Devon", "James"];
console.log(people2.splice(2,1, "Elizabeth", "Artie"));
console.log(people2);

// 11.Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".

let withBob = people.concat("Bob");
console.log(withBob);

