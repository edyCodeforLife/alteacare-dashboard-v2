import axios from 'axios'

const src = process.env.BASE_API

interface ICheckPass {
  password: string
  token: string
}

const checkPassword = async ({ password, token }: ICheckPass) => {
  return axios.post(`${src}/password/check`, {
    password
  }, {
    headers: { Authorization: `Bearer ${token}` }
  },
)}

export default checkPassword
