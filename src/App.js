import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Componentes
import Navbar from './components/NavBar';
import Footer from './components/Footer';

// Páginas 
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products'
import NotFound from './components/pages/NotFound';



function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component= {Home} />
        <Route path='/services' exact component= {Services} />
        <Route path='/products' exact component= {Products} />
        <Route component= {NotFound} />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
