import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Donate from './components/Donate'                 
import SponsorAChild from './components/SponsorAChild'   
import OurPartners from './components/OurPartners'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'
import { useEffect } from 'react'

const App = () => {

   const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  )

  const dotRef = React.useRef(null);
const outlineRef = React.useRef(null);

// Ref for custom cursor position tracking
const mouse = React.useRef({ x: -100, y: -100 });
const position = React.useRef({ x: -100, y: -100 });

useEffect(() => {
  const handleMouseMove = (e) => {
    mouse.current.x = e.clientX;
    mouse.current.y = e.clientY;
  };

  document.addEventListener("mousemove", handleMouseMove);

  const animate = () => {
    position.current.x +=
      (mouse.current.x - position.current.x) * 0.1;

    position.current.y +=
      (mouse.current.y - position.current.y) * 0.1;

    if (dotRef.current && outlineRef.current) {
      // Small cursor dot follows the mouse directly
      dotRef.current.style.transform = `translate3d(
        ${mouse.current.x - 6}px,
        ${mouse.current.y - 6}px,
        0
      )`;

      // Outline follows the mouse with a slight delay

      outlineRef.current.style.transform = `translate3d(
        ${position.current.x - 20}px,
        ${position.current.y - 20}px,
        0
      )`;
    }

    requestAnimationFrame(animate);
  };

  animate();

  return () => {
    document.removeEventListener("mousemove", handleMouseMove);
  };
}, []);
 

  return (
    <BrowserRouter>
      <div className="dark:bg-black relative">
        <Toaster />
        <Navbar theme={theme} setTheme={setTheme} />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/sponsor-a-child" element={<SponsorAChild />} />
        </Routes>
        <OurPartners />
        <Services />
        <OurWork />
        <Teams />
        <ContactUs />
        <Footer theme={theme} />

        {/* Custom Cursor Ring*/}
        <div ref={outlineRef} className='fixed top-0 left-0 h-8 w-8 rounded-full border border-primary pointer-events-none z-[9999]'>

        </div>
        {/* Custom Cursor Dot */}
        <div ref={dotRef} className='fixed top-0 left-0 h-2 w-2 rounded-full bg-primary pointer-events-none z-[9999]'>

        </div>
      </div>
    </BrowserRouter>
  )
}

export default App