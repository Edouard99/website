import React from 'react'
import { AboutMe, ContactMe, Footer, Header, Projects, SideLinks, SideMenu } from './containers'
import { Navbar, Blur} from './components'
import './App.css';
import {useState} from 'react';



const App = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  
  return (
    
    <div className="App">
        <Navbar setToggleMenu={setToggleMenu} toggleMenu={toggleMenu}/>
        
        <Header />
        <AboutMe/>
        <Projects/>
        <ContactMe/>
        <Footer/>
        <div className='ec__overlay'>
          <SideLinks/>
          {toggleMenu &&(
            <>
              <Blur />
              <SideMenu/>
            </>
          
          )
          }
        </div>
        {/* <AboutMe/>
        <Projects/>
        <SideLinks/>
        <ContactMe/>
        <Footer/> */}

    </div>
    
  )
}

export default App