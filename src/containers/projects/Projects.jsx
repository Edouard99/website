import React from 'react';
import './projects.css';
import project_file from '../../Project.json'
import {Project} from '../../components/'

const Projects = () => {
  return (
    <div className='ec__Projects'>
        {project_file.projects.map((data, key) => {
                return <>
                    <Project name={data.name} description={data.description} pic_link={data.picture_link}
                        topics={data.topics} github={data.github} youtube={data.youtube}
                        medium={data.medium} colab={data.colab} other={data.otherlink}/>
                    
                
                </>
                
            })}
    </div>
  )
}

export default Projects