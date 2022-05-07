import { ReactNode } from 'react'

import HeaderManageUser from '@/components/molecules/header'
import SideBarManageUser from '@/components/molecules/sidebar/NavbarManageUser'

import Meta from './MetaLayout'

type IMainProps = {
  children: ReactNode
}

const ManageUserLayout = (props: IMainProps) => (
  <div className="flex flex-col h-screen">
    <Meta />
    <HeaderManageUser />
    <div className="flex flex-row h-full">
      <SideBarManageUser />
      <div className="flex-1">{props.children}</div>
    </div>
  </div>
)

export default ManageUserLayout
