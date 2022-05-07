import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'

import checkPassword from '@/services/manage-user/CheckPassword'

interface ISnackbar {
  text: string
  type: string
  bgColor: string
}

const useCheckPass = () => {
  const cookies: any = parseCookies()
  const router: any = useRouter()

  const defaultSnackbar = {
    text: '',
    type: '',
    bgColor: '',
  }
  const [snackbar, setSnackbar] = useState<ISnackbar>(defaultSnackbar)

  const submitCheckPassword = async (password: string) => {
    const token: string = cookies?.access_token;
    handleCloseSnackbar()
    try {
      await checkPassword({ password, token }).then(() => {
        router.push({
          pathname: '/manage-user/change-password/',
          query: { isVerify: true }
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

  useEffect(() => () => {
    setSnackbar(defaultSnackbar)
  }, [])

  return {
    handleCloseSnackbar,
    submitCheckPassword,
    snackbar,
  }
}

export default useCheckPass
