import { provide } from 'vue';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { MAIN_BASE_URL } from '@/constants';

export const provideGraphqlClient = () => {
  const API_URL = `${MAIN_BASE_URL}/graphql`;

  const httpLink = createHttpLink({
    uri: API_URL,
  });

  const cache = new InMemoryCache();

  const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
  });

  return provide(DefaultApolloClient, apolloClient);
};
