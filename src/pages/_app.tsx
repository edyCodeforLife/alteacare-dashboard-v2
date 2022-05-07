import { AppProps } from 'next/app'
import '@/styles/global.css'

import { wrapper } from '@/store'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
