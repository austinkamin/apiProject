const tHead = document.getElementById("tHead");
const tBody = document.getElementById("tBody");
// const searchCharacter = document.getElementById("searchCharacter");

const baseURL = 'https://swapi.co/api/people';
let url;

function searchCharacter() {
    fetch(baseURL)
    .then(response => {
        return response.json()

    })
    .then()
    url = baseURL + "/results"
    console.log(url[1])
}

