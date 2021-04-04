/* 
const userinfo = document.getElementById("userinfo");
const container = document.getElementById("container");

userinfo.addEventListener('submit', function(e){
    e.preventDefault();
    const firstname = document.querySelectorAll("input")[0].value;
    const lastname = document.querySelectorAll("input")[1].value;
    const newname = document.createElement("li");
    newname.append(`${firstname} - ${lastname}`);
   container.append(newname);
});
 */

// Let's select all the elements first
const container = document.getElementById("list");
shoppingList.addEventListener("submit", function(e){
    e.preventDefault();
let productText = document.querySelectorAll("input")[0].value;
let quantityNum = document.querySelectorAll("input")[1].value;
const newname = document.createElement("li");
newname.append(` ${quantityNum} ${productText} `);
container.append(newname);
});