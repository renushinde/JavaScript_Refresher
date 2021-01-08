// Factorialize a Number
function factorialize (n) {
    if ( n === 0) {
        return 1;
    } else { 
        let result = 1; 
        for ( let i =1; i <= n; i ++) {
            result *= i ;
        }
        return result;
    }
}

console.log(`The factorial is: ${factorialize(5)}`);