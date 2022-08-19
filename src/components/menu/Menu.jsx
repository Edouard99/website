import React from 'react';
import './menu.css';

const Menu = ({setLang,setToggleResumeMenu,lang}) => {
  return (
    <>
        {lang
          ? 
            <>
              <p style={{textTransform:'none'}}><a href="./#about_me">À propos</a></p>
              <p><a href="./#projects">Projets</a></p>
              <p><a href="./#contact_me">Contact</a></p>
              <p><a onClick={() =>{setToggleResumeMenu(true)}}>Mon CV</a></p>
              <a title="Switch to English" className='button_lang button_lang_fr' onClick={() =>{setLang(!lang)}}><p></p></a>
              
            </>
          : 
            <>

              <p><a href="./#about_me">About</a></p>
              <p><a href="./#projects">Projects</a></p>
              <p><a href="./#contact_me">Contact</a></p>
              <p><a onClick={() =>{setToggleResumeMenu(true)}}>Resume</a></p>
              <a title="Passer en Francais" className='button_lang button_lang_en' onClick={() =>{setLang(!lang)}}><p></p></a>
            </>
        }
    
    </>
  )
}

export default Menu