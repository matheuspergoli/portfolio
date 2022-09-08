import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Sobre from './Components/Sobre/Sobre'
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='sobre/*' element={<Sobre />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
