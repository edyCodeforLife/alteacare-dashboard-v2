import React from 'react'

import { Icon } from '@material-ui/core'
import Image from 'next/image'

const IncomingCall = () => {
  return (
    <div className="text-sm text-white bg-dark-1 rounded">
      <div className="flex flex-col gap-y-3 py-3 px-4">
        <div className="flex flex-row justify-between items-center pb-2 border-b border-black">
          <p>Ticket - 66870093</p>
          <span className="p-1 text-xs bg-info-2 rounded">Konsultasi Baru</span>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-x-2 items-center">
            <Image
              alt="incoming-call-logo"
              src="/assets/images/login-page/MA-icon.png"
              layout="fixed"
              width={40}
              height={40}
            />
            <p>Aldi Taher</p>
          </div>
          <button className="py-3 px-6 bg-success-3 rounded-full">
            <div className="flex flex-row gap-x-3">
              <Icon>videocam</Icon>
              <p>Terima</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default IncomingCall
