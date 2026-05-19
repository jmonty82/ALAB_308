const solarSystem = [
    { name: "Mercury", ringSystem: false, moons: [] },
    { name: "Venus", ringSystem: false, moons: [] },
    { name: "Earth", ringSystem: false, moons: ["The Moon"] },
    { name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
    { name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
    { name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
    { name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
    { name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }
];
// Print the array of Jupiter’s moons to the console(no for loop, just print the entire array).
console.log(solarSystem[4].moons);

// // Print the name of Neptune’s moon “Nereid” to the console.
console.log(solarSystem[7].moons[1]);

// // Add a new moon called “Endor” to Venus’ moons array.
(solarSystem[1].moons.push("Endor"));
console.log(solarSystem[1])

// // Add a Pluto object to the solarSystem array using.push.The object should contain Pluto’s name, ringSystem boolean, and moons array (which includes “Charon”).
solarSystem.push({ name: "Pluto", ringSystem: false, moons: ["Charon"] });
console.log(solarSystem)

// Add a new key value pair to the the Earth object: the key should be ‘diameter’, and the value should be Earth’s diameter in miles represented as a string.
solarSystem[2]["diameter"] = "7926";
console.log(solarSystem[2]);

// Change Mercury’s ringSystem boolean to true.
solarSystem[0]["ringSystem"] = true;
console.log(solarSystem[0]);

// Change Uranus’ moon “Umbriel” to “Oberon”
solarSystem.at(-3).moons.pop();
solarSystem.at(-3).moons.push("Oberon");
console.log(solarSystem.at(-3));

// Iterate through the solarSystem array and print only the objects that have a ringSystem(where ringSystem: true), and ignore the others.You want to make a loop that goes over each item in the array, and include an if statement.
for (let planet of solarSystem) {
    if (planet.ringSystem === true) {
        console.log("8:", planet);
    }
}
// Part 2
const system = {
    mercury:
    {
        radiusp: 'same ',
        name: 'Mercury',
        density: 5.43,
        tilt: 2,
        image: 'textures/mercury.gif',
        rotationperiod: 1408,
        period: 0.24,
        radiuse: 2439,
        satellites: 0,
        au: 0.3871,
        eccentricity: 0.206,
        velocity: 47.89,
        mass: 0.06,
        inclination: 7
    },
    venus:
    {
        radiusp: 'same ',
        name: 'Venus',
        density: 5.25,
        tilt: 177.3,
        image: 'textures/venus.gif',
        rotationperiod: 5832,
        period: 0.62,
        radiuse: 6052,
        satellites: 0,
        au: 0.7233,
        eccentricity: 0.007,
        velocity: 35.04,
        mass: 0.82,
        inclination: 3.4
    },
    earth:
    {
        radiusp: 6357,
        name: 'Earth',
        density: 5.52,
        tilt: 23.45,
        image: 'textures/earth.gif',
        rotationperiod: 23.93,
        period: 1,
        radiuse: 6378,
        satellites: 1,
        au: 1,
        eccentricity: 0.017,
        velocity: 29.79,
        mass: 1,
        inclination: 0
    },
    mars:
    {
        radiusp: 3380,
        name: 'Mars',
        density: 3.95,
        tilt: 25.19,
        image: 'textures/mars.gif',
        rotationperiod: 24.62,
        period: 1.88,
        radiuse: 3397,
        satellites: 2,
        au: 1.524,
        eccentricity: 0.093,
        velocity: 24.14,
        mass: 0.11,
        inclination: 1.85
    },
    jupiter:
    {
        radiusp: 66854,
        name: 'Jupiter',
        density: 1.33,
        tilt: 3.12,
        image: 'textures/jupiter.gif',
        rotationperiod: 9.92,
        period: 11.86,
        radiuse: 71490,
        satellites: '69',
        au: 5.203,
        eccentricity: 0.048,
        velocity: 13.06,
        mass: 317.89,
        inclination: 1.3
    },
    saturn:
    {
        radiusp: 54360,
        name: 'Saturn',
        density: 0.69,
        tilt: 26.73,
        image: 'textures/saturn.gif',
        rotationperiod: 10.66,
        period: 29.46,
        radiuse: 60268,
        satellites: 30,
        au: 9.539,
        eccentricity: 0.056,
        velocity: 9.64,
        mass: 95.18,
        inclination: 2.49
    },
    uranus:
    {
        radiusp: 24973,
        name: 'Uranus',
        density: 1.29,
        tilt: 97.86,
        image: 'textures/uranus.gif',
        rotationperiod: 17.24,
        period: 84.01,
        radiuse: 25559,
        satellites: 24,
        au: 19.19,
        eccentricity: 0.046,
        velocity: 6.81,
        mass: 14.53,
        inclination: 0.77
    },
    neptune:
    {
        radiusp: 24340,
        name: 'Neptune',
        density: 1.64,
        tilt: 29.6,
        image: 'textures/neptune.gif',
        rotationperiod: 16.11,
        period: 164.79,
        radiuse: 25269,
        satellites: 8,
        au: 30.06,
        eccentricity: 0.01,
        velocity: 5.43,
        mass: 17.14,
        inclination: 1.77
    },
    pluto:
    {
        radiusp: 'same',
        name: 'Pluto',
        density: 2.03,
        tilt: 122.46,
        image: 'textures/pluto.gif',
        rotationperiod: 153.3,
        period: 248.54,
        radiuse: 1160,
        satellites: 1,
        au: 39.48,
        eccentricity: 0.248,
        velocity: 4.74,
        mass: 0.002,
        inclination: 17.15
    }
}
// console.log the mass of Mercury
console.log("mass:") + console.log(system.mercury.mass);
// console.log the eccentricity of Venus
console.log("eccentricity:") + console.log(system.venus.eccentricity);
// console.log the sum of the number of satellites of Jupiter, Saturn, Uranus, and Neptune (131)
const printSum = (sys) => {
    let sum = 0;
    for (s in sys) {
        if (
            s === 'jupiter' ||
            s === 'saturn' ||
            s === 'uranus' ||
            s === 'neptune'
        ) {
            sum += Number(sys[s].satellites);
        }
    }
    return sum;
};
console.log(printSum(system));
// Write a conditional that checks if Mercury’s radiusp is a string (remember the typeof operator). If Mercury’s radiusp is a string, change the value to be the same as its radiuse value. (radiusp is radius at the poles, radiuse is radius at the equator).
// console.log Mercury’s radiusp (should be 2439, not ‘same’).
if (typeof system['mercury']['radiusp'] === typeof '') {
    system['mercury']['radiusp'] = system['mercury']['radiuse'];
}
console.log(system['mercury']);
// Find the difference between Jupiter’s momentum and Pluto’s momentum. (To get momentum, you’ll want the product of velocity and mass).
function planetsMomentum() {

    console.log("Jupiter - Velocity:", system.jupiter["velocity"], " Mass:", system.jupiter["mass"]);
    console.log("Pluto - Velocity:", system.pluto["velocity"], " Mass:", system.pluto["mass"]);

    let jupiterMass = system.jupiter.mass;
    let jupiterVelocity = system.jupiter.velocity;

    let plutoMass = system.pluto.mass;
    let plutoVelocity = system.pluto.velocity;

    let jupiterMomentum = jupiterMass * jupiterVelocity;
    let plutoMomentum = plutoMass * plutoVelocity;

    console.log("Jupiter Momentum:", jupiterMomentum);
    console.log("Pluto Momentum:", plutoMomentum);

    let difference = jupiterMomentum - plutoMomentum;
    console.log("Momentum Difference:", difference);
}

planetsMomentum();
// Planet X
// Outside of any of these predefined solar system objects, make your own object called PlanetX. Give PlanetX the same properties as a planet within system (eg. density, tilt, mass) and give it made-up values.

// Without directly altering either the system object or the PlanetX object, include planetX as a property of system. (Your planetX object is a planet within the system).

// When you console.log(system), planetX should be appear as a planet in the system.
let PlanetX = {
    radiusp: 6811,
    name: 'PlanetX',
    density: 3.0,
    tilt: 132.46,
    image: 'textures/planetx.gif',
    rotationperiod: 163.3,
    period: 258.64,
    radiuse: 2271,
    satellites: 2,
    au: 40.59,
    eccentricity: 1.359,
    velocity: 5.85,
    mass: 1.113,
    inclination: 28.26,
};
system['PlanetX'] = PlanetX;
console.log(system);
// The Challenge
// Use .sort() to sort the solar system array alphabetically according to the name of each planet.
console.log(Object.entries(system).sort(([a], [b]) => a.localeCompare(b)));
// SuperStretchGoals
let movies = [
    {
        title: 'Dayereh',
        director: 'Jafar Panahi',
        year: 2000
    },
    {
        title: 'Eraserhead',
        director: 'David Lynch',
        year: 1978
    },
    {
        title: 'L\'Avventura',
        director: 'Michelangelo Antonioni',
        year: 1960
    }
]

const sortArrayOfObjects = (arr, key) => {
    if (typeof arr[0][key] === typeof '') {
        return arr.sort((a, b) => a[key].localeCompare(b[key]));
    }
    return arr.sort((a, b) => a[key] - b[key]);
};
// console.log(sortArrayOfObjects(movies, 'title'));
// console.log(sortArrayOfObjects(movies, 'director'));
console.log(sortArrayOfObjects(movies, 'year'));