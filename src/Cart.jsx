import React from 'react'
import Logo from './components/common/Logo'
import { menuItemsData } from './components/common/Menu/data';
import Menu from './components/common/Menu';
import './App.css'
import Footers from './components/common/Footer';
import EmptyCart from './components/emptycart/EmptyCart';
 

const Cart = () => {
  return (
    <>
      <div className='cart-header'>
        <Logo/>
        </div>
        <EmptyCart />
        <div className='orders'>
          <h1 className='orders-heading'>Your Orders</h1>
          <div className='orders-menu'>
            <Menu list={menuItemsData}/>
          </div>
          <h3 className='orders-total'>Total Rs 500</h3>
        </div>
        <Footers/>
    </>
  )
}

export default Cart