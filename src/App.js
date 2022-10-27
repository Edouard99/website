import React from 'react'
import { AboutMe, ContactMe, Footer, Header, Projects, SideLinks, SideMenu } from './containers'
import { Navbar, Blur, ResumeMenu} from './components'
import './App.css';
import {useState} from 'react';



const App = () => {
  let lang_list=navigator.languages
  let init_lang
  if (lang_list[0]=="fr" || lang_list[0]=="fr-FR"){
    init_lang=true;
  }
  else{
    init_lang=false;
  }
  const [toggleMenu, setToggleMenu] = useState(false);
  const [lang,setLang]=useState(init_lang);
  const [toggleResumeMenu,setToggleResumeMenu]=useState(false);

  
  return (
    
    <div className="App">
        <Navbar setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} setToggleResumeMenu={setToggleResumeMenu} setLang={setLang} lang={lang}/>
        {toggleMenu &&(
            <>
              <Blur />
              <SideMenu setLang={setLang} setToggleResumeMenu={setToggleResumeMenu} lang={lang}/>
   
            </>
            )
          }
        {toggleResumeMenu &&(
          <ResumeMenu setToggleResumeMenu={setToggleResumeMenu} lang={lang}/>
        )
        }
        <Header lang={lang}/>
        <AboutMe lang={lang}/>
        <Projects lang={lang}/>
        <ContactMe setToggleResumeMenu={setToggleResumeMenu} lang={lang}/>
        <Footer lang={lang}/>
        <SideLinks lang={lang}/>
          

    </div>
    
  )
}

export default App