//console.log("connected!")
document.getElementById("output").style.visibility = "hidden";
const inputNumber = document.getElementById("num");
inputNumber.addEventListener('input', function(e){
    document.getElementById("output").style.visibility = "visible";
    let userNum = inputNumber.value;
    let numInKg = Math.round(userNum / 2.2046);
    let numInGram =Math.floor( userNum / 0.0022046);
    let numInOz = Math.ceil(userNum * 16);
   document.getElementById("group1").innerHTML += numInKg;
   document.getElementById("group2").innerHTML += numInGram;
   document.getElementById("group3").innerHTML += numInOz;
   
});