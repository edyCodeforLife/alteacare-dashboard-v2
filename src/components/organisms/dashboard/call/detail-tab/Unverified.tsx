import React from 'react'

import FamilyMember from '@/components/molecules/dashboard/call/detail-section/unverified/FamilyMember'
import NavTab from '@/components/molecules/dashboard/call/detail-section/unverified/NavTab'
import PatientDetail from '@/components/molecules/dashboard/call/detail-section/unverified/PatientDetail'
import PatientNotes from '@/components/molecules/dashboard/call/detail-section/unverified/PatientNotes'
import Specialist from '@/components/molecules/dashboard/call/detail-section/unverified/Specialist'

import useUnverifiedDetail from './hooks/useUnverifiedDetail'

const Detail = () => {
  // const tab = useSelector((state: RootState) => state.patientDetailTab.activePatientDetailTab)
  const { activeTab, handleActiveTab } = useUnverifiedDetail()
  return (
    <div className="flex flex-col gap-y-3">
      <NavTab activeTab={activeTab} handleTab={handleActiveTab} />
      {activeTab === 'family-member' && <FamilyMember />}
      {activeTab === 'patient' && <PatientDetail />}
      {activeTab === 'notes' && <PatientNotes />}
      {activeTab === 'specialist' && <Specialist />}
    </div>
  )
}

export default Detail
