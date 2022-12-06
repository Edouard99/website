import React from 'react';
import './projects.css';
import project_file from '../../Project.json'
import {Project} from '../../components/'
import { useState} from "react";


function What_to_display(lang,nbr_proj,showDivArray,mountSlide,sideDisplay){
  let list=[]
  let class_string_classic;
  let class_string_fade;
  for (let n=0;n<nbr_proj;n++){
    let data;
    if (lang){
      data=project_file.projects_fr[n]
    }
    else{
      data=project_file.projects_en[n]
    }
    if (sideDisplay){
      class_string_classic="ec__Project_right"
      class_string_fade="ec__Project_right fade"
    }
    else{
      class_string_classic="ec__Project_left"
      class_string_fade="ec__Project_left fade"
    }
    console.log(class_string_classic)
    list.push(
      <>
        {showDivArray[n] && 
              <Project z-index={1} id={data.id} name={data.name} description={data.description} pic_link={data.picture_link}
              topics={data.topics} github={data.github} youtube={data.youtube}
              medium={data.medium} colab={data.colab} other={data.otherlink}
              project_class={mountSlide[n] ? class_string_fade : class_string_classic}/>
        }
      </>
    )
    
  }
  return list;
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

function update_array(setshowDivArray,setMountSlide,size,setSlide_id,setIndexSlide,new_id,setSideDisplay,sideDisplay){
  let n=mod(new_id,size)
  setSideDisplay(!sideDisplay)
  setSlide_id(n);
  setIndexSlide(n);
  let showDivArray = Array(size).fill(false);
  let mountSlide = Array(size).fill(false);
  showDivArray[n]=true;
  mountSlide[n]=true
  setshowDivArray(showDivArray);
  setMountSlide(mountSlide);
}

const Projects = ({lang,indexSlide,setIndexSlide}) => {
  let nbr_proj=project_file.projects_fr.length;
  let index = indexSlide;
  if (indexSlide<0){
    setIndexSlide(0);
    index=0;
  }
  if (indexSlide>=nbr_proj){
    setIndexSlide(0);
    index=0;
  }
  const [slide_id, setSlide_id] = useState(index);
  const [sideDisplay, setSideDisplay] = useState(true);
  let init= Array(nbr_proj).fill(false);
  init[slide_id]=true;
  const [showDivArray, setshowDivArray] = useState(init);
  const [mountSlide, setMountSlide] = useState(init);
  return (
    <div id="projects" className='ec__Projects'>
        <div className='ec__Projects_title_section'>
          
          {lang
            ?
            <h1>Mes projets</h1>
            :
              <h1>Some of my projects</h1>
          }
        </div>
        <div className='ec__Project_box'>
          {What_to_display(lang,nbr_proj,showDivArray,mountSlide,sideDisplay)}
          <button className='ec__button ec__button_left'  onClick={() => {update_array(setshowDivArray,setMountSlide,nbr_proj,setSlide_id,setIndexSlide,slide_id-1,setSideDisplay,sideDisplay);}}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <svg width="24" height="24" style={{transform:"scale(0.75)"}} xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"/></svg>
          </button>
          <button className='ec__button ec__button_right'  onClick={() => {update_array(setshowDivArray,setMountSlide,nbr_proj,setSlide_id,setIndexSlide,slide_id+1,setSideDisplay,sideDisplay);}}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <svg width="24" height="24" style={{transform:"rotate(180deg) scale(0.75)"}} xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"/></svg>

          </button>
        </div>
        
    </div>
  )
}

export default Projects