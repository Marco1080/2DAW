let prebenjamin = document.getElementById("prebenjamin");
let benjamin = document.getElementById("benjamin");
let alevin = document.getElementById("alevin");
let infantil = document.getElementById("infantil");
let cadete = document.getElementById("cadete");
let junior = document.getElementById("junior");
let sub = document.getElementById("sub");
let senior = document.getElementById("senior");
//EDAD
let edad = document.getElementById("age");
edad.addEventListener("input",inputUpdate);
function inputUpdate(e){
    edad = e.target.value;
    console.log(edad);
    otorgarCategoria();
}
function otorgarCategoria(){
    if(edad>=6 && edad<=7 ){
        clearOutputs();
        prebenjamin.style.background = "black";
    }
    else if(edad>=8 && edad<=9 ){
        clearOutputs();
        benjamin.style.background = "black";
    }
    else if(edad>=10 && edad<=11 ){
        clearOutputs();
        alevin.style.background = "black";
    }
    else if(edad>=12 && edad<=13 ){
        clearOutputs();
        infantil.style.background = "black";
    }
    else if(edad>=14 && edad<=15 ){
        clearOutputs();
        cadete.style.background = "black";
    }
    else if(edad>=16 && edad<=17 ){
        clearOutputs();
        junior.style.background = "black";
    }
    else if(edad>=18 && edad<=21 ){
        clearOutputs();
        sub.style.background = "black";
    }
    else if(edad>=22 ){
        clearOutputs();
        senior.style.background = "black";
    }
}
function clearOutputs(){
    prebenjamin.style.background = "";
    benjamin.style.background = "";
    alevin.style.background = "";
    infantil.style.background = "";
    cadete.style.background = "";
    junior.style.background = "";
    sub.style.background = "";
    senior.style.background = "";
}