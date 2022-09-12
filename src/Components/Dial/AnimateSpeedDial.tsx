import React from 'react'
import styled from 'styled-components'
import { AiFillGithub as GitImg } from 'react-icons/ai'
import { FaFacebookF as FaceImg } from 'react-icons/fa'
import { SiMicrosoftoutlook as OutlookImg } from 'react-icons/si'
import { SiYahoo as YahooImg } from 'react-icons/si'
import { Box, SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material'

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  font-size: 1.5rem;

  svg {
    width: 100%;
    color: #04c2c9;
  }
`

const actions = [
  { icon: <Link href="https://github.com/matheuspergoli" target='_blank'> <GitImg /> </Link>, nome: 'Github' },
  { icon: <Link href="https://www.facebook.com/matheus.pwal" target='_blank'> <FaceImg /> </Link>, nome: 'Facebook' },
  { icon: <Link href="mailto:heizwow@outlook.com" target='_blank'> <OutlookImg /> </Link>, nome: 'Outlook' },
  { icon: <Link href="mailto:matheus.pergoli2015@yahoo.com" target='_blank'> <YahooImg /> </Link>, nome: 'Yahoo', }
]

function AnimateSpeedDial() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <SpeedDial
      ariaLabel='SpeedDial'
      icon={<SpeedDialIcon />}
      sx={{ position: 'fixed', bottom: 16, right: 16,}}
      FabProps={{ size: 'large', style: { backgroundColor: '#04c2c9', color: '#333' } }}>
        {actions.map((action) => (
          <SpeedDialAction
          key={action.nome}
          icon={action.icon}
          tooltipTitle={action.nome}
          FabProps={{ size: 'medium', style: { backgroundColor: '#333' } }} />
        ))}
      </SpeedDial>
    </Box>
  )
}

export default AnimateSpeedDial