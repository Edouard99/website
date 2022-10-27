import React from 'react';
import './menu.css';

const Menu = ({setLang,lang}) => {
  return (
    <>
        {lang
          ? 
            <>
              <p><a href="./#about_me">À propos</a></p>
              <p><a href="./#projects">Projets</a></p>
              <p><a href="./#contact_me">Contact</a></p>
              <p><a href="./EdouardCastets_Resume_FR_EN.zip" target="_blank" rel="noopener noreferrer">Mon CV</a></p>
              <a title="Switch to English" className='button_lang button_lang_fr' onClick={() =>{setLang(!lang)}}><p></p></a>
              
            </>
          : 
            <>

              <p><a href="./#about_me">About</a></p>
              <p><a href="./#projects">Projects</a></p>
              <p><a href="./#contact_me">Contact</a></p>
              <p><a href="./EdouardCastets_Resume_FR_EN.zip" target="_blank" rel="noopener noreferrer">Resume</a></p>
              <a title="Passer en Francais" className='button_lang button_lang_en' onClick={() =>{setLang(!lang)}}><p></p></a>
            </>
        }
    
    </>
  )
}

export default Menu