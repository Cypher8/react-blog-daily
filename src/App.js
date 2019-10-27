import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Blog } from './views';
import { Container, CssBaseline } from '@material-ui/core';
import { Header, Footer } from './components';
import RouterApp from './routes';

function App() {
  return (
    <div >
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <RouterApp />
      </Container>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </div>
  );
}

export default App;
