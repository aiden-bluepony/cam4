import React from 'react';
import { Html, Plane, useTexture } from '@react-three/drei'
import "./taglines.css"
import story_text from "../../images/story_text.svg"
import story_shape from "../../images/story_shape.svg"

export function Tagline1() {
  return (
    <Html
      position={[0, 2, 0]}
      center
    >
      <div className="tagline">Blue Pony is a creative technology company</div>
      <div className="tagline">specializing in advanced experiential marketing.</div>
      <div className="yellowHr" />
    </Html>
  );
}

export function Tag2Text() {
  return (
    <>
      <Html
        center
        prepend
        position={[0,20,-100]}
        occlude
      >
        <div className="tag2">
          <img src={story_text} />
        </div>
      </Html>
    </>
  );
}

export function Tag2Background({...props}) {
  const texture = useTexture(story_shape)
  return (
    <mesh {...props}>
      <planeGeometry args={[12, 4]}/>
      <meshStandardMaterial map={texture}/>
    </mesh>
  )
}