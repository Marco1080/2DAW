//abrir con go live para evitar errores con las cookies
function getNumberDataPages() {
    return fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json()
        )
        .then((json) => {return json.info.pages})
        
        .catch((err) => reject(err));
}

async function callNumberPagesAndCharacterData(){
    const numberCharacterPages = await getNumberDataPages();
    getCharacterData(numberCharacterPages);
    const numberPagesEpisodes = await getDataEpisodesPages();
    getDataEpisodes(numberPagesEpisodes);
}
let characterList = [];
function getCharacterData(pages) {
    for (let index = 0; index <= pages; index++) {
        fetch(`https://rickandmortyapi.com/api/character?page=${index}`)
            .then(response=>response.json())
            .then(data=>{
                characterList.push(data);
            })
            .catch(error=> {
                console.log(`${error} No se ha podido obtener los datos solicitados.`)
            })
        }
}
callNumberPagesAndCharacterData();

let currentPage = 1;
const characterButton = document.getElementById("characterButton").addEventListener("click", ()=>{
    showCharacters();
    callPageButtons();
});

const container = document.getElementById("container");

function showCharacters() {
    removeCards();
    removeNoCharacterMessage();
    removeImage();
    removeTable();
    for (let index = 0; index < 20; index++) {
        let card = document.createElement('div');
        card.classList.add('card');
        let image = document.createElement('img');
        image.src = characterList[currentPage].results[index].image;
        card.appendChild(image);
        let content = document.createTextNode(`${characterList[currentPage].results[index].name}`);
        card.appendChild(content);
        card.addEventListener("click",()=>{
            characterList[currentPage].results[index].name
            checkCharacter(characterList[currentPage].results[index].image);
        });
        container.appendChild(card);
    }
}

function removeCards() {
    let removeArray = document.querySelectorAll('.card');
    if(removeArray.length > 0) {
        
        removeArray.forEach(element => {
            container.removeChild(element);
        });
    }
}

function removeImage() {
    let removeArray = document.querySelectorAll('.favoriteCharacter');
    if(removeArray.length > 0) {
        removeArray.forEach(element => {
            container.removeChild(element);
        });
    }
}

function removeNoCharacterMessage() {
    let removeArray = document.querySelectorAll('.noCharacter');
    if(removeArray.length > 0) {
        removeArray.forEach(element => {
            container.removeChild(element);
        });
    }
}

function callPageButtons() {
    let page = document.querySelector('.pageButtons');
    if(page == null) {
        let pageButtons = document.createElement('div');
        pageButtons.classList.add('pageButtons');
        let nextButton = document.createElement('button');
        nextButton.classList.add('nextPage');
        let previousButton = document.createElement('button');
        previousButton.classList.add('previousPage');
        let nextText = document.createTextNode('Next');
        nextButton.appendChild(nextText);
        let previousText = document.createTextNode('Previous');
        previousButton.appendChild(previousText);
        pageButtons.appendChild(previousButton);
        pageButtons.appendChild(nextButton);
        
        container.appendChild(pageButtons);

        let nextPageButton = document.querySelector('.nextPage').addEventListener("click", ()=> {
            if(currentPage < 42) {
                currentPage++;
                showCharacters();
            }
        });

        let previousPageButton = document.querySelector('.previousPage').addEventListener("click", ()=> {
            if(currentPage > 1) {
                currentPage--;
                showCharacters();
            }
        });
    }
}
const episodeButton = document.getElementById('episodeButton').addEventListener("click", ()=> {
    removeCards();
    container.innerHTML= '';
    showEpisodes();
});
function showEpisodes() {
    removePageButtons();

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
    episodeList[0].results.forEach(element => {
        let tr = document.createElement('tr');
        let listado = [element.name, element.air_date, element.episode];
        for (let index = 0; index < 3; index++) {
            let td = document.createElement('td');
            let info = document.createTextNode(listado[index]);
            td.appendChild(info);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    });
    container.appendChild(table);
}

function getDataEpisodesPages() {
    return fetch('https://rickandmortyapi.com/api/episode')
        .then((response) => response.json()
        )
        .then((json) => {return (json.info.pages)}
        )
        
        .catch((err) => reject(err));
}

let episodeList = [];
function getDataEpisodes(numberPages) {
    for (let index = 1; index <= numberPages; index++) {
        return fetch(`https://rickandmortyapi.com/api/episode?page=${index}`)
        .then((response) => response.json()
        )
        .then(data=>{
            episodeList.push(data)
        })
        .catch((err) => reject(err));
    }
}
function removeTable() {
    if(document.getElementsByTagName('table').length > 0) {
        container.innerHTML = '';
    }
}

function removePageButtons() {
    let button = document.querySelector('.pageButtons');
    if(button != null) {
        container.removeChild(button);
    }
}

function searchFor() {
    console.log(characterList);
}
const characterInput = document.querySelector(".characterInput");
characterInput.addEventListener("input", ()=> {
    for (let index = 0; index < characterList.length; index++) {
        characterList[index].results.forEach(element => {
            if(element.name.includes(`${characterInput.value}`)) {
                container.innerHTML = `<img src=${element.image}>`;
            }
        });
        
    }
});
const favoritesButton = document.getElementById('favoriteButton').addEventListener("click",()=>{
    container.innerHTML = '';
    if(readCookieCharacter()!='') {


        readCookieCharacter().map(myFunction)

        function myFunction(num) {
            container.innerHTML += `<img class='favoriteCharacter'src=${num}><br>`;
        }


        /* readCookieCharacter().forEach(element => {------------------------------------------------------
            container.innerHTML += `<img class='favoriteCharacter'src=${element}><br>`;
        }); */
        container.innerHTML += `<button class='delete'>🗑️</button>`;
        document.querySelector(".delete").addEventListener("click",()=>{
            delete_cookie('character');
            container.innerHTML = '<h2 class=noCharacter>No favorite characters yet ! <br>Click one character to add here</h2>';
    });
    }
    else{
        container.innerHTML = '<h2 class=noCharacter>No favorite characters yet ! <br>Click one character to add here</h2>';
    }
});

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
let favoriteList = [];

function checkCharacter(element) {
    if(getCookie('character') != ''){
        favoriteList = getCookie('character');
        favoriteList += element+"-";
        setCookie('character', favoriteList, 1000);
        readCookieCharacter();
    }
    else{
        favoriteList += element+"-";
        setCookie('character', favoriteList, 1000);
    }
    
}
function readCookieCharacter() {
    let infoCookie = getCookie('character');
    infoCookie = infoCookie.split('-');
    infoCookie.pop();

    return infoCookie;
}

var delete_cookie = function(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};
//