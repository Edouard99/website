import React, { Suspense } from 'react';
import './aboutMe.css';



const AboutMe = ({lang}) => {
  return (
    <div id="about_me" className='ec__AboutMe'>
      <div className='ec__AboutMe_Title'>
      {lang
          ? 
            <>
              <h1>À propos</h1>
            </>
          :
            <>
              <h1>About me</h1>
            </>
      }
      </div>
      <div className="ec__AboutMe_description_part1">
        {lang
          ? 
            <>
              <p style={{marginBottom:"5px",textAlign:"justify-all",wordSpacing:"-2px"}}> 
                J'ai suivi un cursus double diplômant dans lequel j'ai obtenu :
              </p>
              <ul>
                  <li>un diplôme d’ingénieur Aéronautique de l’<a href="https://www.ensma.fr/" target="_blank">École Nationale Supérieure de Mécanique et d'Aérotechnique (ISAE-ENSMA – Poitiers, France)</a></li>
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
                  <li>a Diplôme d'Ingénieur in Aerospace Engineering from <a href="https://www.ensma.fr/en/" target="_blank">École Nationale Supérieure de Mécanique et d'Aérotechnique (ISAE-ENSMA – Poitiers, France)</a></li>
                  <li>a Master of Engineering in Aerospace Engineering from <a href="https://www.iit.edu/" target="_blank">Illinois Institute of Techonology (IIT – Chicago, IL, USA)</a></li>
              </ul>
              <p style={{marginTop:"5px",textAlign:"justify-all",wordSpacing:"-2px"}}> 
                During this double degree program, I specialized in Machine and Deep Learning and autonomous embedded systems.
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
                  Durant ces différents projets j’ai pu enrichir mes compétences en Deep Learning, systèmes embarqués, vision par ordinateur, optimisation, automatisation, game design (AR/VR) et 
                  réseau.
                </p>
                <p style={{marginTop:"10px"}}>
                  J'ai récemment pu travailler sur plusieurs cas de computer vision (classification de visages et d'images de drones sur la
                  base du modèle Inceptionv1 de GoogLeNet) mais aussi sur un cas d'analyse de séries temporelles (modèle prédictif financier 
                  basé sur le LSTM). Enfin je travaille actuellement sur un projet de computer vision visant à géolocaliser une image aérienne, je compte 
                  intégrer à ce modèle un procédé d'incremental few-shot learning.                  
                </p>
                <p style={{marginTop:"10px"}}>
                  Voici quelques technologies sur lesquelles j'ai travaillé récemment:
                  
                </p>
                <ul className='ec__AboutMe_tech_list'>
                    <li>Pytorch – Deep Learning (Computer vision, analyse de séries temporelles)</li>
                    <li>GitHub & GitHub Actions </li>
                    <li>Docker & Kubernetes - Déploiement</li>
                    <li>Pyspark & Databricks – Analyse de données</li>
                    <li>AWS & Google Colab – Cloud</li>
                    <li>Deep Face Lab – Deep Learning & technologies Deep Fake</li>
                  </ul>
                
              </>
            : 
              <>
                <p style={{marginTop:"20px",textAlign:"justify-all",wordSpacing:"-2px"}}>
                  So far, I have worked on different projects linked to Deep Learning and autonomous embedded systems.
                  
                </p>
                <p style={{textAlign:"justify-all",wordSpacing:"-2px"}}>
                  Among these projects, I have had the opportunity to work with a research team of IIT Chicago University for 8 months
                  on the development of an educational tool based on mixed reality.
                </p>
                <p style={{marginTop:"10px"}}>
                  My projects led me to acquire and increase my skills and knowledge in Deep Learning, embedded systems, computer vision, optimization, 
                  game design (AR/VR), and network.
                </p>
                <p style={{marginTop:"10px"}}>
                  I recently worked on several computer vision cases (face and UAV image classification based 
                  on GoogLeNet's Inceptionv1 model) but also on a time series analysis case (financial predictive 
                  model based on LSTM). Finally, I am currently working on a computer vision project aiming at 
                  geo-localizing an aerial image(I intend to integrate an incremental few-shot learning process to this model).
                </p>
                <p style={{marginTop:"10px"}}>
                  Here are some technologies I've been working with recently:
                  
                </p>
                <ul className='ec__AboutMe_tech_list'>
                    <li>Pytorch – Deep Learning (Computer vision, time series analysis)</li>
                    <li>GitHub & GitHub Actions </li>
                    <li>Docker & Kubernetes - Deployment</li>
                    <li>Pyspark & Databricks – Data Analysis</li>
                    <li>AWS & Google Colab – Cloud</li>
                    <li>Deep Face Lab – Deep Learning & Deep Fake Techonology</li>
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