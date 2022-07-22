import React from 'react'
import Banner from './components/Home/Banner'
import Menu from './components/common/Menu/index';
import Footers from './components/common/Footer/index';
import CartCountButton from './components/common/CartCountButton/index';
import { menuItemsData } from './components/common/Menu/data';

 
const Home = () => {
    return (
        <div>
            <Banner />
            <Menu list={menuItemsData} />
            <Footers />
            <CartCountButton />
            
         </div>
    )
}

export default Home