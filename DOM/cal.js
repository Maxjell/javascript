function add(){
  let firstnumber = Number(document.querySelector("#numA").value);
  let secondnumber = Number(document.querySelector("#numB").value);
  let result = firstnumber + secondnumber;
  document.querySelector("#ans").innerText = result;
}

function subtract(){
  let firstnumber = Number(document.querySelector("#numA").value);
  let secondnumber = Number(document.querySelector("#numB").value);
  let result = firstnumber - secondnumber;
  document.querySelector("#ans").innerText = result;
}

function mul(){
  let firstnumber = Number(document.querySelector("#numA").value);
  let secondnumber = Number(document.querySelector("#numB").value);
  let result = firstnumber * secondnumber;
  document.querySelector("#ans").innerText = result;
}

function div(){
  let firstnumber = Number(document.querySelector("#numA").value);
  let secondnumber = Number(document.querySelector("#numB").value);
  let result = firstnumber / secondnumber;
  document.querySelector("#ans").innerText = result;
}

function main(){
  let symbol = document.querySelector("#symbol").value;
  if(symbol==="+"){
    add();
  } else if(symbol==="*"){
    mul();
  } else if(symbol==="-"){
    subtract();
  } else if(symbol==="/"){
    div();
  } else {
    document.querySelector("#ans").innerText = `${symbol} not recognized`;
  }
}
