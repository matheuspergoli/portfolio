import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Habilidades from '../Habilidades/Habilidades'
import SobreMim from './SobreMim'

function Sobre() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<SobreMim />} />
        <Route path='habilidades' element={<Habilidades />} />
      </Routes>
    </>
  )
}

export default Sobre