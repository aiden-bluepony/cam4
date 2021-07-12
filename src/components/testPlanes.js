import React from 'react';
import { Plane, useTexture } from '@react-three/drei'
import shape from "../images/story_shape.svg"

export function Wall({...props}) {
  const texture = useTexture(shape)
  return (
    <mesh {...props}>
      <planeGeometry args={[12, 4]}/>
      <meshStandardMaterial map={texture}/>
    </mesh>
  )
}