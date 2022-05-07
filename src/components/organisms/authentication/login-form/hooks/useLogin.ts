import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { batch, useDispatch } from 'react-redux'

import { setAuthCookies } from '@/helpers/cookies'
import login from '@/services/authentication/Login'
import { setAccessToken, setRefreshToken } from '@/store/slices/Auth'
import { setSnackbarProps, hideSnackbar, showSnackbar } from '@/store/slices/Snackbar'

const useLogin = () => {
  const dispatch = useDispatch()

  const router = useRouter()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [role, setRole] = useState('') as any
  const [showPassword, setShowPassword] = useState<boolean>(false)

  useEffect(() => {
    const cookies = parseCookies()
    console.log(cookies.access_token)
    setRole(router.query.role)
  }, [router]) // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Convert code into user role
   * @param param -> role code (ex: 'SP')
   * @returns converted role from code (ex: 'Specialist)
   */
  const convertRole = () => {
    const roleQuery = router.query.role
    switch (roleQuery) {
      case 'MA':
        return 'Medical Advisor'
      case 'PRO':
        return 'Public Relation Officer'
      case 'DOCTOR':
        return 'Dokter Telekonsultasi'
      default:
        break
    }
    return true
  }

  // toggle show/hide password text
  /* eslint-disable no-param-reassign */
  const togglePassword = (el: HTMLInputElement) => {
    if (el.type === 'password') {
      // show password
      el.type = 'text'
      setShowPassword(true)
    } else {
      // hide password
      el.type = 'password'
      setShowPassword(false)
    }
  }

  // handle onChange input (email & password)
  const handleInput = (usernameVal: string, passwordVal: string) => {
    if (usernameVal) {
      setEmail(usernameVal)
    } else {
      setPassword(passwordVal)
    }
  }

  // submit login data
  const submitLogin = async () => {
    dispatch(hideSnackbar())
    try {
      await login({ email, password, role }).then((resp) => {
        const data = {
          access_token: resp.data.data.access_token,
          refresh_token: resp.data.data.refresh_token,
        }
        setAuthCookies(data)
        batch(() => {
          dispatch(setAccessToken(data.access_token))
          dispatch(setRefreshToken(data.refresh_token))
        })
      })
    } catch (error: any) {
      const errCode = error.response.status
      if (errCode === 400) {
        // show snackbar error
        batch(() => {
          dispatch(showSnackbar())
          dispatch(
            setSnackbarProps({
              visible: true,
              text: 'Email atau password salah',
              type: 'error',
              bg: 'bg-error-3',
            })
          )
        })
      }
    }
  }

  return {
    router,
    role,
    showPassword,
    togglePassword,
    handleInput,
    submitLogin,
    convertRole,
  }
}

export default useLogin
