const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
nav.classList.remove("visible");
})

const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')

// Cuando hago CLICK en cada punto
//saber la posicion de ese punto
//aplicar un transform translate en el eje x al grande
//quitar la clase activo de TODOS puntos
//añadir la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
punto.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click',()=>{

        // Guardar la posicion de ese PUNTO
        let posicion = i
        //Calculando el espacio que debe desplazarse el grande
        let operacion = posicion * -50

        //Movemos el grande
        grande.style.transform = `translateX(${ operacion }%)`

        //Recorremos todos los puntos
        punto.forEach( ( cadaPunto , i )=>{
            //Quitamos la clase ACTIVO a TODOS los puntos
            punto[i].classList.remove('activo')
        })
        //Añadir la clase activo en el punto que hemos hecho click
        punto[i].classList.add('activo')
    })
})
