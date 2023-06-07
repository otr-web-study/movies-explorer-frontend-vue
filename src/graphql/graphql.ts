import { provide } from 'vue';
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloLink,
  concat,
} from '@apollo/client/core';
import { DefaultApolloClient, provideApolloClient } from '@vue/apollo-composable';
import { MAIN_BASE_URL } from '@/constants';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export const provideGraphqlClient = () => {
  const API_URL = `${MAIN_BASE_URL}/graphql`;
  const { getValue } = useLocalStorage();

  const httpLink = createHttpLink({
    uri: API_URL,
  });

  const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {}, withAuth = false }) =>
      withAuth
        ? {
            headers: {
              ...headers,
              authorization: `Bearer ${getValue('token', '')}`,
            },
          }
        : { headers },
    );

    return forward(operation);
  });

  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          movies: {
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  });

  const apolloClient = new ApolloClient({
    link: concat(authMiddleware, httpLink),
    cache,
  });

  provideApolloClient(apolloClient);

  return provide(DefaultApolloClient, apolloClient);
};
