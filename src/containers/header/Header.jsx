import React, { Suspense } from 'react';
import './header.css';
import {Object_3d } from '../../components'



const Header = () => {
  return (
    <div className='ec__Header'>
      <div className='ec__Header_Descript'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Mauris rhoncus aenean vel elit scelerisque
            mauris pellentesque pulvinar. Adipiscing tristique
              risus nec feugiat in fermentum posuere urna. Etiam
              non quam lacus suspendisse faucibus. Aenean sed
                adipiscing diam donec adipiscing 
                tristique risus neec.</p>

      </div>
      <div className='ec__Header_3d_obj'>
        <Object_3d/>
      </div>
      
    </div>
  )
}

export default Header