import React, { Suspense } from 'react';
import './header.css';
import {Object3dsat, Object3dsoyuz } from '../../components'



const Header = () => {
  return (
    <div className='ec__Header'>
      <div className='ec__Header_Intro'>
        <h4>Hey I am</h4>
        <h2 className='ec__Header_Intro_name'>Edouard Castets</h2>
      </div>
      <div className='ec__Header_Content'>
        <h3>I'm a Deep Learning lover</h3>
        <p>
          I am a software & aerospace engineer specialized in Deep Learning and autonomous embeded systems and above all passionated by technology and smart systems.
        </p>

      </div>
      <div className='ec__Header_3d_obj'>
        <Object3dsoyuz path_file={'soyuz.glb'}/>
        <Object3dsat path_file={'soyuz.glb'}/>
      </div>
      
    </div>
  )
}

export default Header