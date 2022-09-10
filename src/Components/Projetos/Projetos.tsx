import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AnimateFadeDiv from '../Motion/AnimateFadeDiv'
import styled from 'styled-components'
import Projeto from './Projeto'
import Head from '../Helper/Head'
import VerMais from './VerMais'

const ContainerMain = styled.main`
  padding: 0 20px 20px 20px;
`

const Title = styled.h1`
  margin: 0 auto;
  width: fit-content;
  
  &::after {
    content: '';
    display: block;
    width: 50%;
    height: 5px;
    margin: 0 auto;
    border-radius: 3px;
    background-color: #333;
  }
`

function Projetos() {
  return (
    <AnimateFadeDiv>
      <Head title='Projetos' />
      <ContainerMain>
        <Title>Projetos</Title>
        <Routes>
          <Route path='/' element={<Projeto />} />
          <Route path='ver-mais' element={<VerMais />} />
        </Routes>
      </ContainerMain>
    </AnimateFadeDiv>
  )
}

export default Projetos