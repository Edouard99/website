import React from 'react'
import { AboutMe, Footer, Header, Projects, SideLinks, SideMenu } from './containers'
import { Navbar, Blur} from './components'
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
        <Header />
        <AboutMe/>
        <Projects/>
        <SideLinks/>
        <Footer/>


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