import { ReactNode } from 'react'

import { useRouter } from 'next/router'

import Footer from '@/components/molecules/footer'
import SnackbarError from '@/components/molecules/reusable/Snackbar'

import Meta from './MetaLayout'

type IMainProps = {
  children: ReactNode
}

const AuthLayout = (props: IMainProps) => {
  const router = useRouter()

  return (
    <div
      className="flex overflow-auto fixed flex-wrap w-full h-full"
      style={{
        backgroundImage: 'linear-gradient(#FFFFFF, #FFFFFF, #FFFFFF, #D6EDF6)',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Meta />
      <div className="flex absolute justify-center items-center w-full h-full">
        <div className="flex absolute z-10 flex-wrap justify-center w-full">
          {/* Alteacare Logo */}
          <div className="w-full text-center">
            <img
              src={`${router.basePath}/assets/images/logo-alteacare.png`}
              alt="Logo"
              className="mx-auto mb-5"
            />
          </div>
          <div
            style={{ minHeight: '475px' }}
            className="flex flex-col items-center mx-auto
              bg-white rounded-lg shadow-lg border border-solid"
          >
            <div className="px-10">
              {/* Page Content */}
              {props.children}
            </div>
            <SnackbarError />
          </div>
        </div>
        {/* BG Image */}
        <img
          src={`${router.basePath}/assets/images/bg-auth.png`}
          alt="Bg First Page"
          className="absolute -inset-x-0 bottom-0 mx-auto"
        />
      </div>
      <Footer />
    </div>
  )
}

export default AuthLayout
