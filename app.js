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
