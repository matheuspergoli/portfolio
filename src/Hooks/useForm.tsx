import React from 'react'

const types: any = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha com um email válido'
  },
  nome: {
    regex: /^(?=.{4,15}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
    message: 'Preencha com um nome válido'
  }
}

function useForm(type: string | false) {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState('')

  function validate(value: string) {
    if (type === false) return true
    if (value.length === 0) {
      setError('Preencha corretamente.')
      return false
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false
    } else {
      setError('')
      return true
    }
  }

  function onChange({ target }: any) {
    if (error) validate(target.value)
    setValue(target.value)
  }

  return {
    value,
    error,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value)
  }
}

export default useForm