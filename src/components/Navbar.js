import React, {useState} from 'react'
import { FaBars } from 'react-icons/fa'
import './Navbar.css'


const navbar = () => {
const [click, setclick] = useState(false)
const handleClick = () => setclick(!click)
  
  
  return (
    <div className="header">
      <div className="container">
        <h1>De<span className="primary">Fi</span></h1>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}/>
        <ul className='nav-menu'>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Featured</a>
          </li>
          <li>
            <a href="/">Earn</a>
          </li> 
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
        <div className='btn-group'>
          <button className='btn'>Connect Wallet</button>
        </div>
        <div className='hamburger'> onClick={handleClick}
        {click ? <FaTimes  size={20} style={{color: '#333'}}/> : (<FaBars size={20} style={{color: '#333'}} />)}
          
      </div>
    </div>
    </div>



  
        
  )
}

export default navbar