import React, { Suspense } from 'react';
import './aboutMe.css';



const AboutMe = () => {
  return (
    <div className='ec__AboutMe'>
            <div className='ec__AboutMe_description'>
                <h1>About Me</h1>
                <p> I am freshly graduated from ISAE-ENSMA where I obtained
                my Diplôme d'Ingénieur in Aeronautical Engineering and from 
                Illinois Institute of Technology where I obtained my Master in
                Engineering in Mechanical and Aerospace Engineering with a 
                specialization in Deep Learning and Embeded Autonomous Systems.
                </p>
                <p>I use</p>
            </div>
            <div className='ec__AboutMe_picture'>
                <img src="profil_pic.JPG"></img>
            </div>
    </div>
  )
}

export default AboutMe