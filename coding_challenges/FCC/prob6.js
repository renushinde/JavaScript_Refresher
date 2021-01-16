// confirm the ending

function confirmEnding(str, target) {
    let lastLetter = str[str.length-1];
    if (lastLetter === target.length) {
        return true;
    } else {
        return false;
    }
}
 console.log(confirmEnding("Bastian", "n"));