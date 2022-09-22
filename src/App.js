import React from 'react'
import { sideMenu, Footer, AboutMe, Possibility, Features, WhatGPT3, Header, SideMenu } from './containers'
import { Cta, Brand, Navbar, Blur} from './components'
import './App.css';
import {useState} from 'react';



const App = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  
  return (
    


    <div className="App">
        <Navbar setToggleMenu={setToggleMenu} toggleMenu={toggleMenu}/>
        {toggleMenu &&(
          <>
            <Blur />
            <SideMenu/>
          </>
          
        )
        }
        <AboutMe />
        


        {/* <div className="gradient__bg">
          
          <Header/>
        </div> */}
        {/* <h2>Count: {count}</h2> */}
        {/* <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer /> */}
    </div>
  )
}

export default App