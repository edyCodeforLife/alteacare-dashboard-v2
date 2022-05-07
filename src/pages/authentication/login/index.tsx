import React from 'react'

import LoginForm from '@/components/organisms/authentication/login-form'
import AuthLayout from '@/layouts/AuthLayout'

const Login = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  )
}

export default Login
