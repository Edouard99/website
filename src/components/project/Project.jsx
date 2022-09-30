import React from 'react';
import './project.css';

const Project = ({id,name,description,pic_link,topics,github,youtube,medium,colab,other}) => {
    let class_string
    let display;
    if(id%2===0){
      return (
        <div className="ec__Project_right">
          <div className='ec__Project_right_description'>
            <h3 className='Name'>{name}</h3>
            <p className='Description_text'>{description}</p>
          </div>
          
          <img src="profil_pic.JPG"></img>
        </div>
      )
    }
    else{
      return (
        <div className="ec__Project_left">
          <div className='ec__Project_left_description'>
            <h3 className='Name'>{name}</h3>
            <p className='Description_text'>{description}</p>
          </div>
          
          <img src="profil_pic.JPG"></img>
        </div>
      )
    }
    
}

export default Project