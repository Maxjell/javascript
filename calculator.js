let radius ;
const PI = 3.14 ;

document.getElementById(`submit`).onclick = function(){
 radius = document.getElementById(`input`).value;
 document.getElementById(`hw`).textContent =`Circumference is ${radius * PI}`
}