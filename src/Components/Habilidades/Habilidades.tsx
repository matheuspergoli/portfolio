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

const ContainerSkills = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
`

const Title = styled.h1`
  color: #04c2c9;
  margin: 20px auto;
  width: fit-content;
  text-align: center;

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
    <>
      <Head title='Habilidades' />
      <Title>Minhas habilidades</Title>
      <ContainerSkills className='slide-in-top'>
        <Skills title='HTML5' image={<HtmlImg />} />
        <Skills title='CSS3' image={<CSSImg />} />
        <Skills title='JavaScript' image={<JSImg />} />
        <Skills title='React' image={<ReactImg />} />
        <Skills title='TypeScript' image={<TSImg />} />
        <Skills title='Styled-Components' image={<StyledImg />} />
      </ContainerSkills>
      <Title>Outros Conhecimentos</Title>
      <ContainerSkills className='slide-in-top'>
        <Skills title='Responsividade' image={<PhoneImg />} />
        <Skills title='TailwindCSS' image={<TailImg />} />
        <Skills title='SCSS' image={<SassImg />} />
        <Skills title='Git/Github' image={<GitImg />} />
      </ContainerSkills>
      <Title>Idiomas</Title>
      <ContainerSkills className='slide-in-top'>
        <Skills title='Inglês' image={<ENImg />} />
      </ContainerSkills>
    </>
  )
}

export default Habilidades