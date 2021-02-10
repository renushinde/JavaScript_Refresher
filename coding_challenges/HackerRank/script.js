// Print vowels and consonents 
function vowelsAndConsonants(s) {
    let consonents = [];
    for (let i =0; i < s.length; i ++) {
        if("aeiou".includes(s[i])) {
            console.log(s[i]);
        }
     else {
        consonents += (s[i]) + '\n';
       // console.log(s[i]);
    }
    }
    console.log(consonents);
}

vowelsAndConsonants("javascriptloops");

// Prob 2 -
 function areaOfRectangle (length, width) {
        let area =  length * width; 
        let perimeter = 2 * (length + width)
        return area;
 }
console.log( "The area of a rectangle is : " + areaOfRectangle( 5 , 5));

// Prob 3 - Factorial

function factorial (num) {
    if ( num === 0 || num === 1) {
        return 1;
    } else {
        return num * (factorial(num - 1 ));
    }

}
console.log("The factorial is " + factorial(4));

// prob 4 - Calculate area and perimeter of a circle

function calculateAreaOfCircle (radius) {
    const PI = Math.PI;
    let area = PI * radius* radius;
    return area;
}
console.log(calculateAreaOfCircle (2.6));