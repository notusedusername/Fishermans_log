const faker = require('faker');
const fs = require('fs');

generateFisherman = (id) => {
  return {
      id: id,
      firstName : faker.name.firstName(),
      lastName: faker.name.lastName(),
      country: faker.address.country(),
      city: faker.address.city(),
      address: faker.address.streetAddress(),
      email: faker.internet.email(),
      telephone: faker.random.number()
  }
};

var fishermen = [];
for(let i = 1; i <= 100; i++){
    fishermen.push(generateFisherman(i));
}

generateLocation = (id) => {

    locationTypes = ['Lake', 'River', 'Sea'];
    var locName = faker.lorem.word();
    return {
        id: id,
        name: `${locName.slice(0,1).toUpperCase()}${locName.slice(1)} ${faker.random.arrayElement(locationTypes)}`,
        coordinates: `${faker.random.number()}, ${faker.random.number()}`
    }
};
var locations = [];
for(let i = 1; i <= 200; i++){
    locations.push(generateLocation(i));
}
generateCatch = (id) => {

    return {
        id: id,
        fisherman: faker.random.arrayElement(fishermen).id,
        location: faker.random.arrayElement(locations).id,
        timestamp: faker.date.recent(),
        weight: faker.random.number(),
        species: faker.lorem.words(2)
    }
};
var catches = [];

for(let i = 1; i <= 50; i++){
    catches.push(generateCatch(i));
}
var equipment = [
    {id: 1, name: "Very OP Fishing Pole", description: faker.lorem.paragraph()},
    {id: 2, name: "Not so OP but still very noice Pole", description: faker.lorem.paragraph()},
    {id: 3, name: "A random stick from the woods", description: "It's like Linux, it was free and it isn't user friendly most of the times, but I'm not a pussy."},
    {id: 4, name: "Dead bugs", description: "... that I found in this proto. Oh no, that ones are alive :/"},
    {id: 5, name: "Click here!", description: "It's a bait"},
    {id: 6, name: "Worms", description: "Armageddon"},
];

generateFisherEquipment = (id) => {


    return {
      id: id,
      fisherman: faker.random.arrayElement(fishermen).id,
      equipment: faker.random.arrayElement(equipment).id,
      additional_description: faker.lorem.paragraph()
  }
};
var fisherEquipment = [];

for(let i = 1; i < 400; i ++){
    fisherEquipment.push(generateFisherEquipment(i));
}
fishermen.push({id: 666, firstName: "Demo", lastName: "János", country: "Magyarország", city: "Bivalybasznád", address: "Csülök utca 31", email: "xXPussyDestroyerXx@freemail.com", telephone: "0640505050"});
equipment.forEach(value => {
    fisherEquipment.push({
            id: 400+value.id,
            fisherman: 666,
            equipment: value.id,
            additional_description: "My mema bouht me"
        }
    )
});


fs.writeFile('database.fake.json',
    JSON.stringify({
        fishermen: fishermen,
        locations: locations,
        catches: catches,
        fisher_equipment: fisherEquipment,
        equipment: equipment
    }), (err) => {});
