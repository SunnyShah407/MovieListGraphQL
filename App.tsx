import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import apolloClient from './src/graphql/client';
import {MainNavigator} from './src/navigation/app.navigator';

function App(): JSX.Element {
  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
