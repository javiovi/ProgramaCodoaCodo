let formulario = document.getElementById("formulario")
let valorDelInput = document.getElementById("personaje");
let resultado = document.getElementById("resultado");
let imagen = document.getElementById("imagen");



const fetchPersonaje = (personaje) => {


  return  fetch (`https://rickandmortyapi.com/api/character/?name=${personaje}`)
   .then(response => response.json)
   .catch(error => console.log(error))


}

formulario.addEventListener("submit",async function(evento){
evento.preventDefault();

let.personaje = valorDelInput.value


let infoApi = await fetchPersonaje(personaje) ;

if(infoApi) 
{
   imagen.src = infoApi.results[0].image;
   resultado.innerHTML = infoApi.results[0].name;

 }

})





