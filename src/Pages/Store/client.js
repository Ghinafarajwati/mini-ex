import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://special-orca-96.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "csBK8XcK7VxqDThN31V7UwG6LkQ4TEKE8n4BNUmniDhC5ZknxefZVQPpLIB73OEO",
  },
  cache: new InMemoryCache(),
});

export default client;
