import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Canvas>
      <Experience />
    </Canvas>
  )
}

export default App
