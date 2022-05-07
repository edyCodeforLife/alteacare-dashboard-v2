import axios from 'axios'

const src = process.env.BASE_API

interface IChangePass {
  params: any
  token: string
}

const changePassword = async ({ params, token }: IChangePass) => {
  return axios.post(`${src}/password/change`, params, {
    headers: { Authorization: `Bearer ${token}` }
  },
)}

export default changePassword
