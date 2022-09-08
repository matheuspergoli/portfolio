import React, { ChangeEventHandler, FocusEventHandler } from 'react'
import styled from 'styled-components'

const ErrorMessage = styled.p`
  color: red;
`

interface Input {
  type: string,
  name: string,
  value: string,
  error: string,
  placeholder: string,
  onBlur: FocusEventHandler,
  onChange: ChangeEventHandler
}

function Input({ type, name, placeholder, value, error, onChange, onBlur }: Input) {
  return (
    <>
      <input 
      required
      type={type} 
      name={name}
      id={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  )
}

export default Input