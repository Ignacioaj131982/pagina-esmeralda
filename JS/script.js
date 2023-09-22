const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

const navList = document.querySelector("#navList");

abrir.addEventListener("click", () => {
nav.classList.add("visible");
    
})

cerrar.addEventListener("click", () => {
nav.classList.remove("visible");

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

document.addEventListener('DOMContentLoaded' , function (){
    let imagenes = [
        { img: 'IMG/casacompleta.jpeg' },
        { img: 'IMG/Cocina.jpeg' },
        { img: 'IMG/cocina2.jpeg' },
        { img: 'IMG/cocina3.jpeg' },
        { img: 'IMG/chimenea.jpeg' },
        { img: 'IMG/chimenea2.jpeg' },
        { img: 'IMG/cuartoprincipal.jpeg' },
        { img: 'IMG/deck.jpeg' },
        { img: 'IMG/deck2.jpeg' },
        { img: 'IMG/jardin.jpeg' },
        { img: 'IMG/balcon.jpeg' },
        { img: 'IMG/baño.jpeg' },
        { img: 'IMG/mesacocina.jpeg' },
        { img: 'IMG/mesacocinaarriba2.jpeg' },
        { img: 'IMG/lavandas.jpeg' },
        { img: 'IMG/aparador.jpeg' },
        { img: 'IMG/playa1.jpeg' },
        { img: 'IMG/playa2.jpeg' },
        { img: 'IMG/poltronas.jpeg' },
        { img: 'IMG/puestoguardavidas.jpeg' }
        ]
    let contador = 0
    const contenedor = document.querySelector('.slideshow')
    const overlay = document.querySelector('.overlay')
    const galeria_imagenes = document.querySelectorAll('.galeria img')
    const img_slideshow = document.querySelector('.slideshow img')
    
    contenedor.addEventListener('click', function (event) {
        let atras = contenedor.querySelector('.atras'),
        adelante = contenedor.querySelector('.adelante'),
        img = contenedor.querySelector('img'),
        tgt = event.target
        if (tgt == atras) {
            if (contador > 0) {
            img.src = imagenes[contador - 1].img
            contador--
            } else {
            img.src = imagenes[imagenes.length - 1].img
            contador = imagenes.length - 1
            }
        } else if (tgt == adelante) {
            if (contador < imagenes.length - 1) {
            img.src = imagenes[contador + 1].img
            contador++
            } else {
            img.src = imagenes[0].img
            contador = 0
            }
        }
        })

        Array.from(galeria_imagenes).forEach(img => {
            img.addEventListener('click', event => {
                const imagen_seleccionada = +event.target.dataset.imgMostrar
                img_slideshow.src = imagenes[imagen_seleccionada].img
                contador = imagen_seleccionada
                overlay.style.opacity = 1
                overlay.style.visibility = 'visible'
            })

        })
        
    
})

