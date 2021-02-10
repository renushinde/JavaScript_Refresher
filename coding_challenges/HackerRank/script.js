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