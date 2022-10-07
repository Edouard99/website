import React from 'react';
import './menu.css';

const Menu = ({lang}) => {
  return (
    <>
        {(lang=="eng") 
          ? 
            <>
              <p><a href="#about_me">About</a></p>
              <p><a href="#projects">Projects</a></p>
              <p><a href="#contact_me">Contact</a></p>
              <p><a href="#resume">Resume</a></p>
            </>
          : 
            <>
              <p><a href="#about_me">A propos</a></p>
              <p><a href="#projects">Projets</a></p>
              <p><a href="#contact_me">Contact</a></p>
              <p><a href="#resume">Mon CV</a></p>
            </>
        }
    
    </>
  )
}

export default Menu