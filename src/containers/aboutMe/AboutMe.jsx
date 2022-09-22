import React, { Suspense } from 'react';
import './aboutMe.css';
// import { useGLTF } from '@react-three/drei/core/useGLTF';
// import { Canvas} from "react-three-fiber";

// function Croissant() {
//   const { scene } = useGLTF('kiwi.gltf')
//   return <primitive object={scene} />;
// }



const AboutMe = () => {
  return (
    <div className='ec_AboutMe'>
      <div className='ec__AboutMe_Descript'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Mauris rhoncus aenean vel elit scelerisque
            mauris pellentesque pulvinar. Adipiscing tristique
              risus nec feugiat in fermentum posuere urna. Etiam
              non quam lacus suspendisse faucibus. Aenean sed
                adipiscing diam donec adipiscing 
                tristique risus neec.</p>

      </div>
      <div className='ec__AboutMe_3d_obj'>
        {/* <Canvas camera={{position: [0,0,0], fov:0.5}}>
          <pointLight position={[10,10,10]} intensity={1.3}/>
          <Suspense fallback={null}>
            <Croissant/>
          </Suspense>

        </Canvas> */}
      </div>
      
    </div>
  )
}

export default AboutMe