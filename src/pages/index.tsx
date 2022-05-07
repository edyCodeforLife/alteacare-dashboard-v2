import nookies from 'nookies'

import SelectRole from '@/components/organisms/authentication/select-role'
import AuthLayout from '@/layouts/AuthLayout'

export async function getServerSideProps(ctx: any) {
  const cookies = nookies.get(ctx)
  if (cookies.access_token) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    }
  }
  return {
    props: {},
  }
}

const Main = () => {
  return (
    <AuthLayout>
      <SelectRole />
    </AuthLayout>
  )
}

export default Main
