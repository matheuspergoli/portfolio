import React from 'react'
import { HiArrowSmRight as ArrowImg } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Background from '../Background/Background'
import Head from '../Helper/Head'
import AnimateDiv from '../Motion/AnimateDiv'

const ContainerMain = styled.main`
  display: grid;
  place-content: center;
  height: 100vh;
  color: white;
  text-align: center;

  a {
    display: flex;
    gap: 5px;
    padding: 10px;
    color: white;
    font-size: 1.5rem;
    width: fit-content;
    transition: all 300ms;
    text-decoration: none;
    border: 2px solid white;
    margin: 15px auto 0 auto;

    svg {
      font-size: 2rem;
      transition: all 300ms;
    }

    &:hover svg {
      transform: rotate(90deg);
    }

    &:hover {
      border-color: #04c2c9;
      background-color: #04c2c9;
    }
  }
`

const Titulo = styled.h1`
  font-weight: 300;
  font-size: clamp(1.8rem, 5vw, 2.5rem);

  span:nth-of-type(1) {
    color: #04c2c9;
    font-weight: 700;

    @media (max-width: 430px) {
      display: block;
    }
  }

  span:nth-of-type(2) {
    display: block;
  }
`

function Home() {
  return (
    <AnimateDiv>
      <Head title='Home' />
      <ContainerMain>
        <Background />
        <Titulo className='tracking-in-expand'>
          Olá, Meu nome é <span>Matheus Pergoli</span>
          <span>Eu sou um Desenvolvedor Web</span>
        </Titulo>
        <Link to='sobre' className='slide-in-elliptic-top-fwd'>
          Conheça meu trabalho <ArrowImg />
        </Link>
      </ContainerMain>
    </AnimateDiv>
  )
}

export default Home