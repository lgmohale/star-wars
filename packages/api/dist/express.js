"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startExpress = void 0;
const express = require("express");
const bodyParser = require("body-parser");
const apollo = require("graphql-server-express");
const expressPort = process.env.EXPRESS_PORT || 3000;
const app = express();
function startExpress(graphqlOptions) {
    app.use(bodyParser.json());
    app.use('/graphql', apollo.graphqlExpress(graphqlOptions));
    app.use('/', apollo.graphiqlExpress({ endpointURL: '/graphql' }));
    app.listen(expressPort, () => {
        console.log(`Express server is listen on ${expressPort}`);
    });
}
exports.startExpress = startExpress;
//# sourceMappingURL=express.js.map