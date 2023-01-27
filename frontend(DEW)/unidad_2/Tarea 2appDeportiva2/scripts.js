let password = document.getElementById("password");
password.addEventListener("input",inputUpdate);

function inputUpdate(e){
  password = e.target.value;
  console.log(password);
}
setTimeout(function(){
},5000);
let currentDate = new Date();
let anio = currentDate.getFullYear();
const month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];
document.getElementById("year").innerHTML= currentDate.getFullYear();
document.getElementById("day").innerHTML= currentDate.getDate();
document.getElementById("month").innerHTML= month[currentDate.getMonth()];

function abrirVentana(){
  window.open("ventana/index.html", "fullscreen=1", "width=600,height=300");
}
function contraseña(){
  for(let x=0;x<password.lenght;x++){
    
  }
}