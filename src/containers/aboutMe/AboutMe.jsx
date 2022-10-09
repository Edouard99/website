import React, { Suspense } from 'react';
import './aboutMe.css';



const AboutMe = ({lang}) => {
  return (
    <div id="about_me" className='ec__AboutMe'>
      <div className='ec__AboutMe_Title'>
      {lang
          ? 
            <>
              <h1>À Propos</h1>
            </>
          :
            <>
              <h1>About Me</h1>
            </>
      }
      </div>
      <div className="ec__AboutMe_description_part1">
        {lang
          ? 
            <>
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
              
            </>
          : 
            <>
              <p> I am freshly graduated from ISAE-ENSMA where I obtained
              my Diplôme d'Ingénieur in Aeronautical Engineering and from 
              Illinois Institute of Technology where I obtained my Master in
              Engineering in Mechanical and Aerospace Engineering with a 
              specialization in Deep Learning and Embeded Autonomous Systems.
              </p>
              <p>I use</p>
            </>
          }
      </div>
      <div className='ec__AboutMe_description_part2'>
          {lang
            ? 
              <>
                <p style={{marginTop:"20px",textAlign:"justify-all",wordSpacing:"-2px"}}>
                  Jusqu'à aujourd'hui j'ai eu l'occasion de travailler sur différents projets en lien 
                  avec le Deep Learning et les systèmes autonomes.
                </p>
                <p style={{textAlign:"justify-all",wordSpacing:"-2px"}}>
                  Parmi ces projets j’ai eu l’occasion de travailler avec une équipe de 
                  recherche de l'IIT Chicago pendant 8 mois sur un projet de développement d’un outil éducatif basé sur la réalité mixte.
                </p>
                <p style={{marginTop:"10px"}}>
                  Durant ces différents projets j’ai eu 
                  l’occasion d’enrichir mes compétences en Deep Learning, systèmes embarqués, optimisation, automatisation, Game Design (AR/VR), 
                  Reseau.
                </p>
                <p style={{marginTop:"10px"}}>
                  Voici quelques technologies sur lequelles j'ai travaillé récemment:
                  
                </p>
                <ul className='ec__AboutMe_tech_list'>
                    <li>Unity & Hololens 2 – Environnement AR </li>
                    <li>Azure Storage & Azure Active Directory</li>
                    <li>Pytorch – Deep Learning (Classifier, Denoiser, GAN)</li>
                    <li>BLE & TCP Protocoles – Réseau</li>
                    <li>Raspberry PI 4 – Systeme Embarqué</li>
                    <li>React js – Développement  Web</li>
                  </ul>
                
              </>
            : 
              <>
                <p>
                  caca
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