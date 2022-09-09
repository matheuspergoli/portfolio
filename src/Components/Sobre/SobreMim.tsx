import React from 'react'
import styled from 'styled-components'
import Head from '../Helper/Head'
import AnimateFadeDiv from '../Motion/AnimateFadeDiv'

const ContainerMain = styled.main`
  font-weight: 300;
  padding: 0 20px 20px 20px;
`

const Sobre = styled.section`
  max-width: 80rem;

  span {
    color: #04c2c9;
    font-weight: 700;
  }
`

const Title = styled.h1`
  position: relative;
  margin-bottom: 20px;

  &::after {
    content: '';
    position: absolute;
    display: block;
    height: 7px;
    width: 110px;
    border-radius: 3px;
    background-color: #333;
  }
`

function SobreMim() {
  return (
    <AnimateFadeDiv>
      <Head title='Sobre mim' />
      <ContainerMain>
        <Title>Quem sou eu?</Title>
        <Sobre>
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
    </AnimateFadeDiv>
  )
}

export default SobreMim