/**
 * Resolver con promesas una funcion que se resuelva si la nota es > 5 y se rechace si la nota es < 5
 * 
 * La promesa debe darse por "rechazada" cuando la nota está suspendida.
 * 
 * La promesa debe devolver error cuando se introducen caracteres no numéricos.
 */
const qualifyButton = document.getElementById("qualifyButton");
const qualification = document.getElementById("qualification");

qualifyButton.addEventListener("click", ()=> {
    
    qualifyNew(qualification.value).then(res => console.log(res)).catch(error=>{console.log(error)})
});
 
function qualifyNew(param){
    return new Promise((resolve, reject) => {
      if(param >= 5) {
        resolve(
            Swal.fire({
                title: 'Aprobado',
                text: '',
                icon: 'success',
                confirmButtonText: 'Intentar de nuevo'
              })
        )
      }
      else {
        reject(
            Swal.fire({
                title: 'Suspendido',
                text: '',
                icon: 'error',
                confirmButtonText: 'Intentar de nuevo'
              })
            
        )
      }
    })
};
  

