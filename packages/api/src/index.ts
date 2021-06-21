import { loadSchema } from '@creditkarma/graphql-loader'
import { addResolveFunctionsToSchema } from 'graphql-tools'
import { GraphQLSchema } from 'graphql'
import getResolversWithFetchers from './resolvers/index'
import { getFetcher, getLoader } from './connectors/swapi'
import { startExpress } from './express'


const apiHost = process.env.API_HOST ? `${process.env.API_HOST}/api` : 'https://swapi.dev/api/'

const fetcher = getFetcher(apiHost)

const graphqlOptions = (schema: GraphQLSchema) => {
    return () => ({
        pretty: true,
        schema,
        context: {
            loader: getLoader(fetcher),
        },
    })
}

loadSchema('./schema/*.gql')
    .then(schema => {
        const resolvers = getResolversWithFetchers(fetcher)

        addResolveFunctionsToSchema(schema, resolvers)
        startExpress(graphqlOptions(schema))
    })
