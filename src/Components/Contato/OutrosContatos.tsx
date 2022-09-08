import React from 'react'
import { AiFillGithub as GitImg } from 'react-icons/ai'
import { FaFacebookF as FaceImg } from 'react-icons/fa'
import styled from 'styled-components'

const ContainerMain = styled.main`
  display: flex;
  justify-content: center;
  gap: 30px;
`
const Title = styled.h1`
  width: fit-content;
  text-align: center;
  margin: 0 auto 30px auto;

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

const ContainerImg = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 100px;
  color: white;
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

function OutrosContatos() {
  return (
    <>
      <Title>Outras formas de contato</Title>
      <ContainerMain>
        <a href="https://github.com/matheuspergoli" target='_blank'>
          <ContainerImg>
            <GitImg />
          </ContainerImg>
        </a>
        <a href="https://www.facebook.com/matheus.pwal" target='_blank'>
          <ContainerImg>
            <FaceImg />
          </ContainerImg>
        </a>
      </ContainerMain>
    </>
  )
}

export default OutrosContatos