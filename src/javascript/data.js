const utils = {

  filterData: function(myObject, filterType, filterValue) {
    let filterArray = [];
    
    for (let i = 0 ; i < myObject.pokemon.length; i++) {

      if (filterType == "all") {
        filterArray.push(i);

      } else if (filterType == "type") {
        for (let j = 0 ; j < myObject.pokemon[i].type.length; j++) {
          if (myObject.pokemon[i].type[j] == filterValue) {
            filterArray.push(i);
          }
        }
      } else {
        for (let j = 0 ; j < myObject.pokemon[i].weaknesses.length; j++) {
          if (myObject.pokemon[i].weaknesses[j] == filterValue) {
            filterArray.push(i);
          }
        }
      }
    }
    return filterArray;
  },

  searchBar: function (myObject, searchString) {
    let indexArray = [];

    for (let i = 0; i < 151; i++) {

      if ((myObject.pokemon[i].name).toLowerCase().includes(searchString.toLowerCase())) {
        indexArray.push(i);
      }
    }
    return indexArray;
  },

  sortData: function(data, sortBy, sortOrder){
    switch(sortOrder){
      case "a-z":
        return data.sort(function(pokemonA, pokemonB){
          if(pokemonA[sortBy] > pokemonB[sortBy]){
            return 1;
          }
          return -1;
        });
      case "z-a":
        return data.sort(function(pokemonA, pokemonB){
          if(pokemonA[sortBy] < pokemonB[sortBy]){
            return 1;
          } 
          return -1;  
        });
      case "1-151":
        return data.sort(function(pokemonA, pokemonB){
          return pokemonA[sortBy] - pokemonB[sortBy];
        });
      case "151-1":
        return data.sort(function(pokemonA, pokemonB){
          return pokemonB[sortBy] - pokemonA[sortBy];
        });
    }
  },

  computeStats: function(data){
    let types = {};

    for(let x = 0; x < data.length; x++){
      data[x].type.forEach(function(elem){
        if(!(elem in types)){
          types[elem] = {total:1};
        } else {
          types[elem]["total"] += 1;
        }
      });
    }
    for(let type in types){
      types[type]["percent"] = Math.round((types[type]["total"] * 100) / 151);
    }
    return types;
  }
}

export default utils;