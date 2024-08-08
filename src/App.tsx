import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './views/Home/Home'
import Certificates from './views/Certificates/Certificates'
import Portfolio from './views/Portfolio/Portfolio'
import Contacts from './views/Contacts/Contacts'
import Footer from './components/Footer/Footer'
import About from './views/About/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
