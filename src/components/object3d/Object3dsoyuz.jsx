import React from 'react';
import './object3d.css';
import { useState, useEffect, useRef } from "react";
//import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
//import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
var soyuz;

function loadGLTFModel(scene, glbPath) {
  return new Promise((resolve, reject) => {
    
    const loader = new RGBELoader();
    //loader.load(
    loader.load( 'royal_esplanade_1k.hdr', ( texture ) => {

      texture.mapping = THREE.EquirectangularReflectionMapping;

      // scene.background = texture;
      scene.environment = texture;

      const loader2 = new GLTFLoader();
      loader2.load( glbPath, function ( gltf ) {
        soyuz = gltf.scene
        scene.add( soyuz );
        resolve(soyuz);

      } );

  },
  undefined,
  function (error) {
    console.log(error);
    reject(error);
  } );
  });
}

const Object = ({path_file}) => {
  const refContainer = useRef();
  const [loading, setLoading] = useState(true);
  const [renderer, setRenderer] = useState();

  useEffect(() => {
    const { current: container } = refContainer;
    if (container && !renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;
      const renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: true,
        premultipliedAlpha : false
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      const scene = new THREE.Scene();
      const scale = 25;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      );
      camera.position.y = 25;
      camera.position.x = 2;
      camera.position.z = 0;
      camera.rotation.y = 45* Math.PI /180;
      camera.rotation.z = 45* Math.PI /180;
      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);
      // const controls = new OrbitControls(camera, renderer.domElement);
      // controls.autoRotate = true;
      // controls.target = target;
      
      loadGLTFModel(scene, path_file, {
      }).then((soyuz) => {
        animate(soyuz);
        setLoading(false);
      });

      let req = null;
      const animate = () => {
        req = requestAnimationFrame(animate);
        soyuz.rotation.y+=0.01;
        renderer.render(scene, camera);
      };

      return () => {
        cancelAnimationFrame(req);
        console.log("hello");
        renderer.dispose();
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='container_3d'
      ref={refContainer}
    >
      {loading && (
        <span style={{ left: "50%", top: "50%" }}>
          Loading...
        </span>
      )}
    </div>
  );
};


const Object3dsoyuz = ({path_file}) => {
  return (
    <Object path_file={path_file}/>
  )
}

export default Object3dsoyuz