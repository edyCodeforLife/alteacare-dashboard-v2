import React from 'react'

import List from '@/components/molecules/dashboard/call/appointment-section/List'
import AppointmentNav from '@/components/molecules/dashboard/call/appointment-section/NavTab'
import AppointmentSearchbar from '@/components/molecules/dashboard/call/appointment-section/Searchbar'

import useAppointment from './hooks/useAppointment'

const AppointmentList = () => {
  const { activeTab, handleActiveTab } = useAppointment()
  return (
    <div className="flex flex-col gap-y-2 w-full text-dark-2">
      <AppointmentNav activeTab={activeTab} handleTab={handleActiveTab} />
      <AppointmentSearchbar />
      <List />
    </div>
  )
}

export default AppointmentList
