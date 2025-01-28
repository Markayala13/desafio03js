/*
Construye una página web 4_colores.html con las siguientes características (Total:
5 puntos)
● Crea 4 divs que tengan alto y ancho de 200px y de colores azul, rojo, verde y
amarillo (insertar estilos con atributo style). Cada uno de los divs debe tener
un identificador único. (1 Punto)
● Dentro del script agrega el evento para que al hacer click a cada uno de los
divs, este cambie de color al color negro. Utiliza addEventListener para
agregar el evento. (1 Punto)
_ 2
*/
const azul =document.querySelector(".blue")
const roja =document.querySelector(".red")
const green = document.querySelector(".green")
const amarillo =document.querySelector(".yellow")

addEventListener("click" ,(event)=>{

event.target.style.backgroundColor= "black"
})

