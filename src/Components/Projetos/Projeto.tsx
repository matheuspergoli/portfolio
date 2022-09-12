import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Clipboard from '../../images/clipboard-flexbox.jpg'
import Desafio from '../../images/desafio-ballerini.jpg'
import FourCard from '../../images/four-card-feature.jpg'
import Huddle from '../../images/huddle-v2.jpg'
import Netflix from '../../images/netflix-login.jpg'
import Nexter from '../../images/nexter.jpg'
import NftReact from '../../images/nft-react.jpg'
import Portfolio from '../../images/portfolio.jpg'
import Snap from '../../images/snap-intro.jpg'
import SummaryReact from '../../images/summary-react.jpg'
import Testimonials from '../../images/testimonials.jpg'
import Trillo from '../../images/trillo.jpg'
import ProjetoModal from './ProjetoModal'
import { Autocomplete, TextField } from '@mui/material'
import AnimateProgressBar from '../Motion/AnimateProgressBar'

const projects = [
  {
    nome: 'Clipboard Landing Page',
    source: Clipboard,
    tech: 'HTML/CSS & JS',
    link: 'https://matheuspergoli.github.io/clipboard-flexbox/',
    rep: 'https://github.com/matheuspergoli/clipboard-flexbox'
  },
  {
    nome: 'Desafio Rafa Ballerini',
    source: Desafio,
    tech: 'HTML/CSS & JS',
    link: 'https://matheuspergoli.github.io/balle-desafio-extra/',
    rep: 'https://github.com/matheuspergoli/balle-desafio-extra'
  },
  {
    nome: 'Four Card Section',
    source: FourCard,
    tech: 'HTML/CSS',
    link: 'https://matheuspergoli.github.io/four-card-feature/',
    rep: 'https://github.com/matheuspergoli/four-card-feature'
  },
  {
    nome: 'Huddle Landing Page',
    source: Huddle,
    tech: 'HTML/CSS & JS',
    link: 'https://matheuspergoli.github.io/huddle-landing-page_v2/',
    rep: 'https://github.com/matheuspergoli/huddle-landing-page_v2'
  },
  {
    nome: 'Netflix Login',
    source: Netflix,
    tech: 'HTML/SCSS',
    link: 'https://matheuspergoli.github.io/netflix-login/',
    rep: 'https://github.com/matheuspergoli/netflix-login'
  },
  {
    nome: 'Nexter',
    source: Nexter,
    tech: 'HTML/SCSS',
    link: 'https://matheuspergoli.github.io/nexter-project/',
    rep: 'https://github.com/matheuspergoli/nexter-project'
  },
  {
    nome: 'NFT Card React',
    source: NftReact,
    tech: 'React/Typescript & Styled-Components',
    link: 'https://nft-card-react-itobuexs0-matheuspergoli.vercel.app/',
    rep: 'https://github.com/matheuspergoli/nft-card-react'
  },
  {
    nome: 'Portfolio freeCodeCamp',
    source: Portfolio,
    tech: 'HTML/CSS & JS',
    link: 'https://matheuspergoli.github.io/fcc_project-n5_web/',
    rep: 'https://github.com/matheuspergoli/fcc_project-n5_web'
  },
  {
    nome: 'Snap Intro Section',
    source: Snap,
    tech: 'HTML/SCSS & JS',
    link: 'https://matheuspergoli.github.io/snap-intro-section/',
    rep: 'https://github.com/matheuspergoli/snap-intro-section'
  },
  {
    nome: 'Summary Component React',
    source: SummaryReact,
    tech: 'React/Typescript & Styled-Components',
    link: 'https://summary-component-react-1bjn1cejd-matheuspergoli.vercel.app/',
    rep: 'https://github.com/matheuspergoli/summary-component-react'
  },
  {
    nome: 'Testimonials',
    source: Testimonials,
    tech: 'HTML/CSS',
    link: 'https://matheuspergoli.github.io/testimonials-grid/',
    rep: 'https://github.com/matheuspergoli/testimonials-grid'
  },
  {
    nome: 'Trillo',
    source: Trillo,
    tech: 'HTML/SCSS',
    link: 'https://matheuspergoli.github.io/trillo-project/',
    rep: 'https://github.com/matheuspergoli/trillo-project'
  }
]

const options = [
  { label: 'Clipboard Landing Page' },
  { label: 'Desafio Rafa Ballerini' },
  { label: 'Four Card Section' },
  { label: 'Huddle Landing Page' },
  { label: 'Netflix Login' },
  { label: 'Nexter' },
  { label: 'NFT Card React' },
  { label: 'Portfolio freeCodeCamp' },
  { label: 'Snap Intro Section' },
  { label: 'Summary Component React' },
  { label: 'Testimonials' },
  { label: 'Trillo' }
]

export const Container = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
  margin-top: 50px;
`

export const ContainerProjeto = styled(motion.section)`
  max-width: 600px;
  max-height: 600px;
  
  img {
    display: block;
    max-width: 100%;
    cursor: pointer;
    border: 3px solid #333;
  }
`
export const Title = styled(motion.h1)`
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

export const Button = styled.button`
  display: block;
  cursor: pointer;
  color: #04c2c9;
  font-size: 1.5rem;
  padding: 5px 10px;
  margin: 50px auto 0 auto;
  background-color: #333;
  border: 2px solid #1e242c;
`

const animations = {
  initial: { opacity: 0 }
}

type ProjetoProps = {
  nome: string,
  source: string,
  tech: string,
  link: string,
  rep: string
}[]

function Projeto() {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = React.useState('')
  const [projetoSelecionado, setProjetoSelecionado] = React.useState<ProjetoProps>([])

  function handleClick() {
    navigate('ver-mais')
  }

  React.useEffect(() => {
    const projetoAtual = projects.filter((projeto) => projeto.nome === inputValue)
    setProjetoSelecionado(projetoAtual)
  }, [inputValue])

  return (
    <>
      <AnimateProgressBar />

      <Autocomplete 
      disablePortal
      noOptionsText={'Nada encontrado'}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
      options={options}
      sx={{ maxWidth: 350, margin: '50px auto 0 auto' }}
      renderInput={(params) => <TextField {...params} label='Procure por projetos' />} />

      {projetoSelecionado && projetoSelecionado.map((projeto) => (
        <Container key={projeto.nome}>
          <ContainerProjeto 
          variants={animations}
          initial='initial'
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1 }}
          key={projeto.nome}>
            <Title>{projeto.nome}</Title>
            <section>
              <ProjetoModal 
              tech={projeto.tech} 
              link={projeto.link} 
              rep={projeto.rep}
              nome={projeto.nome}
              source={projeto.source} />
            </section>
          </ContainerProjeto>
        </Container>
      ))}

      <Container>
        {projects.map((projeto) => (
          <ContainerProjeto 
          variants={animations}
          initial='initial'
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1 }}
          key={projeto.nome}>
            <Title>{projeto.nome}</Title>
            <section>
              <ProjetoModal 
              tech={projeto.tech} 
              link={projeto.link} 
              rep={projeto.rep}
              nome={projeto.nome}
              source={projeto.source} />
            </section>
          </ContainerProjeto>
        ))}
      </Container>
      <Button onClick={handleClick}>Ver mais</Button>
    </>
  )
}

export default Projeto