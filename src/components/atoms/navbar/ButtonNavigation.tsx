import React from 'react'

import { Icon } from '@material-ui/core'
import Link from 'next/link'

interface IButtonSidebar {
  text: string
  icon: string
  path: string
  isActive: boolean
}

const ButtonNavigation = (props: IButtonSidebar) => {
  const { text, icon, path, isActive } = props

  return (
    <Link passHref={true} href={`/dashboard/${path}`}>
      <a
        className={`flex flex-col gap-y-1 items-center py-5 px-2 text-center text-white hover:bg-info-2 cursor-pointer ${
          isActive ? 'bg-info-2' : ''
        }`}
      >
        <Icon fontSize="large">{icon}</Icon>
        <p className="text-xs">{text}</p>
      </a>
    </Link>
  )
}

ButtonNavigation.defaultProps = {
  text: '',
  icon: '',
  path: '',
}

export default ButtonNavigation
