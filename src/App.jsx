import { useState } from 'react'

import Homepage from './components/Homepage';
import Clients from './components/Clients';
import Features from './components/Features';
import Display from './components/Display';
import Testimonials from './components/Testimonials';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Homepage />
    <Clients />
    <Features />
    <Display />
    <Testimonials />
    </>
  )
}

export default App
