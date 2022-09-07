import React from 'react'
import styled from 'styled-components'
import Head from '../Helper/Head'

const ContainerMain = styled.main`
  padding: 20px;
  font-weight: 300;
`

const Sobre = styled.section`
  max-width: 80rem;
  font-size: 1.35rem;

  p {
    line-height: 1.5;
  }

  span {
    color: #04c2c9;
    font-weight: 700;
  }
`

const Title = styled.h1`
  position: relative;
  color: #333;
  font-size: 2.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: -11px;
    display: block;
    height: 7px;
    width: 110px;
    border-radius: 3px;
    background-color: #333;
  }
`

function SobreMim() {
  return (
    <>
      <Head title='Sobre mim' />
      <ContainerMain>
        <Title className='text-pop-up-top'>Quem sou eu?</Title>
        <Sobre className='fade-in'>
          <p>
            Me chamo <span>Matheus Pergoli</span> Tenho 23 anos, sou de SP/Brasil
            e sou estudante de <span>Desenvolvimento Web</span>.
          </p>
          <p>
            No começo de tudo, <span>Python</span> foi meu primeiro contato com linguagem de programação na plataforma
            do Curso em Vídeo, lá foi onde tudo começou, mas logo pulei para o <span>HTML/CSS</span> e então descobri o que eu gostava de fazer. 
          </p>
          <p>
            Sempre achei muito divertido ver o resultado imediato de tudo o que eu fazia, e com o tempo isso só foi me trazendo mais desejo pelo conhecimento e descobertas sobre o gigante universo do <span>Desenvolvimento Front-end</span>.
          </p>
          <p>
            Hoje é um prazer para mim estudar sobre esse universo,
            a cada dia que passa minha vontade por estudar e conhecer mais desse mundo só aumenta, atráves de dificuldades, erros e acertos e muita dor de cabeça, meu desejo de construir uma <span>Carreira</span> nessa área permanece intacto.
          </p>
        </Sobre>
      </ContainerMain>
    </>
  )
}

export default SobreMim