import { useState } from 'react'

import { parseCookies } from 'nookies'

import { ObjectToSnakeCase } from '@/helpers/snakecase-converter'
import changePassword from '@/services/manage-user/ChangePassword'

interface ISnackbar {
  text: string
  type: string
  bgColor: string
}

const useSubmit = () => {
  const cookies: any = parseCookies()
  const defaultSnackbar = {
    text: '',
    type: '',
    bgColor: '',
  }
  const [snackbar, setSnackbar] = useState<ISnackbar>(defaultSnackbar)

  const submit = async (payload: any) => {
    try {
      const token: string = cookies?.access_token
      const params: any = ObjectToSnakeCase(payload)
      await changePassword({ params, token }).then(() => {
        setSnackbar({
          text: 'Password berhasil diubah',
          bgColor: 'bg-success-1',
          type: 'success',
        })
      })
    } catch (error: any) {
      setSnackbar({
        text: error?.response?.data?.message || 'Terjadi Kesalahan!',
        bgColor: 'bg-error-3',
        type: 'error',
      })
    }
  }

  const handleCloseSnackbar = () => {
    setSnackbar(defaultSnackbar)
  }

  return {
    handleCloseSnackbar,
    snackbar,
    submit,
  }
}

export default useSubmit
