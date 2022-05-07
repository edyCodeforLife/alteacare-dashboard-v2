import React from 'react'

import NoAppointmentFound from '@/components/atoms/dashboard/call/NoAppointmentFound'

type Props = {}

const FinishedList = (props: Props) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <div className="py-2 px-4 bg-light-3">
          <p className="text-sm">Hari ini (selesai)</p>
        </div>
        <NoAppointmentFound />
      </div>
      <div className="flex flex-col">
        <div className="py-2 px-4 bg-light-3">
          <p className="text-sm">Kemarin</p>
        </div>
        <NoAppointmentFound />
      </div>
    </div>
  )
}

export default FinishedList
