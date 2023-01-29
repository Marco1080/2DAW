const url = "https://rickandmortyapi.com/api/";


const characterButton = document.getElementById("characterButton");
const episodeButton = document.getElementById("episodeButton");
const container = document.querySelector(".container");
var page = 1;
const bottomBar = document.querySelector(".bottom-bar");
bottomBar.innerHTML = "<button class='prev-button myButton'>Previous</button><button class='next-button myButton'>Next</button>";
const nextPage = document.querySelector(".next-button");
characterButton.addEventListener("click", ()=> {
    getCharacters();
});
const previousPage = document.querySelector(".prev-button");

const inputCharacter = document.querySelector(".characterInput");
const inputCharacterButton = document.querySelector(".characterInputButton");

episodeButton.addEventListener("click", ()=> {
    getSeasons();
});

function getCharacters() {
    let urlCharacter = url + "character/?page=" + page;
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
    let containerArray = document.querySelectorAll('.card');
    if(containerArray.length > 0) {
        containerArray.forEach(element => {
            container.removeChild(element);
        });
    }
    
    container.innerHTML = '';

    list.forEach(element => {
        let contentCard = document.createElement('div');
        let content = document.createTextNode(`${element.name}`);
        let image = document.createElement('img');
        image.src = `${element.image}`;
        contentCard.appendChild(content);
        contentCard.appendChild(image);
        contentCard.classList.add('card');
        contentCard.addEventListener("click", ()=> {
            createCard(element);
        });
        container.appendChild(contentCard);
    });
}

nextPage.addEventListener("click", ()=> {
    if(document.querySelectorAll('.card').length == 20) {
        page++;
        getCharacters();
    }
    else{console.log("NO HAY MAS PAGINAS")}
});

previousPage.addEventListener("click", ()=> {
    if(page > 1){
        page--;
        getCharacters();
    }
});
function getSeasons() {
    let urlCharacter = url + "episode?page=1";
    fetch(urlCharacter)
        .then(response=>response.json())
        .then(data=>{
            container.innerHTML = "";
            let table = document.createElement('table');
            let tr = document.createElement('tr');
            let th = document.createElement('th');
            let th2 = document.createElement('th');
            let th3 = document.createElement('th');

            let title = document.createTextNode("TITLE");
            th.appendChild(title);
            tr.appendChild(th);
            table.appendChild(tr);

            let date = document.createTextNode("DATE");
            th2.appendChild(date);
            tr.appendChild(th2);
            table.appendChild(tr);

            let season = document.createTextNode("SEASON");
            th3.appendChild(season);
            tr.appendChild(th3);
            table.appendChild(tr);
            
            data.results.forEach(element => {
                let tr = document.createElement('tr');
                let listado = [element.name, element.air_date, element.episode];
                for (let index = 0; index < 3; index++) {
                    let td = document.createElement('td');
                    let info = document.createTextNode(`${listado[index]}`);
                    td.appendChild(info);
                    tr.appendChild(td);
                }
                table.appendChild(tr);
                container.appendChild(table);
            });
        })
        .catch(error=> {
            console.log(`${error} No se ha podido obtener los datos solicitados.`);
        })
}
function createCard(character) {
    let characterCard = document.createElement("article");
    characterCard.className = "characterCard";
    let characterCardContent = document.createElement("p");
    let characterName = document.createTextNode(character.name);
    characterCardContent.appendChild(characterName)
    characterCard.appendChild(characterCardContent);
    let characterImage = document.createElement("img");
    characterImage.src = character.image;
    characterCard.appendChild(characterImage);

    container.appendChild(characterCard);

    container.addEventListener('click', function addCharacterCardEvent (e){
        e.stopPropagation();
        document.body.addEventListener("click", function dropCharacterCard(){
            container.removeChild(document.querySelector('.characterCard'));
            document.body.removeEventListener("click", dropCharacterCard);
        });
        container.removeEventListener("click", addCharacterCardEvent);
    });
    
}

inputCharacterButton.addEventListener("click", ()=> {
    //searchForCharacters(document.querySelector(inputCharacter).value);
    console.log(inputCharacter.value);
});
function searchForCharacters(name) {
    let urlCharacter = url + "character";
    fetch(urlCharacter)
        .then(response=>response.json())
        .then(data=>{
            showCharacters(data.results)
        })
        .catch(error=> {
            console.log(`${error} No se ha podido obtener los datos solicitados.`)
            
        })
}
