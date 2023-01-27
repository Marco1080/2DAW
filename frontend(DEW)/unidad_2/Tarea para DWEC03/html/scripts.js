let a = document.getElementById("content");
a.innerHTML = "<h3>Ejemplo de Ventana Nueva</h3>";
a.innerHTML += "<br>Nombre <input type='text' id='nombre'>"
                +"<br><br>Apellidos<input type='text' id='apellidos'>"
                +"<br><br>Dia <input type='number' id='dia'>"
                +"<br><br>Mes <input type='number' id='mes'>"
                +"<br><br>Año <input type='number' id='anio'>"
                +"<br><br><button onclick='mostrarDatos()'>Enviar</button>";
function mostrarDatos(){
    let name = document.getElementById("nombre").value;
    let surname = document.getElementById("apellidos").value;
    let day = document.getElementById("dia").value;
    let month = document.getElementById("mes").value;
    let year= document.getElementById("anio").value;
    a.innerHTML = "Nombre: "+name 
    + "<br>Apellidos: " + surname
    + "<br>Día: " + day
    + "<br>Mes: " + month
    + "<br>Año: " + year;
}