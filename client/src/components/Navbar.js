import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useState } from "react";



const Navbar = () => {
    const [click, setClick]= useState(false)


    const handleClick = () =>setClick(!click)
    const closeMobileMenu = () =>setClick(false)
  return (
    <>
    <nav className='navbar'>

        <div className='container flex_space'>
            <div className='meni-icon' onClick={handleClick}>
            <i class= {click? "fas fa-times": "fas fa-bars" }></i>

        </div>

        <ul className={click? 'nav-menu active': "nav-menu" }>
            <li>
              <li><Link to='/' onClick={closeMobileMenu}>Home</Link></li>
              <li><Link to='/nouveautés' onClick={closeMobileMenu}>Nouveautés</Link></li>
              <li><Link to='/kits' onClick={closeMobileMenu}>Kits</Link></li>
              <li><Link to='/fils' onClick={closeMobileMenu}>Fils</Link></li>
              <li><Link to='/toiles' onClick={closeMobileMenu}>Toiles</Link></li>
              <li><Link to='/accessoires' onClick={closeMobileMenu}>Accessoires</Link></li>
              <li><Link to='/support' onClick={closeMobileMenu}>Support</Link></li>
              <li><Link to='/coussins' onClick={closeMobileMenu}>Coussins</Link></li>
              <li><Link to='/vétements' onClick={closeMobileMenu}>Vétements</Link></li>
              <li><Link to='/contact' onClick={closeMobileMenu}>Contact</Link></li>
                
            </li>
            </ul>

            <div className='Login-area flex'>
                <li>
                    <Link to='/register'>
                    <i className='far fa-chevron-right'>Register</i>
                    </Link>
                </li>

                <li>
                    <link to='/contact'>
                    <button className='primary-btn'>Request a Quote</button>
                    </link>
                </li>

            </div>
            </div>


    </nav>

    <header>
        <div className="container.flex-space">
            <div className='logo'>
                <img src="mahdiya/logo.png" alt=""/>

            </div>
            <div className='contact flex_space'>
                <div className='icons'>
                    <i className='fas fa-phone-volume'></i>
                </div>
                <div className='text'>
                    <h4>Call Us Hours</h4>
                    <links to="/contact">+216 55 254 256</links>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Navbar