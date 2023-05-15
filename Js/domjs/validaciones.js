window.addEventListener('load',function() {
    let formulario = document.querySelector('form'); //selecciono formulario

    formulario.addEventListener('submit', function (event) {

        event.preventDefault(); //evito que se envie el formulario

        let nombre = document.getElementById('nombre').value;

        console.log(nombre);

        let apellido = document.getElementById('apellido').value;

        console.log(apellido);

//obtengo valor nopmbre y apellido

document.getElementById("resultado").textContent = "Hola" + {nombre}
${apellido};
  

    })

});