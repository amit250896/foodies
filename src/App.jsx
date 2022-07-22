import React from 'react';
import Home from './Home';
import './App.css'
import { Routes ,Route, Navigate,} from 'react-router-dom';
import Cart from './Cart';


function App() {
  return (
    <div className="container">
     <>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/' element={<Navigate replace to = '/Home' />} />
     </Routes>  
     </>
    </div>
  );
}

export default App;
