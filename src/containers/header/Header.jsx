import React, { Suspense } from 'react';
import './header.css';
import {Object3d } from '../../components'



const Header = () => {
  return (
    <div className='ec__Header'>
      <div className='ec__Header_Descript'>
        <h4>Hey ! Welcome on my website I am </h4>
        <h2 className='ec__Header_Descript_name'>Edouard Castets</h2>
        <h3>I am software and aerospace engineer that works with Deep Learning to create cool things</h3>
        <p>
          I am a software & aerospace engineer specialized in Deep Learning and autonomous embeded systems and above all passionated by technology and smart systems.
        </p>

      </div>
      <div className='ec__Header_3d_obj'>
        <Object3d/>
      </div>
      
    </div>
  )
}

export default Header