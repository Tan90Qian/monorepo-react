import { ApolloClient, InMemoryCache } from "@apollo/client";

export function createGqlClient(uri = "/graphql") {
  const client = new ApolloClient({
    uri,
    cache: new InMemoryCache(),
  });

  return client;
}

export const gqlInstance = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});
