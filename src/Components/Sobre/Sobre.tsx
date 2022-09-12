import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Habilidades from '../Habilidades/Habilidades'
import SobreMim from './SobreMim'
import InfoSkill from '../Habilidades/InfoSkill'
import Contato from '../Contato/Contato'
import Projetos from '../Projetos/Projetos'
import Footer from '../Footer/Footer'
import AnimateSpeedDial from '../Dial/AnimateSpeedDial'

function Sobre() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<SobreMim />} />
        <Route path='habilidades' element={<Habilidades />} />
        <Route path='habilidades/:id' element={<InfoSkill />} />
        <Route path='projetos/*' element={<Projetos />} />
        <Route path='contato' element={<Contato />} />
      </Routes>
      <Footer />
      <AnimateSpeedDial />
    </>
  )
}

export default Sobre