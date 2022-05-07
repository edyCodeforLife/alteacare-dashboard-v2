import React from 'react'

import IncomingCall from '@/components/molecules/dashboard/call/call-section/IncomingCall'
import MissedCall from '@/components/molecules/dashboard/call/call-section/MissedCall'
import CallNav from '@/components/molecules/dashboard/call/call-section/NavTab'

import useCall from './hooks/useCall'

const CallSection = () => {
  // const tab = useSelector((state: RootState) => state.callTab.activeCallTab)
  const { activeTab, handleActiveTab } = useCall()

  return (
    <div className="flex flex-col gap-y-5">
      <CallNav activeTab={activeTab} handleTab={handleActiveTab} />
      <div className="gap-y-1 py-3 px-8">
        {activeTab === 'call' && <IncomingCall />}
        {activeTab === 'missed-call' && <MissedCall />}
      </div>
    </div>
  )
}

export default CallSection
