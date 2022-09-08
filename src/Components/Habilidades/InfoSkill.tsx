import React from 'react'
import { useParams } from 'react-router-dom'
import Head from '../Helper/Head'
import styled from 'styled-components'

const info = [
  {
    skill: 'HTML5',
    nivel: 'Intermediário/Avançado',
    descricao: 'Línguagem de Marcação de Texto'
  },
  {
    skill: 'CSS3',
    nivel: 'Intermediário/Avançado',
    descricao: 'Línguagem de Estilização'
  },
  {
    skill: 'JavaScript',
    nivel: 'Intermediário',
    descricao: 'Línguagem de Programação'
  },
  {
    skill: 'React',
    nivel: 'Básico/Intermediário',
    descricao: 'Biblioteca baseada em JS para criação de SPA'
  },
  {
    skill: 'TypeScript',
    nivel: 'Básico/Intermediário',
    descricao: 'Línguagem de Programação/Superset de JS com Tipos'
  },
  {
    skill: 'Styled-Components',
    nivel: 'Básico/Intermediário',
    descricao: 'Biblioteca para criação de componentes estilizados com React'
  },
  {
    skill: 'Responsividade',
    nivel: 'Intermediário',
    descricao: 'Termo usado no desenvolvimento de sites aos quais se adaptam rapidamente conforme o dispositivo do usuário'
  },
  {
    skill: 'TailwindCSS',
    nivel: 'Básico/Intermediário',
    descricao: 'Framework de CSS para criação de páginas web responsivas (Mobile-First)'
  },
  {
    skill: 'SCSS',
    nivel: 'Básico/Intermediário',
    descricao: 'Pré-processador de CSS com uma melhor escrita e com aspectos de Línguagem de Programação'
  },
  {
    skill: 'Git-Github',
    nivel: 'Básico/Intermediário',
    descricao: 'Sistema para Controle de Versionamento'
  },
  {
    skill: 'Inglês',
    nivel: 'Intermediário',
    descricao: 'Língua nativa de Americanos e Ingleses'
  }
]

interface SkillProps {
  skill: string,
  nivel: string,
  descricao: string
}

type Props = {
  skill: string, 
  nivel: string, 
  descricao: string
}[]

const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 20px;
`

const Title = styled.h1`
  color: #333;
  font-size: clamp(1.5rem, 5vw, 2rem);

  span {
    color: #04c2c9;
  }
`

function InfoSkill() {
  const { id } = useParams()
  const [conhecimento, setConhecimento] = React.useState<Props>()

  React.useEffect(() => {
    const infoAtual = info.filter(item => item.skill === id)
    setConhecimento(infoAtual)
  }, [id])

  return (
    <>
      {conhecimento && <Head title={conhecimento[0].skill} />}
      {conhecimento && conhecimento.map((item: SkillProps) => (
        <ContainerMain key={item.skill}>
          <Title>Conhecimento: <span>{item.skill}</span></Title>
          <Title>Nível: <span>{item.nivel}</span></Title>
          <Title>Descrição: <span>{item.descricao}</span></Title>
        </ContainerMain>
      ))}
    </>
  )
}

export default InfoSkill