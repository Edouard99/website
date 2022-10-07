import React, { Suspense } from 'react';
import './aboutMe.css';



const AboutMe = ({lang}) => {
  return (
    <div className='ec__AboutMe'>
            <div className='ec__AboutMe_description'>
                {(lang=="eng") 
                  ? 
                    <>
                      <h1>About Me</h1>
                      <p> I am freshly graduated from ISAE-ENSMA where I obtained
                      my Diplôme d'Ingénieur in Aeronautical Engineering and from 
                      Illinois Institute of Technology where I obtained my Master in
                      Engineering in Mechanical and Aerospace Engineering with a 
                      specialization in Deep Learning and Embeded Autonomous Systems.
                      </p>
                      <p>I use</p>
                    </>
                  : 
                    <>
                      <h1>About Me</h1>
                      <p style={{marginBottom:"5px",textAlign:"justify-all",wordSpacing:"-2px"}}> 
                        J'ai suivi un cursus double diplomant dans lequel j'ai obtenu :
                      </p>
                      <ul>
                          <li>un diplôme d’ingénieur en Aéronautique de l’<a href="https://www.ensma.fr/" target="_blank">École Nationale Supérieure de Mécanique et d'Aérotechnique (ISAE-ENSMA – Poitiers, France)</a></li>
                          <li>un Master of Engineering en Aérospatiale de l’<a href="https://www.iit.edu/" target="_blank">Institut Technologique de l’Illinois (IIT – Chicago, IL, USA)</a></li>
                      </ul>
                      <p style={{marginTop:"5px",textAlign:"justify-all",wordSpacing:"-2px"}}> 
                        Durant ce double Diplôme je me suis spécialisé en Machine et Deep Learning et Systemes Autonomes.
                      </p>
                      <p style={{marginTop:"10px",textAlign:"justify-all",wordSpacing:"-2px"}}>
                        Jusqu'à aujourd'hui j'ai eu l'occasion de travailler sur différents projets en lien 
                        avec le Deep Learning et les systèmes autonomes.
                      </p>
                      <p style={{textAlign:"justify-all",wordSpacing:"-2px"}}>
                        Parmi ces projets j’ai eu l’occasion de travailler avec une équipe de 
                        recherche de l'IIT Chicago sur un projet de développement d’un outil éducatif basé sur la réalité mixte.
                      </p>
                      <p style={{marginTop:"10px"}}>
                        Durant ces différents projets j’ai eu 
                        l’occasion d’enrichir mes compétences en Deep Learning, Systèmes embarqués, Optimisation, Automatisation, MX Game Design, 
                        Reseau.
                      </p>
                    </>
                }
                
            </div>
            <div className='ec__AboutMe_picture'>
                <img src="profil_pic.JPG"></img>
            </div>
    </div>
  )
}

export default AboutMe