//console.log("Hello");
let headerText = document.getElementById("header-title");
/* let button = document.getElementById("button").addEventListener("click", buttonClick); */
function buttonClick(event) {
    /* headerText.style.color = "red"; */
    console.log(event.target);
    console.log(event.target.id);
    console.log(event.type);
    console.log(event.clientX);// This is from the window
    console.log(event.offsetX); // This is from the element
}

// Event Types
let button = document.getElementById("button").addEventListener("click", runEvent);
function runEvent(e) {
   console.log("The type of event is: ", e.type);
}
