const url = "https://rickandmortyapi.com/api/";


const characterButton = document.getElementById("characterButton");
const episodeButton = document.getElementById("episodeButton");
const container = document.querySelector(".container");
characterButton.addEventListener("click", ()=> {
    getCharacters();
});

episodeButton.addEventListener("click", ()=> {
    getAllEpisodes();
});

var lista2 = "1";
function getCharacters() {
    let urlCharacter = url + "character/?page=1";
    fetch(urlCharacter)
        .then(response=>response.json())
        .then(data=>{
            showCharacters(data.results)
        })
        .catch(error=> {
            console.log(`${error} No se ha podido obtener los datos solicitados.`)
            
        })
}

function getAllEpisodes() {
    let urlEpisode = url + "episode";
    let season = 1;
    fetch(urlEpisode)
        .then(response=>response.json())
        .then(data=>{
            console.log(`SEASON ${season}:`)
            showCharacters(data.results)
        })
        .catch(error=> {
            console.log(`${error} No se ha podido obtener los datos solicitados.`)
            
        })
}

function showCharacters(list){
    /* <----------------
    if(document.querySelector('.contentCard') != null) {
        container.removeChild(contentCard);
    }
    */
    container.innerHTML = '';
    list.forEach(element => {
        let contentCard = document.createElement('div');
        let content = document.createTextNode(`${element.name}`);
        contentCard.appendChild(content);
        contentCard.classList.add('card');
        contentCard.style.backgroundImage = `url(${element.image})`;
        container.appendChild(contentCard);
    });
}

