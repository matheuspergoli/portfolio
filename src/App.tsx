import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Sobre from './Components/Sobre/Sobre'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='sobre/*' element={<Sobre />} />
    </Routes>
  )
}

export default App
