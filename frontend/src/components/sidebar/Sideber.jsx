import React from 'react'
import './sidebar.css'
import Logo from '../../assets/logo.svg'

const Sideber = () => {
  return (
    <asside className='aside'>
      <a href="home" className='nav__logo'>
        <img src={Logo} alt="" />
      </a>

      <nav className="nav">
        <div className='nav__menu'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <a href="#home" className='nav__link'>Home</a>
              <i className='icon-home'></i>
            </li>
            <li className='nav__item'>
              <a href="#about" className='nav__link'>About</a>
            </li>
            <li className='nav__item'>
              <a href="#portfolio" className='nav__link'>Portfolio</a>
            </li>
            <li className='nav__item'>
              <a href="#resume" className='nav__link'>Resume</a>
            </li>
            <li className='nav__item'>
              <a href="#services" className='nav__link'>Services</a>
            </li>
            <li className='nav__item'>
              <a href="#blog" className='nav__link'>Blog</a>
            </li>
          </ul>
        </div>
        </nav>

        <div className='nav_footer'>
          <span className='copyright'>&copy; 2025 All rights reserved by Asen Chochev</span>
        </div>
    </asside>
  )
}

export default Sideber
