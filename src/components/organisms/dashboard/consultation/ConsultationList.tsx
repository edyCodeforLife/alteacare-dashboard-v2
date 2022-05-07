import React from 'react'

import CancelledList from '@/components/molecules/dashboard/consultation/cancelled-section/CancelledList'
import FinishedList from '@/components/molecules/dashboard/consultation/finished-section/FinishedList'
import ConsultationNav from '@/components/molecules/dashboard/consultation/NavTab'
import OngoingList from '@/components/molecules/dashboard/consultation/ongoing-section/OngoingList'
import ConsultationSearchbar from '@/components/molecules/dashboard/consultation/Searchbar'

import useConsultation from './hooks/useConsultation'

const ConsultationList = () => {
  const { activeTab, handleActiveTab } = useConsultation()

  return (
    <div className="flex flex-col gap-y-3">
      <ConsultationNav activeTab={activeTab} handleTab={handleActiveTab} />
      <ConsultationSearchbar />
      {activeTab === 'ongoing' && <OngoingList />}
      {activeTab === 'finish' && <FinishedList />}
      {activeTab === 'cancelled' && <CancelledList />}
    </div>
  )
}

export default ConsultationList
