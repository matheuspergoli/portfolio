import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Head from '../Helper/Head'
import styled from 'styled-components'
import AnimateLeftDiv from '../Motion/AnimateLeftDiv'

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
  padding: 0 20px 20px 20px;
`

const Title = styled.h1`
  color: #333;
  font-size: clamp(1.7rem, 5vw, 2.25rem);
  animation-duration: 500ms;
  animation-name: animateEnter;
  animation-fill-mode: backwards;
  animation-timing-function: ease-out;

  span {
    font-weight: 400;
    color: #04c2c9;
    font-size: clamp(1.5rem, 5vw, 2rem);
  }

  &:nth-of-type(1) {
    animation-delay: 200ms;
  }

  &:nth-of-type(2) {
    animation-delay: 400ms;
  }

  &:nth-of-type(3) {
    animation-delay: 600ms;
  }

  @keyframes animateEnter {
    0% {
      opacity: 0;
      transform: translateX(200px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

const BtnVoltar = styled.button`
  padding: 10px;
  cursor: pointer;
  color: #04c2c9;
  font-size: 1.5rem;
  width: fit-content;
  border: 3px solid #333;
  background-color: #333;
`

function InfoSkill() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [conhecimento, setConhecimento] = React.useState<Props>()

  function voltarPagina() {
    navigate('/sobre/habilidades')
  }

  React.useEffect(() => {
    const infoAtual = info.filter(item => item.skill === id)
    setConhecimento(infoAtual)
  }, [id])

  return (
    <AnimateLeftDiv>
      {conhecimento && <Head title={conhecimento[0].skill} />}
      {conhecimento && conhecimento.map((item: SkillProps) => (
        <ContainerMain key={item.skill}>
          <BtnVoltar onClick={voltarPagina}>Voltar</BtnVoltar>
          <Title>Conhecimento: <span>{item.skill}</span></Title>
          <Title>Nível: <span>{item.nivel}</span></Title>
          <Title>Descrição: <span>{item.descricao}</span></Title>
        </ContainerMain>
      ))}
    </AnimateLeftDiv>
  )
}

export default InfoSkill