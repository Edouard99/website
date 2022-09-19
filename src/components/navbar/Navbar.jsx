import React, {useState} from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo"/>
        </div>
          <div className='gpt3__navbar-links_container'>
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GTP3</a></p>
            <p><a href="#possibility">OPEN AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className='gpt3__navbar-sign'>
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
          <div className='gpt3__navbar-menu'>
            {toggleMenu
              ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
              : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
            }
          </div>
      </div>
    </div>
  )
}

export default Navbar