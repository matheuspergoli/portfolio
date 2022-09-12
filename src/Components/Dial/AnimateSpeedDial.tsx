import React from 'react'
import { AiFillGithub as GitImg } from 'react-icons/ai'
import { FaFacebookF as FaceImg } from 'react-icons/fa'
import { SiMicrosoftoutlook as OutlookImg } from 'react-icons/si'
import { SiYahoo as YahooImg } from 'react-icons/si'
import { Box, SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material'

const actions = [
  { icon: <GitImg style={{ fontSize: '1.5rem' }} />, nome: 'Github' },
  { icon: <FaceImg style={{ fontSize: '1.5rem' }} />, nome: 'Facebook' },
  { icon: <OutlookImg style={{ fontSize: '1.5rem' }} />, nome: 'Outlook' },
  { icon: <YahooImg style={{ fontSize: '1.5rem' }} />, nome: 'Yahoo', }
]

function AnimateSpeedDial() {
  return (
    <Box sx={{ height: 320, flexGrow: 1 }}>
      <SpeedDial
      ariaLabel='SpeedDial'
      icon={<SpeedDialIcon />}
      sx={{ position: 'fixed', bottom: 16, right: 16,}}
      FabProps={{ size: 'large', style: { backgroundColor: '#04c2c9', color: '#333' } }}>
        {actions.map((action) => (
          <SpeedDialAction
          key={action.nome}
          icon={action.icon}
          FabProps={{ size: 'medium' }}
          sx={{ backgroundColor: '#333', color: '#04c2c9' }}
          tooltipTitle={action.nome} />
        ))}
      </SpeedDial>
    </Box>
  )
}

export default AnimateSpeedDial