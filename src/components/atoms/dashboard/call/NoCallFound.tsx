import React from 'react'

import { Icon } from '@material-ui/core'

const NoCallFound = () => {
  return (
    <div className="flex flex-col gap-y-2 items-center text-dark-4">
      <Icon style={{ fontSize: 60 }}>videocam</Icon>
      <p className="text-sm text-dark-4">Tidak ada panggilan disini</p>
    </div>
  )
}

export default NoCallFound
