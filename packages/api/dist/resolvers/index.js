"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const film_1 = require("./film");
const people_1 = require("./people");
const planet_1 = require("./planet");
const species_1 = require("./species");
const starship_1 = require("./starship");
const vehicle_1 = require("./vehicle");
exports.default = (fetch) => Object.assign({}, film_1.default(fetch), people_1.default(fetch), planet_1.default(fetch), species_1.default(fetch), starship_1.default(fetch), vehicle_1.default(fetch), {
    RootQuery: Object.assign({}, film_1.default(fetch).RootQuery, people_1.default(fetch).RootQuery, planet_1.default(fetch).RootQuery, species_1.default(fetch).RootQuery, starship_1.default(fetch).RootQuery, vehicle_1.default(fetch).RootQuery),
});
//# sourceMappingURL=index.js.map