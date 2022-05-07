import React from 'react'

import PatientList from '@/components/organisms/dashboard/patient/PatientList'
import PatientListDetail from '@/components/organisms/dashboard/patient/PatientListDetail'
import DashboardLayout from '@/layouts/DashboardLayout'

type Props = {}

const Patient = (props: Props) => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-7 h-full font-inter">
        <div className="col-span-4 border-x border-light-1">
          <PatientList />
        </div>
        <div className="overflow-auto col-span-3 max-h-screen">
          <PatientListDetail />
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Patient
