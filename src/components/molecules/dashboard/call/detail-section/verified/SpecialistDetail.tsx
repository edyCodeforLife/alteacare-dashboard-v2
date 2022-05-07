import React from 'react'

import { Icon } from '@material-ui/core'
import Image from 'next/image'

type Props = {}

const SpecialistDetail = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-5 py-5 px-4">
      {/* doctor image and detail */}
      <div className="flex flex-row gap-x-6 items-center">
        <Image
          alt="doctor-sp"
          src="https://cms-bucket-alteacare.s3.ap-southeast-1.amazonaws.com/dr_aron_jpg_ec0dd883a2.jpg"
          width={100}
          height={100}
          layout="fixed"
        />
        <div className="flex flex-col">
          <div className="flex flex-row gap-x-2 items-center">
            <img
              alt="mika-logo"
              src="https://cms-bucket-alteacare.s3.ap-southeast-1.amazonaws.com/logo_MIKA_83f14601a0.png"
              style={{ objectFit: 'contain' }}
              width={24}
            />
            <p className="text-xxs font-thin">RS MIKA Kelapa Gading</p>
          </div>
          <p className="mb-1 text-sm font-semibold text-black">dr. Cindy Simangunsong</p>
          <p className="text-xs text-black">Sp. Anak - Endokrinologi</p>
        </div>
      </div>
      {/* doctor schedule */}
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-row gap-x-2 items-center">
          <Icon>date_range_rounded</Icon>
          <p className="font-thin">Selasa, 28 Des 2020</p>
        </div>
        <div className="flex flex-row gap-x-2 items-center">
          <Icon>access_alarms_rounded_icon</Icon>
          <p className="font-thin">09.45 - 10.00</p>
        </div>
      </div>
    </div>
  )
}

export default SpecialistDetail
