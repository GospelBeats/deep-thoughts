import React from 'react';
import { ApolloServerPluginDrainHttpServer, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

const httpLink = createHttpLink({
  uri: 'http://localhhost:3001/grahpl',
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className='flex-column justify-flex-start min-100-vh'>
      <Header />
      <div className='container'>
        <Home />
      </div>
      <Footer />
    </div>
    </ApolloProvider>
  );
}

export default App;
