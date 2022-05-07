import { useState, useEffect } from 'react'

interface IValidation {
  newPasswordLength: boolean
  sameConfirmPassword: boolean
}

const useForm = () => {
  const [params, setParams] = useState<any | {}>({})
  const [disableSubmit, setDisableButton] = useState<boolean>(true)
  const defaultValidation: any = {
    newPasswordLength: false,
    sameConfirmPassword: false,
  }
  const [validation, setValidation] = useState<IValidation>(defaultValidation);

  const handleInput = (key: string, value: string) => {
    setParams({
      ...params,
      [key]: value
    })
  }

  const handleDisableSubmit = () => {
    const condition = Object.values(validation).includes(false)
    setDisableButton(condition)
  }

  const handleValidation = (params: any) => {
    let payload: any = defaultValidation;
    payload.newPasswordLength = params?.password?.length > 7
    payload.sameConfirmPassword = params?.passwordConfirmation?.length > 0
    setValidation(payload)
  }

  useEffect(() => {
    if (Object.keys(params).length > 0) handleValidation(params)
  }, [params])

  useEffect(() => {
    handleDisableSubmit()
  }, [validation])

  useEffect(() => () => {
    setValidation(defaultValidation)
    setDisableButton(true)
    setParams({})
  }, [])

  return {
    params,
    validation,
    handleInput,
    disableSubmit,
  }
}

export default useForm