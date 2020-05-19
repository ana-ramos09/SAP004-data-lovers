import utils from './data.js';
import myObject from '../data/pokemon/pokemon.js';

const body = document.querySelector("body");
const menu = document.querySelector("#hamburguer-menu");
const topNav = document.querySelector("#links-menu");
const card = document.getElementById("card");
const mainToClose = document.querySelector("main");

if(body.id == "statistics"){
	let calc = utils.computeStats(myObject.pokemon);

	for(let key in calc){
		let type = document.createElement("h1");
		type.innerHTML = key;
	
		let maxCont = document.createElement("div");
		maxCont.className = "maxContDiv";
	
		let percentCont = document.createElement("div");
		percentCont.className = "percentage";
		percentCont.id = key.toLowerCase(key);
		percentCont.style.width = calc[key]["percent"] + "%";
	
		let paragraph = document.createElement("p");
		percentCont.append(paragraph);
		paragraph.innerHTML = calc[key]["percent"] + "%";
		
		document.getElementById("stats-container").append(type, maxCont);
		maxCont.append(percentCont);
	}
} 

menu.addEventListener("click", function(){
	if(topNav.style.display === "block") {
		topNav.style.display = "none";
	} else {
		topNav.style.display = "block";
		mainToClose.addEventListener("click", closeNav, true);
	}
});

window.addEventListener("resize", function(){
	if(window.innerWidth >= 800){
		topNav.style.display = "block";
	} else {
		closeNav();
	}
});

function closeNav(){
	topNav.style.display = "none"
}

function createMiniCard(n) {
	let newCard = document.createElement("DIV");
	document.getElementById("mini-card-container").appendChild(newCard);
	newCard.id = "pokemon" + n;
	newCard.className  = "mini-card-div";
	miniCardMouseEvents("pokemon" + n);
	
	let newImage = document.createElement("IMG");
	newCard.appendChild(newImage);
	newImage.className  = "mini-card-image";
	newImage.src=myObject.pokemon[n].img.replace("http://", "https://");

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

document.getElementById("clear-filter-button-home").addEventListener("click", clearFilter);

function clearFilter() {
	document.getElementById("filter-value").value = "default";
	document.getElementById("filter-type").value = "default";
	document.getElementById("mini-card-container").innerHTML = null;
	document.getElementById("search-home").innerHTML = null;
	createCard();
}

document.getElementById("search-button-home").addEventListener("click",createSearchedCards);

document.getElementById("search-home").addEventListener("keydown", function(event) {
	if (event.keyCode == 13) {
		createSearchedCards ();
	}
});

function createSearchedCards () {
	document.getElementById("mini-card-container").innerHTML = null;
	let searchValue = document.getElementById("search-home").value;
	let indexArray =  utils.searchBar(myObject, searchValue);
	
	for (let i = 0; i < indexArray.length; i++) {
		createMiniCard(indexArray[i]);
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

function minicardMouseClick(e){
	const firstHalfCard = document.getElementById("card-first-half");
	const secondHalfCard = document.getElementById("card-second-half");
	const pokedexMiddleDatail = document.getElementById("pokedex-middle-detail");
	const pokedexHinge = document.querySelector(".hinge");
	const btnViewMore = document.getElementById("view-more");
	const btnClose = document.getElementsByClassName("close-btn");
	const secondBtnBox = document.querySelector(".btn-box-2-section");
	const pokemonInfos = document.getElementById("pokemon-infos-card");
	const pokemonImg = document.getElementById("card-pokemon-img");
	const pokemonTypes = document.getElementsByClassName("pokemon-type");
	const pokemonEvolutions = document.getElementById("card-pokemon-evolutions");
	const pokemonCandys = document.getElementById("candys");

	if(window.innerWidth >= 800){
		card.style.display = "flex";
		firstHalfCard.style.display = "block";
		secondHalfCard.style.display = "flex";
		pokedexMiddleDatail.style.display = "flex";
		pokedexHinge.style.display = "block";
		btnViewMore.style.display = "none";
		secondBtnBox.style.display = "none";
	} else {
		card.style.display = "block";
		firstHalfCard.style.display = "block";
		secondHalfCard.style.display = "none";
		pokedexMiddleDatail.style.display = "none";
		pokedexHinge.style.display = "none";
		btnViewMore.style.display = "block";
		secondBtnBox.style.display = "flex";
	}
	
	(function reset(){
		pokemonImg.innerHTML = null;
		pokemonTypes[0].innerHTML = null;
		pokemonEvolutions.innerHTML = null;
		pokemonTypes[1].innerHTML = null;
		pokemonInfos.innerHTML = null;
		pokemonCandys.innerHTML = null;
	})();

	mainToClose.addEventListener("click", closeCard, true);
	btnClose[0].addEventListener("click", closeCard);
	btnClose[1].addEventListener("click", closeCard);
	btnViewMore.addEventListener("click", changeDisplay);
	document.getElementById("view-less").addEventListener("click", changeDisplay);

	function closeCard(){
		card.style.display = "none";
	}

	function changeDisplay(e){
		if(e.target.id == "view-more"){
			firstHalfCard.style.display = "none";
			secondHalfCard.style.display = "flex";
		} else {
			firstHalfCard.style.display = "block";
			secondHalfCard.style.display = "none";
		}
	}

	let selectedPokemonNum = e.currentTarget.id.slice(7);
	let selectedPokemon = myObject.pokemon[selectedPokemonNum];

	let pokemonName = document.createElement("h1");
	pokemonName.id = "pokemon-name";
	pokemonName.innerHTML = selectedPokemon.name;

	let pokemonNum = document.createElement("p");
	pokemonNum.id = "pokemon-number";
	pokemonNum.innerHTML = selectedPokemon.num;

	pokemonInfos.append(pokemonName, pokemonNum);

	let newImg = document.createElement("img");
	pokemonImg.appendChild(newImg);
	newImg.className = "pokemon-img";
	newImg.src = selectedPokemon.img;
	
	for(let type of selectedPokemon.type){
		let pokemonType = document.createElement("p");
		pokemonTypes[0].appendChild(pokemonType);
		pokemonType.innerHTML = type;
		pokemonType.id = type.toLowerCase(type);
	}

	let evolutionsTitle = document.createElement("h1");
	pokemonEvolutions.appendChild(evolutionsTitle);
	evolutionsTitle.className = "pokedex-titles";
	evolutionsTitle.innerHTML = "Evolutions";   

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
		evolutionImg.className = "pokemon-img pokemon-evolutions-img";
		evolutionImg.src = evolutionObj.img;

		let evolutionName = document.createElement("figcaption");
		evolutionName.className = "pokemon-infos pokemon-evolution-name";
		evolutionName.innerHTML = evolutionObj.name;

		evolutionFigure.append(evolutionImg, evolutionName);
		pokemonEvolutions.appendChild(evolutionFigure);
	}

	let pokemonWeaknessTitle = document.createElement("h1");
	pokemonWeaknessTitle.className = "pokedex-titles";
	pokemonWeaknessTitle.innerHTML = "Weaknesses";

	let weaknessesPBox = document.createElement("div");
	weaknessesPBox.classList = "weaknesses-p-box";

	pokemonTypes[1].append(pokemonWeaknessTitle, weaknessesPBox);

	for(let weaknessType of selectedPokemon.weaknesses){
		let pokemonWeaknessType = document.createElement("p");
		weaknessesPBox.appendChild(pokemonWeaknessType);
		pokemonWeaknessType.innerHTML = weaknessType;
		pokemonWeaknessType.id = weaknessType.toLowerCase(weaknessType);
	}

	let candysTitle = document.createElement("h1");
	candysTitle.className = "pokedex-titles";
	candysTitle.innerHTML = "Candy";  

	let candysP = document.createElement("p");
	candysP.id = "candy-p";
	pokemonCandys.append(candysTitle, candysP);

	const pokemonCandyP = document.getElementById("candy-p");

	if("candy_count" in selectedPokemon){
		pokemonCandyP.innerHTML = selectedPokemon.candy_count + " candies to evolve <img src='./img/GO_Rare_Candy.png' width='40px'>";
	} else {
		pokemonCandyP.innerHTML = "Can't evolve with candys";
	}
}