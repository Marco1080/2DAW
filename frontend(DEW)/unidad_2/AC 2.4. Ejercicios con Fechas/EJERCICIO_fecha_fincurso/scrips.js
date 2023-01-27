/**
 * Crea un programa que pida muestre el número de días que quedan desde hoy hasta el fin de curso (por ejemplo, el 24 de junio).
 */
let fechaHoy = new Date();
let fechaElegida = new Date("2022-10-20");
fechaHoy = fechaElegida-fechaHoy;
fechaHoy = (fechaHoy/(1000*60*60*24)).toFixed(0);
console.log(fechaHoy);
function llamar(){
    let input = document.getElementById("fecha").value;
    let fechaActual = new Date();
    input = Date.parse(input);
    let result = (input-fechaActual);
    document.getElementById("result").innerHTML =((result/(1000*60*60*24)).toFixed(0)) +" días";
}