import React from 'react'

import PatientDetailVerified from '@/components/organisms/dashboard/call/detail-tab/Verified'
import ConsultationList from '@/components/organisms/dashboard/consultation/ConsultationList'
import DashboardLayout from '@/layouts/DashboardLayout'

type Props = {}

const Consultation = (props: Props) => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-7 h-full font-inter">
        <div className="col-span-4">
          <ConsultationList />
        </div>
        <div className="overflow-auto col-span-3 max-h-screen border-x border-light-1">
          <PatientDetailVerified />
          {/* <PatientDetailUnverified /> */}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Consultation
