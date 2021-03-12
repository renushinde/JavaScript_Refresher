
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
