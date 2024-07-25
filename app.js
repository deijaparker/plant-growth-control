// Part 1: Growing Pains

const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const minSpacePerPlant = 0.8;
const initialPlants = 20;
const maxCapacity = Math.floor(area / minSpacePerPlant);

function calculatePlantGrowth(weeks) {
    let plants = initialPlants;
    for (let i = 0; i < weeks; i++) {
        plants *= 2;
    }
    return plants;
}

function getRecommendation(weeks) {
    const plants = calculatePlantGrowth(weeks);
    const capacityPercentage = (plants / maxCapacity) * 100;

    if (capacityPercentage > 80) {
        return "Prune the plants.";
    } else if (capacityPercentage > 50) {
        return "Monitor the plants.";
    } else {
        return "Plant more plants.";
    }
}

const weeks1 = 1;
const weeks2 = 2;
const weeks3 = 3;

console.log(`Week ${weeks1}: ${getRecommendation(weeks1)}`);
console.log(`Week ${weeks2}: ${getRecommendation(weeks2)}`);
console.log(`Week ${weeks3}: ${getRecommendation(weeks3)}`);

// Part 2: Thinking Bigger

const initialPlantsPart2 = 100;
const weeksPart2 = 10;

function calculateAdditionalSpace(initialPlants, weeks) {
    let plants = initialPlants;
    for (let i = 0; i < weeks; i++) {
        plants *= 2;
    }
    const requiredSpace = plants * minSpacePerPlant;
    return requiredSpace;
}

const additionalSpace = calculateAdditionalSpace(initialPlantsPart2, weeksPart2);
const newRadius = Math.sqrt(additionalSpace / PI);

console.log(`Additional space required: ${additionalSpace.toFixed(2)} square meters`);
console.log(`New radius of the garden: ${newRadius.toFixed(2)} meters`);

// Part 3: Errors in Judgement

const initialPlantsPart3 = 100;
const weeksPart3 = 10;

try {
    const plantsPart3 = calculatePlantGrowth(weeksPart3);
    const requiredSpacePart3 = plantsPart3 * minSpacePerPlant;

    if (requiredSpacePart3 > area) {
        throw new Error("The required space exceeds the available space in the garden.");
    }

    console.log(`The required space is ${requiredSpacePart3.toFixed(2)} square meters, which is within the garden's capacity.`);
} catch (error) {
    console.error(error.message);
}