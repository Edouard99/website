import React from 'react';
import './project.css';

const Project = ({name,description,pic_link,topics,github,youtube,medium,colab,other}) => {
  return (
    <div className='ec__Project'>
        <p className='Name'>{name}</p>
        <p className='Description'>{description}</p>
    </div>
  )
}

export default Project