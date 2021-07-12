import React, { Suspense, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useSpring } from "@react-spring/three"
import {
  Environment,
  OrbitControls,
  Html,
  ContactShadows,
  Stats
} from '@react-three/drei'
import { a as web } from '@react-spring/web'
import './App.css';

import Cam2 from "./models/Cam2"
import Laptop from "./models/Laptop"
import Phone from "./models/Phone"

import Navbar from "./components/navbar"
import { Tagline1, Tag2Text, Tag2Background } from "./components/taglines/taglines"
import {Wall} from "./components/testPlanes"
import shape from "./images/story_shape.svg"



function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [laptopOpen, setLaptopOpen] = useState(false)
  const [on, setOn] = useState(false)

  // We turn this into a spring animation that interpolates between 0 and 1
  const props = useSpring({ open: Number(laptopOpen) })
  return (
    <div className="App">
      <Navbar laptopOpen={laptopOpen} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Canvas
        shadows
        camera={{ position: [0, 0, 10], fov: 35 }}
        style={{ background: laptopOpen ? '#00b2e3' : '#f0f0f0' }}
      >
        <ambientLight intensity={1} />
        {laptopOpen ? <Tag2Text/> : <Tagline1 />}
        {/* <Html
          transform
          sprite
          position={[0,20,-80]}
        >
          <img src={shape} className="shape"/>
        </Html> */}
        {/* <Html
          center
          position={[0,1.8,0]}
        >
          <img src={shape} className="shape"/>
        </Html> */}
        <Suspense fallback={null}>
        {/* <Wall position={[0,13,-61]} /> */}
          <group onClick={(e) => (e.stopPropagation(), setLaptopOpen(!laptopOpen))}>
            <Laptop position={[0, 10, -60]} rotation={[Math.PI / 16, 0, 0]} laptopOpen={laptopOpen} hinge={props.open.to([0, 1], [1.575, -0.425])}/>
          </group>
          <group onClick={(e) => (e.stopPropagation(), setOn(!on))}>
            <Phone position={[0, 0, -30]} on={on}/>
          </group>
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
