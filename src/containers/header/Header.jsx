import React, { Suspense } from 'react';
import './header.css';
import {Object3dsat, Object3dsoyuz } from '../../components'



const Header = ({lang}) => {
  return (
    <div className='ec__Header'>
      <div className='ec__Header_Intro'>
        {lang
          ? 
            <>
            <h4>Bonjour je m'appelle</h4>
            <h2 className='ec__Header_Intro_name'>Edouard Castets</h2>
            
            </>
          : 
            <>
            <h4>Hey I am</h4> 
            <h2 className='ec__Header_Intro_name'>Edouard Castets</h2>
            </>
        }
      </div>
      <div className='ec__Header_Content'>
        {lang
          ? 
            <>
              <h3>Je suis un passionné de Deep Learning</h3>
              <p style={{marginTop:"5px"}}>
                Je suis ingénieur spécialisé en Machine & Deep Learning et en systèmes embarqués autonomes.
              </p>
              <p style={{marginTop:"5px"}}>Mon ambition est de faire partie de la recherche dans l’innovation des systèmes de demain pour les rendre 
                        plus performants, plus fiables et intelligents.</p>
              
            </>
          : 
            <>
              <h3>I'm a Deep Learning lover</h3>
              <p style={{marginTop:"5px"}}>
              I am a software engineer specializing in Deep Learning and autonomous embedded systems.
              </p>
              <p style={{marginTop:"5px"}}>My goal is to take part in research on tomorrow's systems to make them more efficient, reliable, and intelligent.</p>
            </>
        }
      </div>
      <div className='ec__Header_3d_obj'>
        {/* <Object3dsoyuz path_file={'soyuz.glb'}/> */}
        <Object3dsat path_file={'soyuz.glb'}/>
      </div>
      
    </div>
  )
}

export default Header