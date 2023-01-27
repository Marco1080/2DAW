/*
Ejercicio 2:

Dispones del siguiente archivo de texto (al no haber trabajado con archivos, guárdalo en una variable en Javascript):

Cliente;Localidad;Cuota

Laura;Santander;50

Álvaro;Castro;50

Igor;Castro;60

Ivan;Santander;40

Mónica;Zamora;30

Javi;Bilbao;30

David;Bilbao;50

José Luis;Bilbao;60

A partir del mismo, el usuario podrá elegir del menú:

Todos los usuarios: se mostrará una tabla con los valores que están en la variable anterior.
Usuarios de una provincia: y a partir de la provincia introducida por el usuario se 
mostrarán en una tabla los nombres y cuotas de las personas que viven en esa provincia.
Usuarios que tengan una cuota mayor o menor que un valor: y se mostrarán en una tabla 
los nombres de usuario, provincias y cuotas de aquellos que tienen una cuota superior 
o inferior al valor introducido por el usuario (valora cuál es el mejor modo de hacerlo).
*/
let clientes = Array(
    Array("Laura","Santander",50),
    Array("Álvaro","Castro",50),
    Array("Igor","Castro",60),
    Array("Ivan","Santander",40),
    Array("Mónica","Zamora",30),
    Array("Javi","Bilbao",30),
    Array("David","Bilbao",50),
    Array("José Luis","Bilbao",60)
    );

function outputClientes(){
    for(let x = 0; x < clientes.length; x++){
        document.write(clientes[x] + "<br>");
    }
}

function outputProvincia(provincia){
    for(let x = 0; x < clientes.length; x++){
        if(clientes[x][1]==provincia){
            document.write(clientes[x][0]+ " "+ clientes[x][2] + "<br>");
        }
    }
}

function outputCuota(cuota){
    for(let x = 0; x < clientes.length; x++){
        if(clientes[x][2]>=cuota){
            document.write(clientes[x] + "<br>");
        }
    }
}