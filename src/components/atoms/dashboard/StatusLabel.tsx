import React from 'react'

import { AssignmentOutlined } from '@material-ui/icons'

interface IStatusLabel {
  icon: string
  day: string
  time: string
  order_label: string
  made_by: string
}

const StatusLabel = (props: IStatusLabel) => {
  return (
    <div className="grid grid-cols-2 items-center">
      {/* icon and time */}
      <div className="flex flex-row grow gap-x-4 items-center">
        <div className="p-3 text-info-2 rounded-full border-2 border-main-lighter">
          <AssignmentOutlined />
        </div>
        <div className="flex flex-col text-info-2">
          <p className="font-semibold">Hari ini</p>
          <p>18.10</p>
        </div>
      </div>
      {/* status desc */}
      <div className="flex flex-col text-info-2">
        <p className="font-semibold">Order baru</p>
        <p className="font-thin text-dark-3">dibuat oleh Loviana Maulana</p>
      </div>
    </div>
  )
}

StatusLabel.defaultProps = {
  icon: '',
  day: '',
  time: '',
  order_label: '',
  made_by: '',
}

export default StatusLabel
