import React from 'react'

import Divider from '@/components/atoms/dashboard/Divider'
import StatusLabel from '@/components/atoms/dashboard/StatusLabel'

const Status = () => {
  return (
    <div className="flex flex-col gap-y-2 py-5 px-4">
      <StatusLabel />
      <Divider />
      <StatusLabel />
    </div>
  )
}

export default Status
