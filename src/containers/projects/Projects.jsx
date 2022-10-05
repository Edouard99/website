import React from 'react';
import './projects.css';
import project_file from '../../Project.json'
import {Project} from '../../components/'
import { useState} from "react";


function What_to_display(slide_id,project_array,showDivArray,mountSlide,sideDisplay){
  let list=[]
  let class_string_classic;
  let class_string_fade;
  for (let n=0;n<project_array.length;n++){
    let data=project_file.projects[n]
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

function update_array(setshowDivArray,setMountSlide,size,setSlide_id,new_id,setSideDisplay,sideDisplay){
  let n=mod(new_id,size)
  setSideDisplay(!sideDisplay)
  setSlide_id(n);
  let showDivArray = Array(size).fill(false);
  let mountSlide = Array(size).fill(false);
  showDivArray[n]=true;
  mountSlide[n]=true
  setshowDivArray(showDivArray);
  setMountSlide(mountSlide);
}

const Projects = () => {
  const [slide_id, setSlide_id] = useState(0);
  const [sideDisplay, setSideDisplay] = useState(true);
  let project_array=project_file.projects.map((data, key) => {
    return <>
        <Project id={data.id} name={data.name} description={data.description} pic_link={data.picture_link}
            topics={data.topics} github={data.github} youtube={data.youtube}
            medium={data.medium} colab={data.colab} other={data.otherlink}/>
    </>
  
  })
  let init= Array(project_array.length).fill(false);
  init[0]=true;
  const [showDivArray, setshowDivArray] = useState(init);
  const [mountSlide, setMountSlide] = useState(init);
  return (
    <div className='ec__Projects'>
        <h1 className='ec__Projects_title_section'>Some of my Projects</h1>
        <div className='ec__Project_box'>
          {What_to_display(slide_id,project_array,showDivArray,mountSlide,sideDisplay)}
          <button className='ec__button' style={{gridArea: "2/2/3/3"}} onClick={() => {update_array(setshowDivArray,setMountSlide,project_array.length,setSlide_id,slide_id-1,setSideDisplay,sideDisplay);}}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <svg width="24" height="24" style={{transform:"scale(0.75)"}} xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"/></svg>
          </button>
          <button className='ec__button' style={{gridArea: "2/-3/3/-2"}} onClick={() => {update_array(setshowDivArray,setMountSlide,project_array.length,setSlide_id,slide_id+1,setSideDisplay,sideDisplay);}}>
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