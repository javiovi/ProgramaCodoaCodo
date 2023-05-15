let esteEsMiDocumentoPrincipal = document;
//console.log(esteEsMiDocumentoPrincipal.document


console.log(esteEsMiDocumentoPrincipal.querySelector(".miCajita").textContent);
esteEsMiDocumentoPrincipal.querySelector(".miCajita").textContent = "Hola Mundo";

esteEsMiDocumentoPrincipal.querySelector(".miCajita").innerHTML = "<h1>Hola Mundo</h1>"; // Modifica etiqueta html

esteEsMiDocumentoPrincipal.querySelector(".dom").style.color = "red"; //cambia estilos

esteEsMiDocumentoPrincipal.querySelector("p").classList.add("parrafoNuevo") //Agrego clase, peudo desde css usarla para agregar estilos

//.remove la saca
//contain muestra si contiene esa clase

esteEsMiDocumentoPrincipal.getElementById("btn1").onclick  //accion de botn

// onmouseover cambia color cuando pasas por arriba
// onkeydown(cuando aprieto) y onkeyup(cuando suelto) te muestra los eventos que se escriben en el input


//setTimeOut temporizador, callback






