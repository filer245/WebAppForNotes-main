const ul = document.getElementById("content");
var notas = 0;
var accionSubir = document.createTextNode("Escribe tu nota");
var accionEditar = document.createTextNode("Edita tu nota");
var divt = document.getElementById("accion");
var botonsubir = document.createElement("button");
var botoneditar = document.createElement("button");
var contenedorBotones = document.getElementById("formulario");
var h2 = document.createElement("h2");

botonsubir.style.width = "270px";
botonsubir.style.borderRadius = "30px";
botonsubir.style.border = "5px solid black";
botonsubir.style.height = "50px";
botonsubir.style.fontSize = "30px";
botonsubir.style.fontWeight = "bold";
botonsubir.style.backgroundColor = "#3976db";
botonsubir.innerHTML = "Subir";
botonsubir.style.display = "block";
botonsubir.onclick = subirNota;
botonsubir.style.visibility = "visible";

botoneditar.style.width = "270px";
botoneditar.style.borderRadius = "30px";
botoneditar.style.border = "5px solid black";
botoneditar.style.height = "50px";
botoneditar.style.fontSize = "30px";
botoneditar.style.fontWeight = "bold";
botoneditar.style.backgroundColor = "#3976db";
botoneditar.innerHTML = "Editar";
botoneditar.style.display = "block";
botoneditar.style.visibility = "hidden";

contenedorBotones.appendChild(botonsubir);
contenedorBotones.appendChild(botoneditar);

h2.appendChild(accionSubir);
divt.appendChild(h2);

function subirNota() {
  var li = document.createElement("li");
  var buttonb = document.createElement("button");
  var buttone = document.createElement("button");
  var divb = document.createElement("div");
  var nota = document.createTextNode(document.getElementById("txt").value);

  if (nota.wholeText.replace(/\s+/g, "") !== "") {
    notas += 1;

    li.id = notas;
    li.appendChild(nota);

    divb.style.display = "block";
    divb.style.margin = "5px";

    buttonb.style.padding = "5px";
    buttonb.style.border = "3px solid black";
    buttonb.style.borderRadius = "10px";
    buttonb.style.fontWeight = "Bold";
    buttonb.style.backgroundColor = "red";
    buttonb.style.margin = "5px";
    buttonb.onclick = borrarNota;

    buttonb.innerHTML = "Borrar";
    divb.appendChild(buttonb);

    buttone.style.padding = "5px";
    buttone.style.border = "3px solid black";
    buttone.style.borderRadius = "10px";
    buttone.style.fontWeight = "Bold";
    buttone.style.backgroundColor = "yellowgreen";
    buttone.style.margin = "5px";
    buttone.onclick = editor;

    buttone.innerHTML = "Editar";
    divb.appendChild(buttone);

    li.appendChild(divb);
    ul.appendChild(li);

    document.getElementById("txt").value = "";
    console.log(notas);
  } else {
    alert("Debes insertar alguna nota.");
  }

  function borrarNota() {
    ul.removeChild(li);
    alert("Nota borrada con éxito");
    
  }

  function editor() {
    h2.removeChild(accionSubir);
    h2.appendChild(accionEditar);
    botoneditar.style.visibility = "visible";
    botonsubir.style.visibility = "hidden";
    botoneditar.onclick = editarNota;

    function editarNota() {
      var newnota = document.createTextNode(
        document.getElementById("txt").value
      );

      if (newnota.wholeText.replace(/\s+/g, "") !== "") {
        li.childNodes[0].data = newnota.wholeText;

        document.getElementById("txt").value = "";

        h2.removeChild(accionEditar);
        h2.appendChild(accionSubir);
        botoneditar.style.visibility = "hidden";
        botonsubir.style.visibility = "visible";
      } else {
        alert("Debes insertar alguna nota.");
      }
    }
  }
}
