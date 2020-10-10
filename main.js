function tuEdadenDias() {
  let anioNacimiento = parseInt(prompt("En año naciste ? "));

  let edadEnDias = (2020 - anioNacimiento) * 365;
  console.log("TU edad en dias es:", edadEnDias);

  let respuesta = document.createTextNode("Tu edad en dias es: " + edadEnDias);

  let h2 = document.createElement("h2");
  h2.setAttribute("id", "edadEnDias");
  h2.appendChild(respuesta);
  document.getElementById("resultado").appendChild(h2);
}


function reiniciar() {
  document.getElementById("edadEnDias").remove();
}

