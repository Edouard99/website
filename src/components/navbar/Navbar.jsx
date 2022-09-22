import React, {useState} from 'react';
import { Logo_static } from '..'
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Menu} from '..'
import logo from '../../assets/logo.svg';



const Navbar = ({setToggleMenu,toggleMenu}) => {
  return (
    <>
    <div className='ec__navbar'>
      <div className='ec__navbar-links_logo'>
          {/* <img src={logo} alt="logo"/> */}
          <Logo_static />
        </div>
      <div className='ec__navbar-links'>
        
        <div className='ec__navbar-links_container'>
          <Menu />
        </div>
      </div>
      
      <div className='ec__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => {setToggleMenu(false)}}/>
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
        }
        {/* {toggleMenu && (
        <div className='ec__navbar-menu_container scale-up-center'>
          <div className='ec__navbar-menu_container-links'>
            <Menu />
          </div>
        </div>
        )} */}
      </div>
    </div>
    {/* { toggleMenu &&(
      <div className='ec__navbar-blur'>

      </div>
    )} */}
      
    </>
  )
}

export default Navbar