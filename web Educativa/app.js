/*El objeto de esta app es que exista una función que cuando el/la alumno/a ingrese su nombre le aparezca 
un cartel de bienvenida explicandole de que se trata el sitio*/

//primero llamo al elemento input y luego tomo el valor que el alumno ingrese en este//
let boton = document.getElementById("enter");

let nombre = "";

nombre = document.getElementById('nombre').value;

//creo la variable texto //
let texto= (`Bienvenida/o ${nombre} en este sitio encontrarás algunos juegos que te permitirán repasar 
los contenidos vistos durante 2° grado en las asignaturas de Practicas del Lenguaje, matemática, e Inglés`);

//creo el evento a partir del cual se ejecutará la función asignarTextoElemento//

boton.addEventListener("click",(e)=>{
    
    let parrafo =  document.getElementById("bienvenida");
    parrafo.innerHTML = texto; 
    
    
})