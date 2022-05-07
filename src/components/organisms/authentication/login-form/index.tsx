import React from 'react'

import { Icon } from '@material-ui/core'

import ButtonBack from '@/components/atoms/login-form/ButtonBack'
import ButtonSubmit from '@/components/atoms/login-form/ButtonSubmit'

import useLogin from './hooks/useLogin'

const LoginForm = () => {
  const { router, showPassword, handleInput, submitLogin, convertRole, togglePassword } = useLogin()

  return (
    <div className="p-8 mx-auto w-full font-inter rounded-lg">
      <div className="flex flex-col gap-y-8">
        {/* back btn */}
        <ButtonBack text="Kembali" router={router} />
        {/* role */}
        <div className="flex flex-col text-center text-main-darker">
          <p>Anda masuk sebagai</p>
          <p>
            <b>{convertRole()}</b>
          </p>
        </div>
        {/* text input */}
        <form className="w-full">
          <div className="flex flex-wrap gap-y-6">
            <input
              placeholder="Tulis Email"
              className="input-style"
              onChange={(e) => handleInput(e.target.value, '')}
            />
            <div className="relative w-full">
              <input
                id="password"
                type="password"
                placeholder="Masukkan Password"
                className="input-style"
                onChange={(e) => handleInput('', e.target.value)}
              />
              <button
                type="button"
                className="absolute top-4 right-0 mx-5 text-dark-3"
                onClick={() =>
                  togglePassword(document.getElementById('password') as HTMLInputElement)
                }
              >
                <Icon>{showPassword ? 'visibility' : 'visibility_off'}</Icon>
              </button>
            </div>
          </div>
        </form>
        {/* btn section */}
        <div className="flex flex-col gap-y-3">
          <div className="flex self-end">
            <p className="text-sm font-extralight text-info-1 cursor-pointer">Lupa Password?</p>
          </div>
          <ButtonSubmit text="Masuk" hooks={submitLogin} />
        </div>
      </div>
    </div>
  )
}

export default LoginForm
