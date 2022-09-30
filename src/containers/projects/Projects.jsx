import React from 'react';
import './projects.css';
import project_file from '../../Project.json'
import {Project} from '../../components/'
import { useState} from "react";

// function switch_project(direction,actual_pos){
//   let actual_slide = document.getElementsByClassName('project_'+actual_pos).item(0);
//   actual_slide.classList.add("zizi");

// }

const Projects = () => {
  const [slide_id, setSlide_id] = useState(0);
  let project_array=project_file.projects.map((data, key) => {
    return <>
        <Project id={data.id} name={data.name} description={data.description} pic_link={data.picture_link}
            topics={data.topics} github={data.github} youtube={data.youtube}
            medium={data.medium} colab={data.colab} other={data.otherlink}/>
    </>
    
  })
  console.log(slide_id);
  return (
    <div className='ec__Projects'>
        {project_array[slide_id]};
        <button className='ec__button' style={{gridArea: "2/1/3/2"}} onClick={() => {setSlide_id(Math.max(slide_id-1,0));}}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"/></svg>
        </button>
        <button className='ec__button' style={{gridArea: "2/-2/3/-1",transform:"rotate(180deg)"}} onClick={() => {setSlide_id(Math.min(slide_id+1,project_array.length-1));}}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"/></svg>

        </button>
    </div>
  )
}

export default Projects