import React, { ReactNode } from 'react'

import Header from '@/components/molecules/header'
import Sidebar from '@/components/molecules/sidebar/NavbarDashboard'

import Meta from './MetaLayout'

type IHomeLayout = {
  children: ReactNode
}

const DashboardLayout = (props: IHomeLayout) => {
  return (
    <div className="flex flex-col h-screen">
      <Meta />
      <Header />
      <div className="flex overflow-hidden flex-row h-full">
        <Sidebar />
        <div className="flex-1">{props.children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
