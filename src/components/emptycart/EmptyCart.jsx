import React from 'react'
import './empty.css'
import emptyimg from './emptycart.png'
import { useNavigate } from 'react-router-dom'


const EmptyCart = () => {
  const history = useNavigate();

  return (
    <div className='emptyCart'> 
        <img src={emptyimg} alt='empty'/>
        <button onClick={() => history.push('/')}>
          <i className='fas fa-long-arrow-alt-left'></i>Shop Now
          </button>
    </div>
  )
}

export default EmptyCart