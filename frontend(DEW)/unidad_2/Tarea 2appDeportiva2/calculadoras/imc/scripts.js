let severa = document.getElementById("severa");
let moderada = document.getElementById("moderada");
let aceptable = document.getElementById("aceptable");
let normal = document.getElementById("normal");
let sobrepeso = document.getElementById("sobrepeso");
let obeso1 = document.getElementById("obeso1");
let obeso2 = document.getElementById("obeso2");
let obeso3 = document.getElementById("obeso3");
let resultado = 0;
//ALTURA
let altura = document.getElementById("height");
altura.addEventListener("input",inputUpdate);
function inputUpdate(e){
    altura = e.target.value;
    calculoImc();
}
//PESO
let peso = document.getElementById("weight");
peso.addEventListener("input",updatePeso);
function updatePeso(e){
    peso = e.target.value;
    calculoImc();
    mostrarImc();
}
function calculoImc(){
    if(peso >0 && altura >0){
        resultado = (peso/((altura/100)**2)).toFixed(1);
    }
    else{
        resultado = 0
    }
    mostrarImc();
}
function mostrarImc(){
    if(resultado == 0){
        clearImc();
    }
    else if(resultado >0 && resultado <16){
        clearImc();
        severa.style.transition = "all 1.5s";
        severa.style.background = "red";
    }
    else if(resultado >=16 && resultado <=16.99){
        clearImc();
        moderada.style.transition = "all 1.5s";
        moderada.style.background = "yellow";
    }
    else if(resultado >=17 && resultado <=18.49){
        clearImc();
        aceptable.style.transition = "all 1.5s";
        aceptable.style.background = "blue";
    }
    else if(resultado >=18.50 && resultado <=24.99){
        clearImc();
        normal.style.transition = "all 1.5s";
        normal.style.background = "green";
    }
    else if(resultado >=25.00 && resultado <=29.99){
        clearImc();
        sobrepeso.style.transition = "all 1.5s";
        sobrepeso.style.background = "blue";
    }
    else if(resultado >=30 && resultado <=34.99){
        clearImc();
        obeso1.style.transition = "all 1.5s";
        obeso1.style.background = "yellow";
    }
    else if(resultado >=35.00 && resultado <=40.00){
        clearImc();
        obeso2.style.transition = "all 1.5s";
        obeso2.style.background = "orange";
    }
    else if(resultado >=40){
        clearImc();
        obeso3.style.transition = "all 1.5s";
        obeso3.style.background = "red";
    }
}
function clearImc(){
    severa.style.background = "";
    moderada.style.background = "";
    aceptable.style.background = "";
    normal.style.background = "";
    sobrepeso.style.background = "";
    obeso1.style.background = "";
    obeso2.style.background = "";
    obeso3.style.background = "";
}