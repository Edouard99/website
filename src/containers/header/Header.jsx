import React, { Suspense } from 'react';
import './header.css';
import {Object3dsat, Object3dsoyuz } from '../../components'



const Header = ({lang}) => {
  return (
    <div className='ec__Header'>
      <div className='ec__Header_Intro'>
        {(lang=="eng") 
          ? 
            <>
            <h4>Hey I am</h4> 
            <h2 className='ec__Header_Intro_name'>Edouard Castets</h2>
            </>
          : 
            <>
            <h4>Bonjour je suis</h4>
            <h2 className='ec__Header_Intro_name'>Edouard Castets</h2>
            </>
        }
      </div>
      <div className='ec__Header_Content'>
        {(lang=="eng") 
          ? 
            <>
              <h3>I'm a Deep Learning lover</h3>
              <p>
                I am a software engineer specialized in Deep Learning and autonomous embeded systems.
              </p>
              <p> I am passionated about AI, new technology and smart systems.</p>
            </>
          : 
            <>
              <h3>Je suis un passionné de Deep Learning</h3>
              <p>
                Je suis Ingénieur spécialisé en Machine & Deep Learning et en systems embarqués autonomes.
              </p>
              <p style={{marginTop:"5px"}}>Mon ambition est de faire partie de la recherche dans l’innovation des systèmes de demain pour les rendre 
                        plus performants, plus fiables et intelligents</p>
              {/* <p>L'intelligence artificielle et les nouvelles technologies me passionnent.</p> */}
            </>
        }
      </div>
      <div className='ec__Header_3d_obj'>
        <Object3dsoyuz path_file={'soyuz.glb'}/>
        <Object3dsat path_file={'soyuz.glb'}/>
      </div>
      
    </div>
  )
}

export default Header