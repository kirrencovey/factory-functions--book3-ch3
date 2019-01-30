// Write a factory function that creates an object that represents a pet.
// The function should accept two arguments.
//      1. Pet name
//      2. Pet breed
// Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels

let BowWowKennels = [];

const createPet = (name, breed) => {
    return {
        name: name,
        breed: breed
    }
}

BowWowKennels.push(createPet("Odin", "labrador"));
BowWowKennels.push(createPet("Thor", "labrador"));
BowWowKennels.push(createPet("Jack", "beagle"));
BowWowKennels.push(createPet("Jade", "pit bull"));


console.table(BowWowKennels);