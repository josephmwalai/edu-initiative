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

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  )

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
      </div>
    </BrowserRouter>
  )
}

export default App