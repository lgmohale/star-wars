"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swapi_1 = require("../connectors/swapi");
const path = '/people/';
exports.default = (fetch) => ({
    RootQuery: {
        allPeople: (_, params) => swapi_1.getPageFetcher(fetch)(path, params.offset, params.limit),
        person: (_, params) => fetch(params.id || `${path}${params.personID}/`),
    },
    Person: {
        id: (person) => person.url,
        hairColor: (person) => person.hair_color,
        skinColor: (person) => person.skin_color,
        eyeColor: (person) => person.eye_color,
        birthYear: (person) => person.birth_year,
        homeworld: (person, _, context) => context.loader.loadMany(person.homeworld),
        films: (person, _, context) => context.loader.loadMany(person.films),
        species: (person, _, context) => context.loader.loadMany(person.species),
        starships: (person, _, context) => context.loader.loadMany(person.starships),
        vehicles: (person, _, context) => context.loader.loadMany(person.vehicles),
    },
});
//# sourceMappingURL=people.js.map