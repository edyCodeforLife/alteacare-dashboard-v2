import React from 'react'

import { Icon } from '@material-ui/core'

const NoAppointmentFound = () => {
  return (
    <div className="flex flex-col items-center p-8 text-dark-4">
      <Icon style={{ fontSize: 60 }}>assignment_outlined</Icon>
      <p>Tidak ada perjanjian disini</p>
    </div>
  )
}

export default NoAppointmentFound
