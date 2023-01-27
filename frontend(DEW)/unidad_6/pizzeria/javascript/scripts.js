const toppingElements = document.getElementsByClassName("topping");
document.getElementById("sendOrder").addEventListener("click",saveOrder);
var newOrder = Array();
var indice = 0;
function addEvents(){
    for (let index = 0; index < toppingElements.length; index++) {
            toppingElements[index].addEventListener("click",()=>{
            console.log(index + " tiene asignado un eventListener");
        });
    }
}
function saveOrder(){
  let temporalList = Array();
  for (let index = 0; index < toppingElements.length; index++) {
    if(toppingElements[index].checked){
      temporalList.push(toppingElements[index].value);
    }
  }
  if(temporalList.length > 0){
    newOrder.push(temporalList);
    setCookie(indice,temporalList,1);
    indice++;
  }
  newOrder.forEach(element => {
    console.log(element);
  });
}
//cookies
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

  addEvents();