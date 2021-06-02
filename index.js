// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:

const input = require('readline-sync');

let astronautCount = Number(input.question("How many astronauts are there? "));

let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astonautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = "100%";
let weatherStatus = "clear";
let totalMass = crewMassKg + fuelMassKg + shuttleMassKg;




// Write code to generate the LC04 report here:

console.log("------------------------------------- \n> LC04 - LAUNCH CHECKLIST \n-------------------------------------"); 
console.log("Date: " + date);
console.log("Time: " + time);

console.log("\r\n \r\n------------------------------------- \n> ASTRONAUT INFO \n-------------------------------------"); 
console.log("* count: " + astronautCount);
console.log("* status: " + astonautStatus);

console.log("\r\n \r\n------------------------------------- \n> FUEL DATA \n-------------------------------------"); 
console.log("* Fuel temp celsius: " + fuelTempCelsius + " C");
console.log("* Fuel level: " + fuelLevel);

console.log("\r\n \r\n------------------------------------- \n> MASS DATA \n-------------------------------------"); 
console.log("* Crew mass: " + crewMassKg + " kg");
console.log("* Fuel mass: " + fuelMassKg + " kg");
console.log("* Shuttle mass: " + shuttleMassKg + " kg");
console.log("* Total mass: " + totalMass + " kg");

console.log("\r\n \r\n------------------------------------- \n> > FLIGHT PLAN \n-------------------------------------"); 
console.log("* weather: " + weatherStatus);

console.log("\r\n \r\n------------------------------------- \n> OVERALL STATUS \n-------------------------------------"); 
console.log("* Clear for takeoff: " +  "YES" );




// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.