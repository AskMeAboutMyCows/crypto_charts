import React from 'react'
import './Hero.css'
import Crypto from './assets/hero-image.png'


export const Hero = () => {
  return (
    <div className='hero'>
        <div className='container'>

            {/* Left side */}
            <div className='left'>
                <p> Buy & Sell Crypto 24/7 using your retirement account </p>
                <h1> Invest in Cryptocurrency with your IRA</h1>
                <p> Buy, sell, and store hundreds of cryptocurrencies with your IRA. </p>
                <div className='input-container'>
                    <input type='email' placeholder='Enter your email' />
                    <button className='btn'> Get Started </button>
                </div>
            </div>
            </div>
            </div>


            {/* Right side */}
            <div className='right'>
                <div className='img-container'>
                    <img src={Crypto} alt='Crypto' />



    </div>
    </div>
  )
}


export default Hero








