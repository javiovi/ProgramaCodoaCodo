/* let numeroTexto = '22';
console.log(typeof numeroTexto);
let numero = Number(numeroTexto);
console.log(typeof numero);

let numeroTexto2 = '-22.22';
let numero2 = Number(numeroTexto2);
console.log(typeof numero2);

let convertirAcadena = String(numero2);
console.log(typeof convertirAcadena);
*/
/*
let numero1 = 10;
let numero2 = 10;

let suma = numero1 + numero2;
console.log(suma);
let convertiraString = '10 ' + '10';
console.log(convertiraString);


let nombre = 'Javier';
let apellido = 'Oviedo';

let nombreCompleto = nombre + '  ' + apellido;
console.log(nombreCompleto);

// template string , interpolacion de strings,
//let nombreCompleto2 = `${nombre} ${apellido}`;
//let nombreCompleto2 = `nombre: ${nombre} y apellido: ${apellido}`;
*/

let valor1 = 10;
let valor2 = 20;

if (valor1 > valor2) {
    console.log('valor1 es MAYOR que valor2')

} else (valor1 < valor2); {
    console.log('valor 1 es MENOR que valor2');
}
 
// IF TERNARIO

let ifTernario = (valor1 < valor2) ? 'valor1 es MENOR que valor2' : 'valor1 es MAYOR que valor2';
console.log(ifTernario);

// switch es una estructura de control que nos permite evaluar una exprecion y dependiendo del rsultado ejecutar un bloque de codigo

let numero = parseInt(prompt('Ingrese un numero del 1 al 3'))

switch (numero) {
    case 1:
        document.write('Sou un uno');
        break;
    case 2:
        document.write('Soy un dos');
        break;
    case 3: 
    document.write('Soy un tres');
    break;
    default:
        document.write('no soy nada');
        break;    
}

