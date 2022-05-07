import React from 'react'

import SnackbarError from '@/components/molecules/reusable/Snackbar'
import AppointmentList from '@/components/organisms/dashboard/call/appointment-tab/AppointmentList'
import CallSection from '@/components/organisms/dashboard/call/call-tab/Call'
import PatientDetailVerified from '@/components/organisms/dashboard/call/detail-tab/Verified'
// import PatientDetailUnverified from '@/components/organisms/dashboard/call/detail-tab/Unverified'
import DashboardLayout from '@/layouts/DashboardLayout'

const Call = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-7 h-full font-inter">
        <div className="col-span-2">
          <CallSection />
        </div>
        <div className="col-span-2 border-x border-light-1">
          <AppointmentList />
        </div>
        <div className="overflow-auto flex-col col-span-3 h-full">
          <PatientDetailVerified />
          {/* <PatientDetailUnverified /> */}

          {/* snackbar on bottom of the page */}
          <div className="fixed right-0 bottom-0 z-10">
            <SnackbarError />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Call
