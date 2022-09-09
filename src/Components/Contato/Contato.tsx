import React from 'react'
import styled from 'styled-components'
import useForm from '../../Hooks/useForm'
import Head from '../Helper/Head'
import AnimateFadeDiv from '../Motion/AnimateFadeDiv'
import Input from './Input'
import OutrosContatos from './OutrosContatos'

const ContainerMain = styled.main`
  padding: 0 20px 20px 20px;
`
const Title = styled.h1`
  color: #333;
  font-size: 2.25rem;
  width: fit-content;
  text-align: center;
  margin: 0 auto 50px auto;

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

const Formulario = styled.form`
  padding: 20px;
  max-width: 500px;
  margin: 0 auto 30px auto;
  background-color: #333;
`

const InputGroup = styled.section`
  color: white;
  margin-bottom: 20px;

  label {
    display: block;
    color: #04c2c9;
    font-size: 1.8rem;
  }

  input {
    width: 100%;
    border: none;
    padding: 5px;
    color: white;
    font-size: 1.5rem;
    background-color: #1e242c;

    &:focus {
      outline: none;
    }
  }
`

const TextArea = styled.textarea`
  border: none;
  width: 100%;
  padding: 5px;
  color: white;
  resize: vertical;
  font-size: 1.5rem;
  margin-bottom: 20px;
  background-color: #1e242c;

  &:focus {
    outline: none;
  }
`

const BtnEnviar = styled.button`
  display: block;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  margin-left: auto;
  padding: 5px 20px;
  border: 2px solid white;
  background-color: transparent;
`

function Contato() {
  const nome = useForm('nome')
  const email = useForm('email')
  
  return (
    <AnimateFadeDiv>
      <Head title='Contato' />
      <ContainerMain>
        <Title>
          Tem alguma questão ou gostaria de trabalhar junto?
        </Title>
        <Formulario>
          <InputGroup>
            <Input type='text' name='nome' placeholder='Nome' {...nome} />
          </InputGroup>
          <InputGroup>
            <Input type='email' name='email' placeholder='Email' {...email} />
          </InputGroup>
          <TextArea placeholder='Sua mensagem aqui' />
          <BtnEnviar type='submit'>Enviar</BtnEnviar>
        </Formulario>
        <OutrosContatos />
      </ContainerMain>
    </AnimateFadeDiv>
  )
}

export default Contato