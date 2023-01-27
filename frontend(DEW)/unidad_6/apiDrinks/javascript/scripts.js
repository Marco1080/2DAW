const result = document.getElementById("container");
var divIndex = 0;
const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum";
const element = document.getElementById("element");
fetch(url)
    .then(response =>response.json())
    .then(dat => {
        for (let index = 0; index < dat['drinks'].length; index++) {
            var nombre = dat['drinks'][index]['strDrink'];
            var imagen = dat['drinks'][index]['strDrinkThumb'];
            var id = dat['drinks'][index]['idDrink'];
            addElement(nombre,imagen,id,index);
        }
    }
);
function addElement(nombre,imagen,id,index) {
    const firstDiv = document.createElement("div");
    firstDiv.className = "drink";
    firstDiv.innerHTML = "<div class='card'"+"id='"+ divIndex+"'>"
    +
    "<h1>"+ nombre +"</h1>"
    + "<br>"
    + "<img src='" + imagen + "'></img>"
    + "<h2><i>" + "ID: </i>"+ id +"</h2>"
    + "<br>"
    + "<button class='button-89' id='" + "0"+ divIndex +"'>COMPRAR</button>"
    + "<hr></div>";
    const secondDiv = document.getElementById("div1");
    result.appendChild(firstDiv);
    divIndex++;

    document.getElementById(index).addEventListener("click",()=>{
      console.log("-Nombre:" + nombre + " -ID:" +id);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Añadido al pedido',
        showConfirmButton: false,
        timer: 900
      })
    });
  }

    function deleteAllCookies() {
        var cookies = document.cookie.split(";");

        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
        console.log("Cookies restantes: " + getCookie.length);
    }
    document.getElementById("limpiar").addEventListener("click",deleteAllCookies);
  
    //COOKIES
    
    function setCookie(cname, cvalue, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      let expires = "expires="+d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    
    function getCookie(cname) {
      let name = cname + "=";
      let ca = document.cookie.split(';');
      for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
    
    function checkCookie() {
      let user = getCookie("username");
      if (user != "") {
        alert("Welcome again " + user);
      } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
          setCookie("username", user, 365);
        }
      }
    }
    //CONTINUAR AQUI
    var listaTemporal;
    function cookieCreator(){
      if(getCookie('orders') != ''){
        console.log("No se ha creado");
        listaTemporal = getCookie("orders");
      }
      else{
        let orderList = "a";
        setCookie("orders", orderList, 1000);
      }
      
    }
    cookieCreator();