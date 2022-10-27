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
                  <li>un Master of Engineering en Aérospatial de l’<a href="https://www.iit.edu/" target="_blank">Institut Technologique de l’Illinois (IIT – Chicago, IL, USA)</a></li>
              </ul>
              <p style={{marginTop:"5px",textAlign:"justify-all",wordSpacing:"-2px"}}> 
                Durant ce double diplôme, je me suis spécialisé en Machine et Deep Learning et systèmes autonomes embarqués.
              </p>
              
            </>
          : 
            <>
              <p style={{marginBottom:"5px",textAlign:"justify-all",wordSpacing:"-2px"}}> 
                I completed a double degree program earning both :
              </p>
              <ul>
                  <li>a Diplôme d'Ingénieur in Aeronautical Engineering from <a href="https://www.ensma.fr/en/" target="_blank">École Nationale Supérieure de Mécanique et d'Aérotechnique (ISAE-ENSMA – Poitiers, France)</a></li>
                  <li>a Master of Engineering in Aerospace Engineering from <a href="https://www.iit.edu/" target="_blank">Institut Technologique de l’Illinois (IIT – Chicago, IL, USA)</a></li>
              </ul>
              <p style={{marginTop:"5px",textAlign:"justify-all",wordSpacing:"-2px"}}> 
                During this double degree program, I have specialized in Machine and Deep Learning and autonomous embedded systems.
              </p>
            </>
          }
      </div>
      <div className='ec__AboutMe_description_part2'>
          {lang
            ? 
              <>
                <p style={{marginTop:"20px",textAlign:"justify-all",wordSpacing:"-2px"}}>
                  Jusqu'à aujourd'hui j'ai travaillé sur différents projets en lien 
                  avec le Deep Learning et les systèmes embarqués autonomes.
                </p>
                <p style={{textAlign:"justify-all",wordSpacing:"-2px"}}>
                  Parmi ces projets, j’ai eu l’occasion de travailler avec une équipe de 
                  recherche de l'université de l'IIT Chicago pendant 8 mois sur un projet de développement d’un outil éducatif basé sur la réalité mixte.
                </p>
                <p style={{marginTop:"10px"}}>
                  Durant ces différents projets j’ai pu enrichir mes compétences en Deep Learning, systèmes embarqués, optimisation, automatisation, Game Design (AR/VR) et 
                  réseau.
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
                <p style={{marginTop:"20px",textAlign:"justify-all",wordSpacing:"-2px"}}>
                  Fast-forward to today, I have worked on different projects linked to Deep Learning and autonomous embedded systems.
                  
                </p>
                <p style={{textAlign:"justify-all",wordSpacing:"-2px"}}>
                  Among these projects, I have had the opportunity to work with a research team of the IIT Chicago University for 8 months
                  on the development of an educational tool based on mixed reality.
                </p>
                <p style={{marginTop:"10px"}}>
                  My projects led me to acquire and increase my skills and knowledge in Deep Learning, embedded systems, optimization, 
                  Game Design (AR/VR) and network.
                </p>
                <p style={{marginTop:"10px"}}>
                  Here are some technologies I've been working with recently:
                  
                </p>
                <ul className='ec__AboutMe_tech_list'>
                    <li>Unity & Hololens 2 – AR Environment </li>
                    <li>Azure Storage & Azure Active Directory</li>
                    <li>Pytorch – Deep Learning (Classifier, Denoiser, GAN)</li>
                    <li>BLE & TCP Protocol – Network</li>
                    <li>Raspberry PI 4 – Embedded Systems</li>
                    <li>React js – Web Development</li>
                  </ul>
                
              </>
          }
          
      </div>
      <div className='ec__AboutMe_picture'>
          <img src="profil_pic_5.jpg"></img>
      </div>
    </div>
  )
}

export default AboutMe