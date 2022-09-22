import React from 'react';
import './sideMenu.css';
import { Menu} from '../../components'

const SideMenu = () => {
  return (
    <div className='ec__sideMenu'>
        <div className='ec__sideMenu-menu_container'>
            <Menu/>
        </div>
    </div>
  )
}

export default SideMenu