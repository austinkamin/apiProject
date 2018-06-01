const tHead = document.getElementById("tHead");
const tBody = document.getElementById("tBody");
const searchChar = document.getElementById("searchChar");
const starWarsPeopleList = document.querySelector('section');


const baseURL = 'https://swapi.co/api/people';
let url;

function searchCharacter() { 
    fetch(baseURL) 
    .then(response => {
        console.log(response)
        return response.json() 

    })
    .then(function(json) {
        doSomeStuff(json);
       
    })  
}


function doSomeStuff(json){
    console.log(json);

    const characters = json.results;
    for ( character of characters) {
        console.log(character.name)
        let characterName = character.name
        let characterBirthYear = character.birth_year
        let characterGender = character.gender
        let characterHairColor = character.hair_color
        let characterHeight = character.height
        let characterMass = character.mass
        let characterEyeColor = character.eye_color

        let listItem = document.createElement('div'); 
        listItem.innerHTML = '<p <font color = "yellow">' + '<font color = "yellow">' + characterName + '<br>' + "Birth Year:" + ' ' + characterBirthYear + '<br>' + "Gender:" + ' ' + characterGender + '<br>' + "Hair Color:" + ' ' + characterHairColor + '<br>' + "Eye color:" + ' ' + characterEyeColor + '<br>' + "Eye Color:" + ' ' + characterEyeColor + '<br>' + "Height:" + ' ' + characterHeight + '<br' + "Mass:" + ' ' + character.mass + '</p>';
        
        starWarsPeopleList.appendChild(listItem);  
    }
}


