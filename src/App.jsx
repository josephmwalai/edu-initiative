import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Donate from './components/Donate'                 
import SponsorAChild from './components/SponsorAChild'   
import OurPartners from './components/OurPartners'

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  )

  return (
    <BrowserRouter>
      <div className="dark:bg-black relative">
        <Navbar theme={theme} setTheme={setTheme} />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/sponsor-a-child" element={<SponsorAChild />} />
        </Routes>
        <OurPartners />
      </div>
    </BrowserRouter>
  )
}

export default App