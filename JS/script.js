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
const punto = document.querySelectorAll('.punto, .punto2, .punto3, .punto4, .punto5, .punto6, .punto8, .punto9, .punto10, .punto11, .punto12, .punto13, .punto14, .punto15, .punto16, .punto17, .punto18, .punto19, .punto20');
const slideWidth = 100; // Reemplaza 100 con el ancho de tu slide en píxeles

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
        let operacion = posicion * -5.26; // Cambia el valor a -33.33 para tres puntos

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

const btnLeft = document.querySelector(".btn-left"),
btnRight = document.querySelector(".btn-right"),
slider = document.querySelector("#slider"),
sliderSection = document.querySelectorAll(".slider_section");

btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

setInterval(() => {
moveToRight()
}, 3000);


let operacion = 0, 
counter = 0,
widthImg = 100 / sliderSection.length;

function moveToRight() {
    if (counter >= sliderSection.length-1) {
        counter = 0;
    operacion = 0;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "none";
    return;

}  
counter++;
operacion = operacion + widthImg;
slider.style.transform = `translate(-${operacion}%)`;
slider.style.transition = "all ease .6s"   

    
}

function moveToLeft() {
    counter--;
    if (counter < 0) {
    counter = sliderSection.length-1;
    operacion = widthImg * (sliderSection.length-1)
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "none";
return;
} 
operacion = operacion - widthImg;
slider.style.transform = `translate(-${operacion}%)`
slider.style.transition = "all ease .6s"

    
}



