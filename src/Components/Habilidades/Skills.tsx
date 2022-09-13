import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Tooltip, Zoom } from '@mui/material'
import AnimateStaggered from '../Motion/AnimateStaggered'

const ContainerSkills = styled.section`
  text-align: center;
`

const Title = styled.h1`
  font-weight: 400;
  font-size: 1.05rem;
  margin-bottom: 10px;
`

const ContainerImg = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 100px;
  color: white;
  margin: 0 auto;
  background-color: #04c2c9;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);

  svg {
    font-size: 3.5rem;
    transition: all 300ms;
  }

  &:hover svg {
    fill: #333;
    transform: scale(1.15);
  }
`

interface Props {
  title: string,
  image: any,
  index: number
}

function Skills({ title, image, index }: Props) {
  return (
    <AnimateStaggered index={index}>
      <Tooltip title='Clique e saiba mais!' TransitionComponent={Zoom} arrow>
        <Link to={`/sobre/habilidades/${title}`}>
          <ContainerSkills>
            <Title>{title}</Title>
            <ContainerImg>
              {image}
            </ContainerImg>
          </ContainerSkills>
        </Link>
      </Tooltip>
    </AnimateStaggered>
  )
}

export default Skills