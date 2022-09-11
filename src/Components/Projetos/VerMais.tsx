import React from 'react'
import styled from 'styled-components'
import { Container, ContainerProjeto, Title, Button } from './Projeto'
import AdviceGenerator from '../../images/advice-generator.jpg'
import BuscadorCep from '../../images/buscador-cep.jpg'
import FlexBlog from '../../images/flexblog.jpg'
import Manage from '../../images/manage.jpg'
import Selfcare from '../../images/selfcare.jpg'
import TabelaPlanos from '../../images/tabela-planos.jpg'
import { useNavigate } from 'react-router-dom'
import ProjetoModal from './ProjetoModal'

const projects = [
  {
    nome: 'Selfcare',
    source: Selfcare,
    tech: 'HTML/SCSS & JS',
    link: 'https://matheuspergoli.github.io/selfcare/',
    rep: 'https://github.com/matheuspergoli/selfcare'
  },
  {
    nome: 'FlexBlog',
    source: FlexBlog,
    tech: 'HTML/CSS & JS',
    link: 'https://matheuspergoli.github.io/flexblog/',
    rep: 'https://github.com/matheuspergoli/flexblog'
  },
  {
    nome: 'Tabela de Planos',
    source: TabelaPlanos,
    tech: 'HTML/SCSS',
    link: 'https://matheuspergoli.github.io/plans-table/',
    rep: 'https://github.com/matheuspergoli/plans-table'
  },
  {
    nome: 'Buscador CEP',
    source: BuscadorCep,
    tech: 'React & CSS',
    link: 'https://buscador-qkhcnlzch-matheuspergoli.vercel.app/',
    rep: 'https://github.com/matheuspergoli/buscador-cep'
  },
  {
    nome: 'Advice Generator',
    source: AdviceGenerator,
    tech: 'HTML/SCSS & JS',
    link: 'https://matheuspergoli.github.io/advice-generator/',
    rep: 'https://github.com/matheuspergoli/advice-generator'
  },
  {
    nome: 'Manage Landing Page',
    source: Manage,
    tech: 'HTML/TailwindCSS & JS',
    link: 'https://matheuspergoli.github.io/manage-landing-page/',
    rep: 'https://github.com/matheuspergoli/manage-landing-page'
  },
]

const animations = {
  initial: { opacity: 0 }
}

function VerMais() {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/sobre/projetos')
  }

  return (
    <>
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
      <Button onClick={handleClick}>Voltar</Button>
    </>
  )
}

export default VerMais