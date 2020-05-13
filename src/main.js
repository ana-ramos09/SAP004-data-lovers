import utils from './data.js';
import myObject from './data/pokemon/pokemon.js';

function createMiniCard(n) {
	let newCard = document.createElement("DIV");
	document.getElementById("mini-card-container").appendChild(newCard);
    newCard.id = "pokemon" + n;
    newCard.className  = "mini-card-div";
    miniCardMouseEvents("pokemon" + n);
    
	let newImage = document.createElement("IMG");
	newCard.appendChild(newImage);
	newImage.className  = "mini-card-image";
    newImage.src=myObject.pokemon[n].img;

    let newText = document.createElement("TEXTAREA");
	newCard.appendChild(newText);
	newText.className  = "mini-card-text";
	newText.innerHTML = myObject.pokemon[n].name;
    newText.readOnly = "true";

    let newNumber = document.createElement("DIV");
	newCard.appendChild(newNumber);
	newNumber.className  = "mini-card-number";
	newNumber.innerHTML = myObject.pokemon[n].num;
}

function createCard(){
    for (let i = 0 ; i < 151; i++) {
        createMiniCard(i);
    }
}

createCard();
    
function miniCardMouseEvents(selectedDiv){
    let selectedMiniCard = document.getElementById(selectedDiv);
    selectedMiniCard.addEventListener("mouseover", minicardMouseOver);
    selectedMiniCard.addEventListener("mouseout", minicardMouseOut);
    selectedMiniCard.addEventListener("click", minicardMouseClick);
}

function minicardMouseOver() {
    let selectedMiniCard = event.currentTarget;
    selectedMiniCard.style = "z-index: 200";
    selectedMiniCard.className = "mini-card-div-highlight";
}

function minicardMouseOut() {
    let selectedMiniCard = event.currentTarget;
    selectedMiniCard.style = "z-index: 0";
    selectedMiniCard.className = "mini-card-div";
}

document.getElementById("filter-type").addEventListener("change", filters);
document.getElementById("filter-value").addEventListener("change", filters);


function filters(){

    let filterType = document.getElementById("filter-type").value;
    let filterValue = document.getElementById("filter-value").value;
    

    if (filterType != "default" && filterValue != "default"){
        let filterArray = [];
        document.getElementById("mini-card-container").innerHTML = null;
        
        filterArray = utils.filterData(myObject,filterType,filterValue);
        for (let i = 0 ; i < filterArray.length; i++) {
           
            createMiniCard(filterArray[i]);
        }
    } else {
        document.getElementById("mini-card-container").innerHTML = null;
        createCard();
    }

}

function clearFilter() {
    document.getElementById("filter-value").value = "default";
    document.getElementById("filter-type").value = "default";
    document.getElementById("mini-card-container").innerHTML = null;
    document.getElementById("search-home").innerHTML = null;
    createCard();
}

document.getElementById("clear-filter-button-home").addEventListener("click",clearFilter);


function createSearchedCards () {
    document.getElementById("mini-card-container").innerHTML = null;
    let searchValue = document.getElementById("search-home").value;
    let indexArray =  utils.searchBar(myObject, searchValue);
    
    for (let i = 0; i < indexArray.length; i++) {
        createMiniCard(indexArray[i]);
    }
}

document.getElementById("search-button-home").addEventListener("click",createSearchedCards);


document.getElementById("search-home").addEventListener("keydown", function(event) {
    if (event.keyCode == 13) {
        createSearchedCards ();
    }
});


function changeDisplay(e){
    if(e.target.id == "view-more"){
        document.getElementById("card-first-half").style.display = "none";
        document.getElementById("card-second-half").style.display = "block";
    } else {
        document.getElementById("card-second-half").style.display = "none";
        document.getElementById("card-first-half").style.display = "block";
    }
}

function minicardMouseClick(e){
    (function reset(){
        document.getElementById("card-pokemon-img").innerHTML = null;
        document.getElementsByClassName("pokemon-type")[0].innerHTML = null;
        document.getElementById("card-pokemon-evolutions").innerHTML = null;
        document.getElementsByClassName("pokemon-type")[1].innerHTML = null;
        document.getElementById("pokemon-infos-card").innerHTML = null;
    })();

    let card = document.getElementById("card");

    function close(){
        card.style.display = "none";
    }

    document.getElementById("inferior-container").addEventListener("click", close, true);
    document.getElementsByClassName("close-btn")[0].addEventListener("click", close);
    document.getElementsByClassName("close-btn")[1].addEventListener("click", close);
    document.getElementById("view-more").addEventListener("click", changeDisplay);
    document.getElementById("view-less").addEventListener("click", changeDisplay);

    card.style.display = "block";
    document.getElementById("card-first-half").style.display = "block";
    document.getElementById("card-second-half").style.display = "none";
  

    let selectedPokemonNum = e.currentTarget.id.slice(7);
    let selectedPokemon = myObject.pokemon[selectedPokemonNum];
    //let selectedPokemon = allPokemons.find(selectedPokemon => selectedPokemon.id == selectedPokemonNum);

    let pokemonName = document.createElement("h1");
    pokemonName.id = "pokemon-name";
    pokemonName.innerHTML = selectedPokemon.name;

    let pokemonNum = document.createElement("p");
    pokemonNum.id = "pokemon-number";
    pokemonNum.innerHTML = selectedPokemon.num;

    document.getElementById("pokemon-infos-card").append(pokemonName, pokemonNum);

    let newImg = document.createElement("img");
    document.getElementById("card-pokemon-img").appendChild(newImg);
    newImg.className = "pokemon-img";
    newImg.src = selectedPokemon.img;
    
    for(let type of selectedPokemon.type){
        let pokemonType = document.createElement("p");
        document.getElementsByClassName("pokemon-type")[0].appendChild(pokemonType);
        pokemonType.innerHTML = type;
        pokemonType.id = type.toLowerCase(type);
    }

    const evolutions = [];

    if("prev_evolution" in selectedPokemon){
        selectedPokemon.prev_evolution.forEach(function(prevEvolution){
            evolutions.push(prevEvolution.num);
        });
    }

    evolutions.push(selectedPokemon.num);

    if("next_evolution" in selectedPokemon){
        selectedPokemon.next_evolution.forEach(function(nextEvolution){
            evolutions.push(nextEvolution.num);
        });
    }

    for(let i = 0; i < evolutions.length; i++){
        const evolutionObj = myObject.pokemon.find(function(pokemonObj){
            return pokemonObj.num == evolutions[i];
        });

        let evolutionFigure = document.createElement("figure");
        evolutionFigure.className = "pokemon-evolutions";

        let evolutionImg = document.createElement("img");
        evolutionFigure.appendChild(evolutionImg);
        evolutionImg.className = "pokemon-img pokemon-evolutions-img";
        evolutionImg.src = evolutionObj.img;

        let evolutionName = document.createElement("figcaption");
        evolutionFigure.appendChild(evolutionName);
        evolutionName.className = "pokemon-infos pokemon-evolution-name";
        evolutionName.innerHTML = evolutionObj.name;

        document.getElementById("card-pokemon-evolutions").appendChild(evolutionFigure);
    }

    let pokemonWeaknessTitle = document.createElement("h1");
    document.getElementsByClassName("pokemon-type")[1].appendChild(pokemonWeaknessTitle);
    pokemonWeaknessTitle.className = "pokedex-titles";
    pokemonWeaknessTitle.innerHTML = "Weaknesses";

    for(let weaknessType of selectedPokemon.weaknesses){
        let pokemonWeaknessType = document.createElement("p");
        document.getElementsByClassName("pokemon-type")[1].appendChild(pokemonWeaknessType);
        pokemonWeaknessType.innerHTML = weaknessType;
        pokemonWeaknessType.id = weaknessType.toLowerCase(weaknessType);
    }

    if("candy_count" in selectedPokemon){
        document.getElementById("candy-p").innerHTML = selectedPokemon.candy_count + " candys";
    } else {
        document.getElementById("candy-p").innerHTML = "Can't evolve with candys";
    }
}

const sort = document.getElementById("sort-home");
sort.addEventListener("change", sortBy);

function sortBy(){
    switch(sort.value){
        case "a-z":
            utils.sortData(myObject.pokemon, "name", sort.value);
            break;
        case "z-a":
            utils.sortData(myObject.pokemon, "name", sort.value);
            break;
        case "1-151":
            utils.sortData(myObject.pokemon, "num", sort.value);
            break;
        case "151-1":
            utils.sortData(myObject.pokemon, "num", sort.value);
            break;
    }
    filters();
}
