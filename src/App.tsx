import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './views/Home/Home'
import Certificates from './views/Certificates/Certificates'
import Portfolio from './views/Portfolio/Portfolio'
import Contact from './views/Contact/Contact'
import Footer from './components/Footer/Footer'
import About from './views/About/About'

function App() {

  return (
      <div className='h-full w-full selection:bg-amber-600 selection:text-amber-900'>
        {/* <div className="fixed top-0 -z-10 h-full w-full">
          <div className="relative h-full w-full bg-neutral-900"><div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div></div>
        </div> */}
        <div className="container mx-auto px-8 flex flex-col">
          <Header />
          <Home />
          <Certificates />
          <Portfolio />
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
  )
}

export default App;
