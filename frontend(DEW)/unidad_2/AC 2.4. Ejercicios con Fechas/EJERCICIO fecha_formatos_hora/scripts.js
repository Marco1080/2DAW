/**
 * Crea un programa que muestre la fecha actual en diferentes formatos, según el valor que meta el usuario por parámetro:

17/02/2016
Miércoles, 17 de febrero de 2016.
Wednesday, February 17, 2016.
 */
let fecha = new Date();
document.getElementById("anios").innerHTML = fecha.getDate() + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear();
document.getElementById("anios").innerHTML += "";
