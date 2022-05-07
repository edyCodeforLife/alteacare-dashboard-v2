import React from 'react'

import PatientSearchbar from '@/components/molecules/dashboard/patient/Searchbar'
import UserList from '@/components/molecules/dashboard/patient/UserList'

type Props = {}

const Patient = (props: Props) => {
  return (
    <div className="flex flex-col w-full">
      <div className="py-5">
        <PatientSearchbar />
      </div>
      <div className="flex flex-col gap-y-3 text-dark-3">
        <div className="py-2 px-4 bg-light-3">
          <p className="text-sm">Data pasien terbaru</p>
        </div>
        <UserList />
      </div>
    </div>
  )
}

export default Patient
