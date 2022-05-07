import axios from 'axios'

const src = process.env.BASE_API

interface ILogin {
  email: string
  password: string
  role: string
}

const login = ({ email, password, role }: ILogin) => {
  return axios.post(`${src}/auth/login`, {
    email,
    password,
    role,
  })
}

export default login
