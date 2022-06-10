// Write your JavaScript code here!
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
 
    // We are going to solve this by breaking the problem into three parts. 
    // Programmers like automating things, we'll populate the HTML drop down options using code, 
    // instead of having to type out all the values. 
    // Create a function that does the some math and gives us the new weight. 
    // Then create a function that responds when the user clicks on the button. 

    // 1. Populate the dropdown element with the data found in the planets array. 
    // The value of each option should be the planet's name. 
    // Use the following built-in methods: 
    // `.forEach` `document.createElement` `document.getElementById` `.appendChild` 

planets.forEach(function selectPlanet(planet) {
//    console.log("planet",planet,"planet[0]", planet[0])
    let select = document.getElementById("planets")
    let options = document.createElement("option");
// let planetName = document.createTextNode(planet[0]);
//options.appendChild(planetName);
    options.value = planet[0];
    options.innerText = planet[0];
    select.appendChild(options);
});

//function findWeight(item, index) {
//
//}


function calculateWeight(weight, planetName) { 
    // 2. Write the code to return the correct weight 
      //iterate through the planets array to find planetName
      //when we find planetName we'll get planetWeight
      //multiply planetWeight by weight
      //return answer
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
     // 3. Create a variable called userWeight and assign the value of the user's weight. 
    let userWeight = document.getElementById("user-weight").value
    console.log("userWeight",userWeight)
     // 4. Create a variable called planetName and assign the name of the selected planet from the drop down. 
    let planetName = document.getElementById("planets").value
    console.log("planetName", planetName)
    // 5. Create a variable called result and assign the value of the new calculated weight. 
    let result = calculateWeight(userWeight, planetName)
    console.log("result",result)
    // 6. Write code to display the message shown in the screenshot. 
    //If you were on (planetName), you would weigh (weight)lbs!
    document.getElementById("output").innerText = "If you were on " + planetName + ", you would weigh " + result + "lbs!"
} 

    // 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.
//document.getElementById("calculate-button").addEventListener('click', handleClickEvent)
    // 8. Make it look nice by attaching  a style.css file to your index.html and writing some basic styling, 
    // feel free to add classes and id's to the HTML elements as you need, 
    // import.a google font and use it for some or all of the text on your page. 


    // Bonus Challenges 
    // 8. Reverse the drop down order so that the sun is first.
