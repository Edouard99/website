import React from 'react';
import './logo_static.css';

const Logo_static = () => {
  return (
        <>
            <div className='hexacontainer'>
                <div className='hexa_a'>
                    <span className='hexa_6'></span>
                    <span className='hexa_3'></span>
                </div>
                <div className='hexa_b'>
                    <span className='hexa_1'></span>
                    <span className='hexa_4'></span>
                </div>
                <div className='hexa_c'>
                    <span className='hexa_2'></span>
                    <span className='hexa_5'></span>
                </div>
                <div className='ec_init'>
                    <p>EC</p>
                </div>

            </div>
        </>
  )
}

export default Logo_static