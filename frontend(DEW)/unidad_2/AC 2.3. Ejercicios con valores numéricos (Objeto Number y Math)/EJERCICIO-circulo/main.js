/**
 * EJERCICIO: circulo

Crea un programa que pida al usuario el valor del radio y muestre por pantalla:

El valor del radio.
El valor del diámetro.
El valor del perímetro de la circunferencia.
El valor del área del círculo.
El valor del área de la esfera.
El valor del volumen de la esfera.
• El valor de Pi debes obtenerlo del objeto Math, no introducirlo manualmente.

• Debes escribir al lado si son cm, o cm2, o cm3.

• Como datos de muestra, si metes 5, deberías obtener aproximadamente: 5 / 10 / 31,41 / 78,54 / 314,15 / 523,59.
 */
let decimal;
function decimales(){
    decimal = document.getElementById("dec").value;
    if(decimal==""){decimal=2}
}
function calculo(){
    let value = document.getElementById("valor").value;
    console.log(value);
    if(value!=""){
        decimales();
    document.getElementById("radio").innerHTML = "RADIO: "+ value+ " cm";
    document.getElementById("diametro").innerHTML = "DIAMETRO: "+ (value*2).toFixed(decimal)+ " cm";
    document.getElementById("diametroCirc").innerHTML = "PERIMETRO CIRCUNFERENCIA: "+ ((Math.PI*2)*value).toFixed(decimal)+ " cm";
    document.getElementById("diametr").innerHTML = "AREA CIRCULO: "+ (Math.PI*value**2).toFixed(decimal)+ " cm";
    document.getElementById("areaCirc").innerHTML = "AREA ESFERA: "+ (4*Math.PI*value**2).toFixed(decimal)+ " cm";
    document.getElementById("volumen").innerHTML = "VOLUMEN ESFERA: "+ ((4/3)*Math.PI*value**3).toFixed(decimal) + " cm";
}else{
    }
}


