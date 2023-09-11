import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './components/Homepage';
import Overview from './components/Overview';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Footer from './components/Footer';

import Signin from './components/Signin';
import Signup from './components/Signup';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );

  function Home() {
    return (
      <>
        <Homepage />
        <Overview />
        <Features />
        <Testimonials />
        <Pricing />
        <Faq />
        <Footer />
      </>
    );
  }
}

export default App
