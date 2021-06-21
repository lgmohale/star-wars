"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_loader_1 = require("@creditkarma/graphql-loader");
const graphql_tools_1 = require("graphql-tools");
const index_1 = require("./resolvers/index");
const swapi_1 = require("./connectors/swapi");
const express_1 = require("./express");
const apiHost = process.env.API_HOST ? `${process.env.API_HOST}/api` : 'https://swapi.dev/api/';
const fetcher = swapi_1.getFetcher(apiHost);
const graphqlOptions = (schema) => {
    return () => ({
        pretty: true,
        schema,
        context: {
            loader: swapi_1.getLoader(fetcher),
        },
    });
};
graphql_loader_1.loadSchema('./schema/*.gql')
    .then(schema => {
    const resolvers = index_1.default(fetcher);
    graphql_tools_1.addResolveFunctionsToSchema(schema, resolvers);
    express_1.startExpress(graphqlOptions(schema));
});
//# sourceMappingURL=index.js.map