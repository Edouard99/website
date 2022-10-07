import React from 'react'
import { AboutMe, ContactMe, Footer, Header, Projects, SideLinks, SideMenu } from './containers'
import { Navbar, Blur} from './components'
import './App.css';
import {useState} from 'react';



const App = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  
  return (
    
    <div className="App">
        <Navbar setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} lang={"fr"}/>
        {toggleMenu &&(
            <>
              <Blur />
              <SideMenu/>
            </>
            )
          }
        <Header lang={"fr"}/>
        <AboutMe lang={"fr"}/>
        <Projects/>
        <ContactMe/>
        <Footer/>
        <SideLinks/>
          

    </div>
    
  )
}

export default App