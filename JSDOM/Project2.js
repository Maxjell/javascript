let sent = document.getElementById("sentence");
let phrase = document.getElementById("phrase");
let button = document.getElementById("btn");
let word2 = document.getElementById("text");
button.onclick = function() {
    let cleansent = sent.value.toLowerCase(); 
    let cleanword2 = phrase.value.toLowerCase();
    if (cleansent.includes(cleanword2)) {
        word2.innerText = "Your word exists";
    } else {
        word2.innerText = "Your word does not exist";
    }
}