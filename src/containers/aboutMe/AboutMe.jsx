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
                  Au cours de mon séjour aux Etats-Unis j’ai travaillé avec une équipe de 
                  recherche de l'université de l'IIT Chicago pendant 8 mois sur un projet de développement d’un outil éducatif basé sur la réalité mixte.
                </p>
                <p>

                </p>
                <p style={{marginTop:"10px",textAlign:"justify-all",wordSpacing:"-2px"}}>
                  Je suis désormais en poste en tant qu'ingénieur Deep Learning chez Pacte Novation pour qui j'effectue des missions de prestation. Parmi ces missions j'ai notamment travaillé chez Parrot sur le développement
                  d'un modèle IA de stéréovision pour leur futur drone. Je suis actuellement en mission chez Thalès Six GTS pour qui je développe un outil de vérification de données.
                </p>
                <p>
                  
                </p>
                <p style={{marginTop:"10px",textAlign:"justify-all",wordSpacing:"-2px"}}>
                  En parallèle de ma mission, je travaille sur un projet de recherche personnel soutenu par mon entreprise. Ce projet a pour objectif de développer un modèle de Deep Learning pour la géolocalisation d'image aérienne 
                  dans le cadre de ma passion pour l'OSINT et le GEOINT.
                </p>
                <p style={{marginTop:"10px",textAlign:"justify-all",wordSpacing:"-2px"}}>
                  Durant ces différents projets j’ai pu enrichir mes compétences en Deep Learning, systèmes embarqués, vision par ordinateur, optimisation, automatisation, game design (AR/VR) et 
                  réseau.
                </p>
                <p style={{marginTop:"10px",textAlign:"justify-all",wordSpacing:"-2px"}}>
                  Voici quelques technologies sur lesquelles j'ai travaillé récemment:
                  
                </p>
                <ul className='ec__AboutMe_tech_list'>
                    <li>Pytorch – Deep Learning (Computer vision, Analyse de séries temporelles)</li>
                    <li>Transformers (Swin-B,Focal Transformer, Cross attention)</li>
                    <li>GitHub & GitHub Actions </li>
                    <li>Docker & Kubernetes - Déploiement</li>
                    <li>Pyspark & Databricks – Analyse de données</li>
                    <li>AWS & Google Colab – Cloud</li>
                    <li>Deep Face Lab – Deep Learning & technologies Deep Fake</li>
                    <li>Google Earth Engine & Pro (Imagerie Satellite)</li>
                  </ul>
                
              </>
            : 
              <>
                <p style={{marginTop:"20px",textAlign:"justify-all",wordSpacing:"-2px"}}>
                  So far, I have worked on different projects linked to Deep Learning and autonomous embedded systems.
                  
                </p>
                <p style={{textAlign:"justify-all",wordSpacing:"-2px"}}>
                  During my stay in the US, I have had the opportunity to work with a research team of IIT Chicago University for 8 months
                  on the development of an educational tool based on mixed reality.
                </p>
                <p style={{marginTop:"10px",textAlign:"justify-all",wordSpacing:"-2px"}}>
                  I joined Pacte Novation as a Deep Learning engineer, I carry out a number of consulting missions.
                  Among these missions, I worked for Parrot on the development of a deep leaning stereovision model for their future UAV. 
                  I'm currently on a mission at Thalès Six GTS, where I'm developing a data verification tool.
                </p>
                <p style={{marginTop:"10px",textAlign:"justify-all",wordSpacing:"-2px"}}>
                  In parallel to my mission, I am working on a personal research project supported by my company. 
                  The aim of this project is to develop a Deep Learning model for aerial image geolocation. This project is motivated by my passion for OSINT and GEOINT.
                </p>
                <p  style={{marginTop:"10px",textAlign:"justify-all",wordSpacing:"-2px"}}>
                  My projects led me to acquire and increase my skills and knowledge in Deep Learning, embedded systems, computer vision, optimization, 
                  game design (AR/VR), and network.
                </p>
                <p style={{marginTop:"10px",textAlign:"justify-all",wordSpacing:"-2px"}}>
                  Here are some technologies I've been working with recently:
                  
                </p>
                <ul className='ec__AboutMe_tech_list'>
                    <li>Pytorch – Deep Learning (Computer vision, time series analysis)</li>
                    <li>Transformers (Swin-B,Focal Transformer, Cross attention)</li>
                    <li>GitHub & GitHub Actions </li>
                    <li>Docker & Kubernetes - Deployment</li>
                    <li>Pyspark & Databricks – Data Analysis</li>
                    <li>AWS & Google Colab – Cloud</li>
                    <li>Deep Face Lab – Deep Learning & Deep Fake Techonology</li>
                    <li>Google Earth Engine & Pro (Satellite Imagery)</li>
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