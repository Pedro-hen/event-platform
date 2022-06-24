import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o2cjmw07fh01xihrj6abx6/master',
    cache: new InMemoryCache()
})