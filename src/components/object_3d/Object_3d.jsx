import React from 'react';
import './object_3d.css';
import { useState, useEffect, useRef } from "react";
//import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
//import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
var model;

function loadGLTFModel(scene, glbPath, options) {
  const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    
    const loader = new RGBELoader();
    //loader.load(
    loader.load( 'royal_esplanade_1k.hdr', ( texture ) => {

      texture.mapping = THREE.EquirectangularReflectionMapping;

      //scene.background = texture;
      scene.environment = texture;

      //render();

      // model

      const loader2 = new GLTFLoader();
      loader2.load( 'soyuz.glb', function ( gltf ) {
        model = gltf.scene
        scene.add( model );
        resolve(model);

        //render();

      } );

      


  },
  undefined,
  function (error) {
    console.log(error);
    reject(error);
  } );
  });
}

const Object = () => {
  const refContainer = useRef();
  const [loading, setLoading] = useState(true);
  const [renderer, setRenderer] = useState();

  useEffect(() => {
    const { current: container } = refContainer;
    if (container && !renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;
      console.log(scW);
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
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
      const target = new THREE.Vector3(0, 25, 0);
      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);
      // const controls = new OrbitControls(camera, renderer.domElement);
      // controls.autoRotate = true;
      // controls.target = target;
      
      loadGLTFModel(scene, "/soyuz.glb", {
      }).then((model) => {
        animate(model);
        setLoading(false);
      });

      let req = null;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);
        model.rotation.y+=0.01;
        renderer.render(scene, camera);
      };

      return () => {
        cancelAnimationFrame(req);
        renderer.dispose();
      };
    }
  }, []);

  return (
    <div className='container_3d'
      ref={refContainer}
    >
      {loading && (
        <span style={{ position: "absolute", left: "50%", top: "50%" }}>
          Loading...
        </span>
      )}
    </div>
  );
};


const Object_3d = () => {
  return (
    <Object/>
  )
}

export default Object_3d