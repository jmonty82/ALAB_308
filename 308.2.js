// Part 1

const PI = 3.1415;
const plantRadius = 5;
const Area = PI *plantRadius*plantRadius;

let minPlantSpace = 0.8;
const startingPlants = 20;

let plants1 = startingPlants;
plants1 = plants1 * 2;
    console.log('Plants Week 1: ', plants1)

plants2 = plants1 * 2;
    console.log('Plants Week 2: ', plants2)

plants3 = plants2 * 2;
    console.log('Plants Week 3: ', plants3)

const maxPlants = Area / minPlantSpace;
console.log('Capacity: ', maxPlants);

const eightyPercentOfMax = maxPlants * 0.8
console.log('80% of Capacity: ', eightyPercentOfMax);

// Week 1

let percent1 = (plants1 / maxPlants);
console.log('% of Total Capacity: ', percent1);

 if (percent1 > 0.8){
    console.log("Action:Pruned");
 }
 else if (percent1 >= 0.5 && percent1 <= 0.8) {
    console.log("Action:Monitored");
 }
 else {
    console.log("Action:Planted");
}

//Week 2
let percent2 = (plants2 / maxPlants);
console.log('% of Total Capacity: ', percent2);

 if (percent2 > 0.8){
    console.log("Action:Pruned");
 }
 else if (percent2 => 0.5 || percent2 <= 0.8) {
    console.log("Action:Monitored");
 }

 else {
    ("Action:Planted");
}

// Week 3
let percent3 = (plants3 / maxPlants);
console.log('% of Total Capacity: ', percent3);

 if (percent3 > 0.8){
    console.log("Action:Pruned");
 }
 else if (percent3 => 0.5 || percent3 <= 0.8) {
    console.log("Action:Monitored");
 }

 else {
    ("Action:Planted");
}

// Part 2
const PI = 3.1415;
const plantRadius = x;
const Area = PI *plantRadius*plantRadius;

let minPlantSpace = 0.8;
const startingPlants = 100;

let plantRadius = startingPlants;
for (i = startingPlants;i <= 1000 ; i *= 2){
    console.log(i, plants)}

// Part 3

 const PI = 3.1415;
const plantRadius = 5;
const Area = PI *plantRadius*plantRadius;

let minPlantSpace = 0.8;
const startingPlants = 20;


let percent1 = (plants1 / maxPlants);
console.log('% of Total Capacity: ', percent1);

 if (percent1 > 0.8)
    {
    throw error("Something went wrong.");
}
    {return "Valid Input";
    }
    try{
    console.log("Action:Pruned");
}
    catch (err) {
console.log(err.message);
}
 else if (percent1 >= 0.5 && percent1 <= 0.8) {
    console.log("Action:Monitored");
 }
 else {
    console.log("Action:Planted");}