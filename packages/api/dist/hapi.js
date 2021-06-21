"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startHapi = void 0;
const hapi = require("hapi");
const apollo = require("graphql-server-hapi");
const hapiPort = process.env.HAPI_PORT || 8000;
async function startHapi(graphqlOptions) {
    const server = new hapi.Server({
        host: 'localhost',
        port: hapiPort,
    });
    await server.register({
        options: {
            graphqlOptions,
            path: '/graphql',
        },
        plugin: apollo.graphqlHapi,
    });
    await server.register({
        options: {
            graphiqlOptions: {
                endpointURL: '/graphql',
            },
            path: '/',
        },
        plugin: apollo.graphiqlHapi,
    });
    await server.start();
    console.log(`HAPI server is listen on ${hapiPort}`);
    console.log(`open browser to http://localhost:${hapiPort}`);
}
exports.startHapi = startHapi;
//# sourceMappingURL=hapi.js.map