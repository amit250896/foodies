import React from 'react'
import './style.css';
import bannerimg from './banner.png'
import Logo from '../../common/Logo';

const Banner = () => {
    return (
        <header>
            <div className='header-content'>
                <Logo />
                <div className='content-main'>
                    <h1>Delicious food for your craving</h1>
                    <p>We made fresh and healthy meals with different recipes.</p>
                    <button>
                        View Menu <i className='fas fa-long-arrow-alt-right'></i>
                    </button>
                </div>
            </div>
            <img src={bannerimg} alt='' className='header-img'/>
        </header>
    )
}

export default Banner