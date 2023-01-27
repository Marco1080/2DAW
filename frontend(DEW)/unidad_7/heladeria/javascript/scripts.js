let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };
 var listado = [];
 const container = document.querySelector(".container");

 function toppings_choice (){
   return new Promise((resolve,reject)=>{
         makeMenu(stocks.Fruits,'Ingredientes');
         if(true){
            setTimeout(() => {
               resolve("Pedido enviado");   
            }, 1000);
         }
         else{
            reject("Fallo en el pedido")
         }
   })
 }

const startOrder = document.getElementById("orderButton").addEventListener("click", toppings_choice);
const sendButtons = document.querySelector(".send");
function makeMenu(){
      showThings(stocks.Fruits,'FRUITS');
      sendButtons.innerHTML = "<button id='makeOrder1' class='orderButton'><span class='box'>CONTINUAR</span></button>";

      document.getElementById("makeOrder1").addEventListener("click", ()=> {
         const fruit = document.querySelectorAll(".FRUITS");
         let fruitList = [];
         listado = [];
         fruit.forEach(element => {
           if(element.checked){
               fruitList.push(element.value);
           }
         });
         listado.push(fruitList);
         console.log(listado);
         showThings2(stocks.holder, 'HOLDERS');
         sendButtons.innerHTML = "<button id='makeOrder2' class='orderButton'><span class='box'>CONTINUAR</span></button>";
         document.getElementById("makeOrder2").addEventListener("click", ()=> {
            const holder = document.querySelectorAll(".HOLDERS");
            let holderList = [];
            holder.forEach(element => {
               if(element.checked) {
                   holderList.push(element.value);
               }
            });
            listado.push(holderList);

            showThings(stocks.toppings, 'TOPPINGS');
            sendButtons.innerHTML = "<button id='makeOrder3' class='orderButton'><span class='box'>CONTINUAR</span></button>";
            
               document.getElementById("makeOrder3").addEventListener("click", ()=> {
               const topping = document.querySelectorAll(".TOPPINGS");
               let toppingList = [];
               topping.forEach(element => {
                  if(element.checked) {
                     toppingList.push(element.value);
                  }
               });
               listado.push(toppingList);
               console.log(listado);
               showThings2(stocks.liquid, 'LIQUIDS');
               sendButtons.innerHTML = "<button id='makeOrder4' class='orderButton'><span class='box'>FINALIZAR</span></button>";
               document.getElementById("makeOrder4").addEventListener("click", ()=> {

                  const liquid = document.querySelectorAll(".LIQUIDS");
                  let liquidList = [];
                  liquid.forEach(element => {
                     if(element.checked) {
                        liquidList.push(element.value);
                     }
                  });
                  listado.push(liquidList);
                  console.log(listado);
                  sendButtons.innerHTML = "";
                  container.innerHTML = "<div class='loader'>"
                                       +"<div class='scanner'>"
                                       +"<span>Loading...</span>"
                                       +"</div>"
                                       +"</div>";
                  kitchen();
               });
            });
         });
         
      });
}
function showThings(newList,titulo) {
   container.innerHTML = `<h2>${titulo}</h2>`;
   newList.forEach(element => {
      container.innerHTML += `<label for='${element}'><img src='../media/${element}.jpg' class='newImg'></label><input type='checkbox' value='${element}' class='${titulo} checks' id='${element}' name='${element}'></input>`;
      
   });
   const newImg = document.querySelectorAll(".newImg");
   newImg.forEach(element => {
      element.addEventListener("click", ()=> {
         element.style.border = `3px solid #${Math.floor(Math.random()*16777215).toString(16)}`;
      });
   });
}
function showThings2(newList,titulo) {
   container.innerHTML = `<h2>${titulo}</h2>`;
   newList.forEach(element => {
      container.innerHTML += `<label for='${element}'><img src='../media/${element}.jpg' class='newImg2'></label><input type='radio' value='${element}' class='${titulo} checks' id='${element}' name='${titulo}'></input>`;
   });
   const newImg2 = document.querySelectorAll(".newImg2");
   newImg2.forEach(element => {
      element.addEventListener("click", ()=> {
         element.style.border = `3px solid #${Math.floor(Math.random()*16777215).toString(16)}`;
      });
   });
}

//----
let is_shop_open = true;
function time(ms) {

   return new Promise( (resolve, reject) => {

      if(is_shop_open){
         setTimeout(resolve,ms);
      }

      else{
         reject(console.log("Shop is closed"))
      }
    });
}

async function kitchen(){
   try{
      await time(2000)
      sendButtons.innerHTML = ("<p>Se ha enviado el pedido</p>")

      await time(2000)
      sendButtons.innerHTML = ("<p>Se ha <i><bold>recibido</bold></i> el pedido</p>")

      await time(3000)
      sendButtons.innerHTML = ("<p>Frutas seleccionadas: <br>")
      listado[0].forEach(element => {
         sendButtons.innerHTML += `<p>- ${element} <p>`;
      });

      await time(2000)
      sendButtons.innerHTML = ("<p>Mezclando fruta</p>")

      await time(3000)
      sendButtons.innerHTML = (`<p>Holder elegido: <p>${listado[1]}</p><br>`)

      await time(3000)
      sendButtons.innerHTML = (`<p>Toppings elegidos: <p><br>`)
      listado[2].forEach(element => {
         sendButtons.innerHTML +=`<p>- ${element} <p>`;
      });

      await time(3000)
      sendButtons.innerHTML = (`Usted ha elegido hacerlo de `)
      sendButtons.innerHTML = (`<p>Liquid elegido: ${listado[3]}</p>`)

      await time(2000)
      sendButtons.innerHTML = (`<p>Su orden esta <i>LISTA</i></p>`)
   }

   catch(error){
      sendButtons.innerHTML = ("<p>Fallo en el pedido</p>")
   }
}