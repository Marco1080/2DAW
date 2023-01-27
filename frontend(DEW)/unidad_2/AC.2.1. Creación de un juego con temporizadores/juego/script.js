let palabras = "framework";
let barras = "";
/*DESPLIEGA EL MENU Y LLAMA LAS FUNCIONES*/
function juego(){
    document.getElementById("info").innerHTML="<input type='text' id='dat' minlenght='0' maxlenght='1'>";
    document.getElementById("dato").innerHTML="<button onclick='inputDato()'>INTENTAR</button>";
    contador();
    barras = generarLogintud();
    document.getElementById("barra").innerHTML=barras;
}
/*CREAR BARRAS*/
function generarLogintud(){
    let barras = "";
    for(let i = 0;i<palabras.length;i++){
        barras+="-";
    }
    return barras;
}
/*PEDIR DATO Y COMPROBAR ACIERTO*/
function inputDato(){
    let dato = document.getElementById("dat").value;
    console.log(dato);
    for(let i = 0;i<palabras.length;i++){
        if(palabras[i]==dato){
            console.log("coincide");
            barras = barras.substring(0,i) +palabras[i]+barras.substring(i+1);
            console.log(barras[i]);
        }
    }document.getElementById("barra").innerHTML=barras;
}
/*CONTADOR*/
function contador(){
    let cuenta = document.getElementById("cuenta");
    let number = 30;
    let timer = setInterval(()=>{
        cuenta.innerHTML = number + " segundos";
        number --;
        if(number==-1){
            clearInterval(timer);
            alert("Has perdido");
            location.reload();
        }},1000);
    }
function competitivo(){
    anime({
        targets: 'table',
        keyframes: [
          {translateY: -40},
          {translateX: 250},
          {translateY: 40},
          {translateX: 0},
          {translateY: 0}
        ],
        duration: 2000,
        easing: 'easeOutElastic(1, .8)',
        loop: true
      });
      
      
}
anime({
    targets: '.objeto',
    scale: [
        {value: .1, easing: 'easeOutSine', duration: 500},
        {value: 1, easing: 'easeInOutQuad', duration: 1200}
      ],
      delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
      loop: true
    });