import React from 'react'
import styled from 'styled-components'
import {
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material'

const ModalTitle = styled(DialogTitle)`
  color: white;
  font-size: 1.45rem;
  text-align: center;

  span {
    display: block;
    color: #04c2c9;
  }
`

const ModalContent = styled(DialogContent)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  a {
    padding: 10px;
    font-size: 1.5rem;
    text-decoration: none;
    background-color: #04c2c9;
  }
`

function ProjetoModal({ tech, link, rep, nome, source }: any) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <img onClick={handleOpen} src={source} alt={nome} />
      <Dialog
      PaperProps={{ style: { backgroundColor: '#333' }}} 
      open={open} 
      onClose={handleClose}>
        <ModalTitle>Tech: <span>{tech}</span></ModalTitle>
        <ModalContent>
          <a href={link} target='_blank'>Ir para site</a>
          <a href={rep} target='_blank'>Repositório</a>
        </ModalContent>
      </Dialog>
    </>
  )
}

export default ProjetoModal