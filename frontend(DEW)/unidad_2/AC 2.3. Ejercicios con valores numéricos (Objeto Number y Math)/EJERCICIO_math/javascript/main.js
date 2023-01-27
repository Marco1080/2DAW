/*
EJERCICIO: math

Crea un programa que pida al usuario que elija una opción del siguiente menú:

Potencia.
Raíz.
Redondeo.
Trigonometría.
Si el usuario introduce 1, se le deberá pedir una base y un exponente y se mostrará el resultado en pantalla (La potencia de X elevado a Y es: )

Si el usuario introduce 2, se le pedirá un número (no negativo) y se mostrará el resultado en pantalla (La raíz de X es: )

Si el usuario introduce 3, se le pedirá un decimal por pantalla y se mostrará el redondeo al entero más próximo, al alta y a la baja.

Si el usuario introduce 4, se le pedirá un ángulo (entre 0 y 360) y se le mostrarán por pantalla los valores 

trigonométricos del seno, coseno y tangente.
*/
let value;
const base = document.getElementById("base");
const exponente = document.getElementById("exponente");
const result = document.getElementById("result");
const resultado = document.getElementById("resultado");

function inputValue(val) {
    value = parseInt(val);
}

function calculo() {
    inputValue(document.getElementById("calc").value);
    switch (value) {
        case 1:
            llamadaPotencia();
            break;
        case 2:
            llamadaRaiz();
            break;
        case 3:
            llamadaRedondeo();
            break;
        case 4:
            llamadaTrigonometria();
            break;
        default:
            break;
    }
}


/*INICIO TRIGONOMETRIA*/
function llamadaTrigonometria() {
    resultado.innerHTML = "";
    result.innerHTML = "";
    exponente.innerHTML = "";
    base.innerHTML = "VALOR: <input type='number' id='valor'>";
    result.innerHTML = "<button onclick='trigonometria()'>CALCULAR</button>";
}

function trigonometria() {

    const inputValor = document.getElementById("valor").value;
    result.innerHTML = "COSENO: " + Math.cos(inputValor) +
        "<br>SENO: " + Math.sin(inputValor) +
        "<br>ARCOSENO: " + +Math.tan(inputValor);
}
/*FIN TRIGONOMETRIA*/

/*INICIO REDONDEO*/
function llamadaRedondeo() {
    resultado.innerHTML = "";
    result.innerHTML = "";
    base.innerHTML = "REDONDEO: <input type='number' id='valor'>";
    result.innerHTML = "<button onclick='redondeo()'>CALCULAR</button>";
}

function redondeo() {
    resultado.innerHTML = "";
    result.innerHTML = "";
    exponente.innerHTML = "";
    const inputValor = document.getElementById("valor").value;
    resultado.innerHTML = "REDONDEO: " + Math.round(inputValor) +
        "<br> ALTA: " + Math.ceil(inputValor) +
        "<br> BAJA: " + Math.floor(inputValor);
}
/*FIN REDONDEO*/

/*INICIO RAIZ*/

function llamadaRaiz() {
    resultado.innerHTML = "";
    result.innerHTML = "";
    exponente.innerHTML = "";
    base.innerHTML = "Valor: <input type='number' id='valor'>";
    result.innerHTML = "<button onclick='raiz()'>CALCULAR</button>";
}

function raiz() {
    const inputValor = document.getElementById("valor").value;
    if (inputValor < 0) { resultado.innerHTML = "Introduzca un número positivo." } else {
        resultado.innerHTML = "RESULTADO: " + Math.sqrt(document.getElementById("valor").value);
    }
}
/*FIN RAIZ*/

/*INICIO POTENCIA*/
function llamadaPotencia() {
    resultado.innerHTML = "";
    result.innerHTML = "";
    base.innerHTML = "BASE: <input type='number' id='base1'>";
    exponente.innerHTML = "EXPONENTE: <input type='number' id='exponente1'> ";
    result.innerHTML = "<button onclick='potencia()'>CALCULAR</button>";
}

function potencia() {
    const inputBase = document.getElementById("base1").value;
    const inputExponente = document.getElementById("exponente1").value;
    resultado.innerHTML = "RESULTADO: " + (inputBase ** inputExponente);
}
/*FIN POTENCIA*/