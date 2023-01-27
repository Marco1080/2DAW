/**
 * Crea un programa que pida muestre el número de días que quedan desde hoy hasta el fin de curso (por ejemplo, el 24 de junio).
 */
function llamar(){
    let semana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    let inputFecha = document.getElementById("fecha").value;
    let fecha = new Date(inputFecha);
    let cuenta = 0;
    for(let i=0;i<70;i++){
        if(semana[fecha.getDay()]=="Domingo"){
            cuenta++;
            console.log(fecha.getFullYear());
            document.getElementById("anios").innerText += "\n" + fecha.getFullYear();
        }
        fecha.setFullYear(fecha.getFullYear() + 1);
    }
    document.getElementById("result").innerHTML = cuenta;
}