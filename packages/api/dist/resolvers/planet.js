"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swapi_1 = require("../connectors/swapi");
const path = '/planets/';
exports.default = (fetch) => ({
    RootQuery: {
        allPlanets: (_, params) => swapi_1.getPageFetcher(fetch)(path, params.offset, params.limit),
        planet: (_, params) => fetch(params.id || `${path}${params.planetID}/`),
    },
    Planet: {
        id: (planet) => planet.url,
        rotationPeriod: (planet) => planet.rotation_period,
        orbitalPeriod: (planet) => planet.orbital_period,
        surfaceWater: (planet) => planet.surface_water,
        residents: (planet, _, context) => context.loader.loadMany(planet.residents),
        films: (planet, _, context) => context.loader.loadMany(planet.films),
    },
});
//# sourceMappingURL=planet.js.map