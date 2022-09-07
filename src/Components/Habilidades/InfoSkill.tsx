import React from 'react'
import { useParams } from 'react-router-dom'
import Head from '../Helper/Head'
import styled from 'styled-components'
import htmlImage from '../../images/html.jpg'
import cssImage from '../../images/css.jpg'
import jsImage from '../../images/javascript.jpg'
import reactImage from '../../images/react.jpg'
import tsImage from '../../images/typescript.jpg'
import styledImage from '../../images/styled-components.jpg'
import responsividadeImage from '../../images/responsividade.jpg'
import tailwindImage from '../../images/tailwind.jpg'
import scssImage from '../../images/scss.jpg'
import gitImage from '../../images/github.jpg'
import inglesImage from '../../images/ingles.jpg'

const info = [
  {
    skill: 'HTML5',
    nivel: 'Intermediário/Avançado',
    image: htmlImage,
    descricao: 'Línguagem de Marcação de Texto'
  },
  {
    skill: 'CSS3',
    nivel: 'Intermediário/Avançado',
    image: cssImage,
    descricao: 'Línguagem de Estilização'
  },
  {
    skill: 'JavaScript',
    nivel: 'Intermediário',
    image: jsImage,
    descricao: 'Línguagem de Programação'
  },
  {
    skill: 'React',
    nivel: 'Básico/Intermediário',
    image: reactImage,
    descricao: 'Biblioteca baseada em JS para criação de SPA'
  },
  {
    skill: 'TypeScript',
    nivel: 'Básico/Intermediário',
    image: tsImage,
    descricao: 'Línguagem de Programação/Superset de JS com Tipos'
  },
  {
    skill: 'Styled-Components',
    nivel: 'Básico/Intermediário',
    image: styledImage,
    descricao: 'Biblioteca para criação de componentes estilizados com React'
  },
  {
    skill: 'Responsividade',
    nivel: 'Intermediário',
    image: responsividadeImage,
    descricao: 'Termo usado no desenvolvimento de sites aos quais se adaptam rapidamente conforme o dispositivo do usuário'
  },
  {
    skill: 'TailwindCSS',
    nivel: 'Básico/Intermediário',
    image: tailwindImage,
    descricao: 'Framework de CSS para criação de páginas web responsivas (Mobile-First)'
  },
  {
    skill: 'SCSS',
    nivel: 'Básico/Intermediário',
    image: scssImage,
    descricao: 'Pré-processador de CSS com uma melhor escrita e com aspectos de Línguagem de Programação'
  },
  {
    skill: 'Git-Github',
    nivel: 'Básico/Intermediário',
    image: gitImage,
    descricao: 'Sistema para Controle de Versionamento'
  },
  {
    skill: 'Inglês',
    nivel: 'Intermediário',
    image: inglesImage,
    descricao: 'Língua nativa de Americanos e Ingleses'
  }
]

interface SkillProps {
  skill: string,
  nivel: string,
  image: string,
  descricao: string
}

type Props = {
  skill: string, 
  nivel: string, 
  image: string, 
  descricao: string
}[]

const ContainerMain = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 910px) {
    grid-template-columns: 1fr;

    & > :nth-child(1) {
      order: 1;
    }
  }
`

const ContainerInfos = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 20px;
`

const ContainerImage = styled.figure`
  min-width: 100%;
  height: 350px;
  object-fit: cover;

  img {
    display: block;
    max-width: 100%;

    @media (max-width: 40rem) {
      display: none;
    }
  }
`

const Title = styled.h1`
  color: #333;
  font-size: clamp(1.8rem, 5vw, 2.5rem);

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
          <ContainerImage>
            <img src={item.image} alt={item.skill} />
          </ContainerImage>
          <ContainerInfos>
            <Title>Conhecimento: <span>{item.skill}</span></Title>
            <Title>Nível: <span>{item.nivel}</span></Title>
            <Title>Descrição: <span>{item.descricao}</span></Title>
          </ContainerInfos>
        </ContainerMain>
      ))}
    </>
  )
}

export default InfoSkill