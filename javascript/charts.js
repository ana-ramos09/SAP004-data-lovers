import myObject from '../data/pokemon/pokemon.js';

function typeChart (pokemonType) {
  let pokemonQtd = 0;
  let typeArray = [];
  for (let i = 0; i < 151; i++) {
      if (myObject.pokemon[i].type.includes(pokemonType)) {
      pokemonQtd++;
      }
  typeArray = [pokemonType, pokemonQtd];
  }
  return typeArray;
}

function chartDataType () {
  let allPokemonsTypes = ["Bug", "Dragon", "Electric", "Fighting", "Fire", "Flying", "Ghost", "Grass", "Ground", "Ice", "Normal", "Poison", "Psychic", "Rock", "Water"];
  let chartArray = [];
  for (let i = 0; i <allPokemonsTypes.length; i++) {
    chartArray.push(typeChart(allPokemonsTypes[i]));
  }
  return chartArray;
}

function eggChart(eggStatus) {
  let pokemonQtd = 0;
  let eggArray = [];
  for (let i = 0; i < 151; i++) {
    if (myObject.pokemon[i].egg.includes(eggStatus)) {
    pokemonQtd++;
    }
  }
  eggArray = [eggStatus, pokemonQtd];
return eggArray;
}

function chartDataEgg() {
  let eggsOccurences = ["Not in Eggs", "2 km", "5 km", "10 km"];
  let eggsChartArray = [];
  for (let i = 0; i < eggsOccurences.length; i++) {
    eggsChartArray.push(eggChart(eggsOccurences[i]));
  }
return eggsChartArray;
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

document.getElementById("chart-types").addEventListener("change", loadChart);
document.getElementById("chart-values").addEventListener("change", loadChart);

function loadChart () {
  google.charts.setOnLoadCallback(drawChart);
} 

drawChart();

function drawChart() {
  if(!google.visualization)
    return;
  
  let chartValue = document.getElementById("chart-values").value;
  let dataArray = [];
  let options = {};

  if (chartValue == "type") {
    dataArray = chartDataType();
    options = {'title':"Percentage of Pokémon Types", 'backgroundColor':'transparent', 'width':600, 'height':450};

    if(window.innerWidth <= 450){
      options.width = 300, options.height = 250;
    } else if(window.innerWidth <= 650){
      options.width = 400, options.height = 350;
    }
  } else if (chartValue == "egg") {
    dataArray = chartDataEgg();
    options = {'title':"Number of Pokémon Found in Eggs", 'backgroundColor':'transparent', 'width':600, 'height':450};

    if(window.innerWidth <= 450){
      options.width = 300, options.height = 250;
    } else if(window.innerWidth <= 650){
      options.width = 400, options.height = 350;
    }
  }

  let data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Pokémon Found \nin Eggs');
  data.addRows(dataArray);

  let chart;
  let chartType = document.getElementById("chart-types").value;
  if (chartType == "Pie") {
    chart = new google.visualization.PieChart(document.getElementById('chart-div'));
    chart.draw(data, options);
  } else if (chartType == "Bar") {
    chart = new google.visualization.BarChart(document.getElementById('chart-div'));
    chart.draw(data, options);
  }
}

