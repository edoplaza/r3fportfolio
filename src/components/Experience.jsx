import { OrbitControls, ScrollControls } from '@react-three/drei'

import { Overlay } from './Overlay'
import { Office } from './Office'

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3} damping={0.25}>
        <Overlay />
        <Office />
      </ScrollControls>
    </>
  )
}

export default Experience
