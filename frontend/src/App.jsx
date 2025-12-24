import React from 'react'

import { BrowserRouter, Routes, Route  } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Hero2 from './components/Hero2/Hero2';
import Hero from './components/Hero/Hero';
import HomeAbout from './components/HomeAbout/HomeAbout';
import HomeContact from './components/HomeContact/HomeContact';
import Footer from './components/Footer/Footer';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';

import Shop from './pages/Shop/Shop';

function App() {

  return (
    <>
      <BrowserRouter>
        <main className='w-full min-h-screen flex flex-col'>
          <Navbar />
          <ThemeToggle />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Hero2 />
                  <HomeAbout />
                  <HomeContact />
                </>
              }
            />

            {/* <Route path="/about" element={<About />} /> */}

            <Route path="/shop" element={<Shop />} />

            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
