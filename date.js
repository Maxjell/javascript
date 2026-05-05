const form = document.querySelector('.reg');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const dateInput = document.getElementById('date');
const passInput = document.getElementById('pass');
const nameDisplay = document.getElementById('nam');
const emailDisplay = document.getElementById('ema');
const dateDisplay = document.getElementById('dat');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = nameInput.value;
    const email = emailInput.value;
    const date = dateInput.value;
    const password = passInput.value;
    nameDisplay.textContent = 'Name: ' + name;
    emailDisplay.textContent = 'Email: ' + email;
    dateDisplay.textContent = 'Date of Birth: ' + date;
    form.reset();
});