// ./apollo-client.js

import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphql.contentful.com/content/v1/spaces/vogyj7n17jpe',
  cache: new InMemoryCache(),
  headers: {
    Authorization: 'Bearer vtHpRySOMQqjhXKbjAsiYsE3CKNN7geBmjpLhWFgXGU',
  },
});

export default client;
