import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './stores';
import { Container } from '@material-ui/core';
import { Header, Footer } from './components';
import RouterApp from './routes';
function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
        <Header />
        <RouterApp />
      </Container>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </Provider>
  );
}

export default App;
