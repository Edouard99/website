import React from 'react';
import './footer.css';

const Footer = ({lang}) => {
  return (
    <div className='ec__Footer'>
      <div className='ec__Footer_websitecode'>
        {lang
          ?
            <>
              <p>Site développé par <a href="https://github.com/Edouard99/website" target="_blank">Edouard Castets</a></p>
              <p>Design inspiré par <a href="https://brittanychiang.com/" target="_blank">Brittany Chiang template</a></p>
            </>
          :
            <>
              <p>Built and Designed by <a href="https://github.com/Edouard99/website" target="_blank">Edouard Castets</a></p>
              <p>Design inspired by <a href="https://brittanychiang.com/" target="_blank">Brittany Chiang's template</a></p>
            </>
        }
      </div>
    </div>
  )
}

export default Footer