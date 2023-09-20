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


