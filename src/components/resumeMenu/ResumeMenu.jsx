import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './resumeMenu.css';

const ResumeMenu = ({setToggleResumeMenu,lang}) => {
  return (
    <>
      <div className='ec__resumeMenu_blur'></div>
      <div className='ec__resumeMenu_menu'>
        <RiCloseLine className='ec__resumeMenu_close' color="#fff" size={32} onClick={() => {setToggleResumeMenu(false)}}/>
        <div className='ec__resumeMenu_resume'>
          <div className='ec__resumeMenu_fr'>
            {lang
              ?
                <a href="./EdouardCastets_CV_FR.pdf" target="_blank" rel="noopener noreferrer">CV Français</a>
              :
                <a href="./EdouardCastets_CV_FR.pdf" target="_blank" rel="noopener noreferrer">French Resume</a>
            }
            
          </div>
          <div className='ec__resumeMenu_en'>
            {lang
              ?
                <a href="./EdouardCastets_Resume_EN.pdf" target="_blank" rel="noopener noreferrer">CV Anglais</a>
              :
                <a href="./EdouardCastets_Resume_EN.pdf" target="_blank" rel="noopener noreferrer">English Resume</a>
            }
          </div>

        </div>
        
      </div>
    </>
  )
}

export default ResumeMenu