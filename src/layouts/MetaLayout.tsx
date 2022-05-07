import { NextSeo } from 'next-seo'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { AppConfig } from '@/constants/AppConfig'

const Meta = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
        <link rel="apple-touch-icon" href={`${router.basePath}/apple-touch-icon.png`} key="apple" />
        <link rel="icon" href={`${router.basePath}/favicon.ico`} />
      </Head>
      <NextSeo
        title={AppConfig.title}
        description={AppConfig.description}
        openGraph={{
          title: AppConfig.title,
          description: AppConfig.description,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
        }}
      />
    </>
  )
}

export default Meta
