import React from 'react';
import Home from './pages/Home';
import './App.css'
import { Route, Router, } from 'react-router-dom';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="container">
      <Router>
        <>
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
          {/* <Navigate to='/' /> */}
        </>
      </Router>

      <Home/>
    </div>
  );
}

export default App;
