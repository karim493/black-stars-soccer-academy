document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("registrationForm");

if(form){
form.addEventListener("submit", function(e){
e.preventDefault();

let parent = document.getElementById("parentName").value;
let phone = document.getElementById("phone").value;
let player = document.getElementById("playerName").value;
let age = document.getElementById("age").value;
let group = document.getElementById("program").value;

let message = `Hello Black Stars Soccer Academy.

I want to register a player.

Parent Name: ${parent}
Phone: ${phone}
Player Name: ${player}
Age: ${age}
Category: ${group}`;

window.open(
"https://wa.me/256705318174?text=" + encodeURIComponent(message),
"_blank"
);
});
}
