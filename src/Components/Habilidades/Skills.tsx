import React from 'react'
import styled from 'styled-components'

const ContainerSkills = styled.section`
  text-align: center;
`

const Title = styled.h1`
  font-size: 1.1rem;
  margin-bottom: 10px;
`

const ContainerImg = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 110px;
  color: white;
  margin: 0 auto;
  background-color: #04c2c9;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);

  svg {
    font-size: 4rem;
  }
`

interface Props {
  title: string,
  image: any
}

function Skills({ title, image }: Props) {
  return (
    <ContainerSkills>
      <Title>{title}</Title>
      <ContainerImg className='heartbeat'>
        {image}
      </ContainerImg>
    </ContainerSkills>
  )
}

export default Skills