import React from 'react'
import './Hero.css'

import arrow_icon from '../Assets/arrow-icon.png'
import heroimg from '../Assets/hero_img.png'


export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2> NEW ARRIVALS ONLY</h2>
            <div>
               <div className="hero-hand-icon">
                <p>new</p>
               </div>
            </div>
            <p>collections</p>
            <p>for everyone</p>
        <div className="hero-latest-btn"> 
            <div>  Latest collection </div>
            {<img src={arrow_icon} alt="" /> }
        </div>
        </div>



        <div className="hero-right">
            <img src={heroimg} alt="" />

        </div>
    
        
        </div>
  )
}
