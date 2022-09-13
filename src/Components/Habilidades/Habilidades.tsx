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
import { GiBrazilFlag as BrImg } from 'react-icons/gi'
import Head from '../Helper/Head'
import AnimateFadeDiv from '../Motion/AnimateFadeDiv'
import SkillBar from 'react-skillbars'

const skills = [
  { type: 'HTML5', level: 85},
  { type: 'CSS3', level: 85},
  { type: 'JavaScript', level: 70},
  { type: 'React', level: 60},
  { type: 'TypeScript', level: 45},
  { type: 'SC', level: 55},
  { type: 'Git/Github', level: 60}
]

const colors = {
  bar: '#04c2c9',
  title: {
    text: '#fff',
    background: '#333'
  }
}

const ContainerBar = styled.section`
  margin: 0 auto;
  max-width: 1000px;
  padding: 0 20px 20px 20px;
`

const ContainerSkills = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0 20px 20px 20px;

  a {
    text-decoration: none;
  }
`

const Title = styled.h1`
  padding: 0 20px;
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
        <Skills index={1} title='HTML5' image={<HtmlImg />} />
        <Skills index={2} title='CSS3' image={<CSSImg />} />
        <Skills index={3} title='JavaScript' image={<JSImg />} />
        <Skills index={4} title='React' image={<ReactImg />} />
        <Skills index={5} title='TypeScript' image={<TSImg />} />
        <Skills index={6} title='Styled-Components' image={<StyledImg />} />
      </ContainerSkills>
      <Title>Outros Conhecimentos</Title>
      <ContainerSkills>
        <Skills index={7} title='Responsividade' image={<PhoneImg />} />
        <Skills index={8} title='TailwindCSS' image={<TailImg />} />
        <Skills index={9} title='SCSS' image={<SassImg />} />
        <Skills index={10} title='Git-Github' image={<GitImg />} />
      </ContainerSkills>
      <Title>Idiomas</Title>
      <ContainerSkills>
        <Skills index={11} title='Inglês-US' image={<ENImg />} />
        <Skills index={12} title='Português-BR' image={<BrImg />} />
      </ContainerSkills>
      <Title>Principais habilidades</Title>
      <ContainerBar>
        <SkillBar skills={skills} colors={colors} animationDelay={350} />
      </ContainerBar>
    </AnimateFadeDiv>
  )
}

export default Habilidades