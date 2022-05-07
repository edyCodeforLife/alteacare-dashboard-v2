import React, { useEffect } from 'react'

import { useRouter } from 'next/router'

const Index = () => {
  const router = useRouter()

  useEffect(() => {
    // redirect to default home page: dashboard/call
    router.push('/dashboard/call')
  }, [])

  return <></>
}

export default Index
