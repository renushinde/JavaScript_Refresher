//alert("connected!");

const userinfo = document.getElementById("userinfo");
const container = document.getElementById("container");
//console.log(userinfo);
//console.log(container);
userinfo.addEventListener('submit', function(e){
    e.preventDefault();
    const firstname = document.querySelectorAll("input")[0].value;
    const lastname = document.querySelectorAll("input")[1].value;
    /* console.log(`${firstname}, ${lastname}`); */
});