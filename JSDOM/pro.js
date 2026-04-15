let user = document.getElementById("name");
let clean= document.getElementById("cleanname");
let characters= document.getElementById("numberofcharacters");
let oletter= document.getElementById("firstletter");
let tletter= document.getElementById("lastletter");
let button= document.getElementById("submit");

button.onclick = function() {
    let trimmedName = user.value.trim().toLowerCase();
    clean.innerText = trimmedName;
    characters.innerText = trimmedName.length;
    oletter.innerText = trimmedName.charAt(0);
    tletter.innerText = trimmedName.charAt(trimmedName.length - 1);
}
