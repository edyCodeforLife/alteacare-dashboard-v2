import React from 'react'

import { Icon } from '@material-ui/core'

const PatientDetailEmpty = () => {
  return (
    <div className="relative h-full bg-light-3">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col gap-y-5 items-center my-auto text-dark-4">
          <Icon style={{ fontSize: 70 }}>group</Icon>
          <p>Pilih untuk melihat detail pasien</p>
        </div>
      </div>
    </div>
  )
}

export default PatientDetailEmpty
