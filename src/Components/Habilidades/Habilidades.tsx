import React from 'react'
import styled from 'styled-components'
import Skills from './Skills'
import { SiHtml5 as HtmlImg, SiJavascript as JSImg } from 'react-icons/si'
import { SiTypescript as TSImg, SiStyledcomponents as StyledImg } from 'react-icons/si'
import { DiCss3 as CSSImg } from 'react-icons/di'
import { FaReact as ReactImg } from 'react-icons/fa'
import { FcSmartphoneTablet as PhoneImg } from 'react-icons/fc'
import Head from '../Helper/Head'

const ContainerMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

function Habilidades() {
  return (
    <>
      <Head title='Habilidades' />
      <ContainerMain className='slide-in-top'>
        <Skills title='HTML5' image={<HtmlImg />} />
        <Skills title='CSS3' image={<CSSImg />} />
        <Skills title='JavaScript' image={<JSImg />} />
        <Skills title='React' image={<ReactImg />} />
        <Skills title='TypeScript' image={<TSImg />} />
        <Skills title='Styled-Components' image={<StyledImg />} />
      </ContainerMain>
    </>
  )
}

export default Habilidades