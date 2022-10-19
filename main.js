
var planets = [ 
    ['Pluto', 0.06], 
    ['Neptune', 1.148], 
    ['Uranus', 0.917], 
    ['Saturn', 1.139], 
    ['Jupiter', 2.640], 
    ['Mars', 0.3895], 
    ['Moon', 0.1655], 
    ['Earth', 1], 
    ['Venus', 0.9032], 
    ['Mercury', 0.377], 
    ['Sun', 27.9] 
];



planets.forEach(function selectPlanet(planet) {

    let select = document.getElementById("planets")
    let options = document.createElement("option");

    options.value = planet[0];
    options.innerText = planet[0];
    select.appendChild(options);
});

function calculateWeight(weight, planetName) { 
    
    for(let i = 0; i < planets.length; i++){
        console.log("planetname",planetName,"i",i,"planets[i]", planets[i], "planets[i][0]", planets[i][0])
        if(planetName == planets[i][0]){
            console.log('if statement')
            console.log("answer",planets[i][1] * weight)
            return planets[i][1] * weight
        }
    }
} 
function handleClickEvent(e) {

    let userWeight = document.getElementById("user-weight").value
    console.log("userWeight",userWeight)
    
    let planetName = document.getElementById("planets").value
    console.log("planetName", planetName)

    let result = calculateWeight(userWeight, planetName)
    console.log("result",result)
    
    document.getElementById("output").innerText = "If you were on " + planetName + ", you would weigh " + result + "lbs!"
} 
