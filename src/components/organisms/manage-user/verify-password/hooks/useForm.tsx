import { useState, useEffect } from 'react'

const useForm = () => {
  const [typeCurrentPassword, setTypeCurrentPassword] = useState<string>('password')
  const [disableSubmit, setDisableSubmit] = useState<boolean>(true)
  const [params, setParams] = useState<any>({})

  const handleInput = (key: string, value: string) => {
    setParams({
      ...params,
      [key]: value
    })
  }

  const handleTypeCurrentPass = () => {
    setTypeCurrentPassword(typeCurrentPassword === 'password' ? 'text' : 'password')
  }

  useEffect(() => {
    const condition = params.password && params.password.length > 0
    setDisableSubmit(!condition) 
  }, [params.password])

  useEffect(() => () => {
    setTypeCurrentPassword('password')
    setDisableSubmit(true)
    setParams({})
  }, [])

  return {
    params,
    handleInput,
    disableSubmit,
    typeCurrentPassword,
    handleTypeCurrentPass,
  }
}

export default useForm