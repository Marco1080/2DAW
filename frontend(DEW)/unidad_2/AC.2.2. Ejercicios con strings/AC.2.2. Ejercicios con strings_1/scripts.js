/**
 * Crea un programa que pida al usuario su nombre y apellidos y muestre:

El tamaño del nombre más los apellidos (sin contar espacios).
La cadena en minúsculas y en mayúsculas.
Que divida el nombre y los apellidos y los muestre en 3 líneas, donde ponga Nombre: / Apellido 1: / Apellido 2:
Una propuesta de nombre de usuario, compuesto por la inicial del nombre, el primer apellido y la inicial del segundo apellido: ej. Para Laura Folgado Galache sería lfolgadog.
Una propuesta de nombre de usuario compuesto por las tres primeras letras del nombre y de los dos apellidos: ej. laufolgal.
 */
let a = document.getElementById("name");
let b = document.getElementById("surname");
let nombre;
let apellidos;
let cuenta = 0;
function vaciar(control){
}
function verificarEntrada(control){
    nombre = control.value;
    console.log(nombre);
    logintud(nombre);
}
function verificarEntrada2(control){
    apellidos = control.value;
    console.log(apellidos);
    logintud(apellidos);
}
function logintud(texto){
    let contador = 0;
    texto = texto.split(" ");
    for(let i = 0;i<texto.length;i++){
        contador+=texto[i].length;
    }
    cuenta+=contador;
}
function calculo(){
    document.getElementById("resultado").innerHTML = cuenta;
    cuenta=0;
    vaciar(a);
    vaciar(b);
    minusculas();
    iniciales();
}
function minusculas(){
    let minus = nombre + " " + apellidos;
    document.getElementById("minus").innerHTML = minus.toLowerCase();
    document.getElementById("mayus").innerHTML = minus.toUpperCase();
}
function iniciales(){
    let ini="";
    let iniciales = nombre +" "+ apellidos;
    iniciales=iniciales.split(" ");
    console.log("Iniciales: "+ iniciales);
    for(let i=0;i<iniciales.length;i++){
        ini+=iniciales[i][0] + " ";        
    }
    document.getElementById("ini").innerHTML = ini;
}