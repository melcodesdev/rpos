import { useState } from 'react'

import Homepage from './components/Homepage';
import Overview from './components/Overview';
import Product from './components/Product';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Homepage />
    <Overview />
    <Product />
    <Testimonials />
    <Pricing />
    <Faq />
    <Footer />
    </>
  )
}

export default App
