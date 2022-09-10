import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Clipboard from '../../images/clipboard-flexbox.png'
import Desafio from '../../images/desafio-ballerini.png'
import FourCard from '../../images/four-card-feature.png'
import Huddle from '../../images/huddle-v2.png'
import Netflix from '../../images/netflix-login.png'
import Nexter from '../../images/nexter.png'
import NftReact from '../../images/nft-react.png'
import Portfolio from '../../images/portfolio.png'
import Snap from '../../images/snap-intro.png'
import SummaryReact from '../../images/summary-react.png'
import Testimonials from '../../images/testimonials.png'
import Trillo from '../../images/trillo.png'

const projects = [
  {
    nome: 'Clipboard Landing Page',
    source: Clipboard
  },
  {
    nome: 'Desafio Rafa Ballerini',
    source: Desafio
  },
  {
    nome: 'Four Card Section',
    source: FourCard
  },
  {
    nome: 'Huddle Landing Page',
    source: Huddle
  },
  {
    nome: 'Netflix Login',
    source: Netflix
  },
  {
    nome: 'Nexter',
    source: Nexter
  },
  {
    nome: 'NFT Card React',
    source: NftReact
  },
  {
    nome: 'Portfolio freeCodeCamp',
    source: Portfolio
  },
  {
    nome: 'Snap Intro Section',
    source: Snap
  },
  {
    nome: 'Summary Component React',
    source: SummaryReact
  },
  {
    nome: 'Testimonials',
    source: Testimonials
  },
  {
    nome: 'Trillo',
    source: Trillo
  }
]

const Container = styled.main`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
  margin-top: 100px;
`

const ContainerProjeto = styled(motion.section)`
  max-width: 600px;
  max-height: 600px;
  
  img {
    display: block;
    max-width: 100%;
    border: 3px solid #333;
  }
`
const Title = styled(motion.h1)`
  position: relative;
  font-size: 1.5rem;
  width: fit-content;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: -5px;
    width: 50px;
    height: 5px;
    border-radius: 2px;
    background-color: #04c2c9;
  }
`

const animations = {
  initial: { opacity: 0 }
}

function Projeto() {
  return (
    <Container>
      {projects.map((projeto) => (
        <ContainerProjeto 
        variants={animations}
        initial='initial'
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        key={projeto.nome}>
          <Title>{projeto.nome}</Title>
          <img src={projeto.source} alt={projeto.nome} />
        </ContainerProjeto>
      ))}
    </Container>
  )
}

export default Projeto