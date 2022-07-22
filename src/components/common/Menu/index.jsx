import React from 'react'
import './style.css'
import MenuItem from './MenuItem'

const Menu = ({ list}) => {
  return (
    <main>
        {list.map((item) =>(
          <MenuItem key={item.id} item={item}/>
        ))}
    </main>
  )
}

export default Menu;