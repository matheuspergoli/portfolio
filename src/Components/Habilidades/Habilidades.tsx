import React from 'react'
import styled from 'styled-components'
import Skills from './Skills'
import { SiHtml5 as HtmlImg, SiJavascript as JSImg } from 'react-icons/si'
import { SiTypescript as TSImg, SiStyledcomponents as StyledImg } from 'react-icons/si'
import { DiCss3 as CSSImg, DiSass as SassImg } from 'react-icons/di'
import { FaReact as ReactImg } from 'react-icons/fa'
import { GiSmartphone as PhoneImg } from 'react-icons/gi'
import { SiTailwindcss as TailImg } from 'react-icons/si'
import { RiEnglishInput as ENImg } from 'react-icons/ri'
import { AiFillGithub as GitImg } from 'react-icons/ai'
import Head from '../Helper/Head'
import AnimateFadeDiv from '../Motion/AnimateFadeDiv'

const ContainerSkills = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0 20px 20px 20px;

  a {
    color: #333;
    text-decoration: none;
  }
`

const Title = styled.h1`
  color: #333;
  padding: 0 20px;
  font-size: 2.25rem;
  width: fit-content;
  text-align: center;
  margin: 0 auto 20px auto;

  &:not(:first-of-type) {
    margin: 20px auto;
  }

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

function Habilidades() {
  return (
    <AnimateFadeDiv>
      <Head title='Habilidades' />
      <Title>Minhas habilidades</Title>
      <ContainerSkills>
        <Skills title='HTML5' image={<HtmlImg />} />
        <Skills title='CSS3' image={<CSSImg />} />
        <Skills title='JavaScript' image={<JSImg />} />
        <Skills title='React' image={<ReactImg />} />
        <Skills title='TypeScript' image={<TSImg />} />
        <Skills title='Styled-Components' image={<StyledImg />} />
      </ContainerSkills>
      <Title>Outros Conhecimentos</Title>
      <ContainerSkills>
        <Skills title='Responsividade' image={<PhoneImg />} />
        <Skills title='TailwindCSS' image={<TailImg />} />
        <Skills title='SCSS' image={<SassImg />} />
        <Skills title='Git-Github' image={<GitImg />} />
      </ContainerSkills>
      <Title>Idiomas</Title>
      <ContainerSkills>
        <Skills title='Inglês' image={<ENImg />} />
      </ContainerSkills>
    </AnimateFadeDiv>
  )
}

export default Habilidades