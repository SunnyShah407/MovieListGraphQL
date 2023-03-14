import {ApolloClient, InMemoryCache} from '@apollo/client';
const baseURL = 'https://swapi-graphql.netlify.app/.netlify/functions/index';
export default new ApolloClient({
  uri: baseURL,
  cache: new InMemoryCache(),
});
