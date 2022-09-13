import { motion } from 'framer-motion'
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

const SaberMaisTitle = styled.h1`
  font-size: 1.6rem;
  text-align: center;
  margin: 20px 0;
`

const SaberMaisContainer = styled(motion.div)`
  width: 100px;
  height: 100px;
  padding: 20px;
  margin: 0 auto;
  cursor: pointer;
  overflow: hidden;
  text-align: center;
  background-color: #333;

  & ::selection {
    background-color: transparent;
  }

  &[data-isOpen="true"] {
    height: auto;
    width: 100%;
    max-width: 650px;

    & > p {
      color: white;

      span {
        color: #04c2c9;
      }
    }
  }
`

function SobreMim() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <AnimateFadeDiv>
      <Head title='Sobre mim' />
      <ContainerMain>
        <Title>Quem sou eu ?</Title>
        <Sobre>
          <p>
            Sou <span>Matheus Pergoli</span>, tenho 23 anos, sou de SP - Capital e estudo <span>Desenvolvimento Web</span>.
          </p>
          <p>
            No começo de tudo <span>Python</span> foi meu primeiro contato com a linguagem de programação na plataforma do Curso em Vídeo. Foi lá onde tudo começou. Logo pulei para o <span>HTML/CSS</span> e então descobri o que realmente gosto de fazer. 
          </p>
          <p>
            Acho gratificante ver o resultado imediato de tudo o que faço. Com o tempo isso foi me trazendo mais desejo pelo conhecimento e descobertas sobre o gigantesco universo do <span>Desenvolvimento Front-end</span>.
          </p>
          <p>
          Hoje, um de meus maiores prazeres é estudar sobre esse universo. A cada dia que passa minha vontade por estudar e conhecer mais desse mundo só aumenta. Por meio de dificuldades, erros, acertos, muita dedicação e carinho, meu desejo de construir uma <span>Carreira</span> nessa área permanece imensurável.
          </p>
        </Sobre>

        <SaberMaisTitle>Gostaria de saber um pouco mais ?</SaberMaisTitle>
        <SaberMaisContainer
        layout
        initial={{ borderRadius: 50 }}
        data-isopen={isOpen}
        onClick={() => setIsOpen(!isOpen)}>
          <p>Eu também gosto muito de jogar, meu estilo de jogo preferido é MMORPG. (Sou péssimo em FPS 😅)</p>
          <p>Já fui viciado em World of Warcraft, mas consegui me livrar, porém quem sabe na próxima expansão. 🙄</p>
          <p>Hoje meu gosto é bem variado e venho jogando diversos jogos quando não estou estudando.</p>
          <p>Também adoro músicas, sempre que estou praticando estou ouvindo algo.</p>
          <p>Séries e filmes nem se fala, quase todo dia vejo um filme novo.</p>
          <p>Caso queira ter uma conversa mais descontraída me add no Discord <span>Matheus🌙#6691</span></p>
        </SaberMaisContainer>
      </ContainerMain>
    </AnimateFadeDiv>
  )
}

export default SobreMim