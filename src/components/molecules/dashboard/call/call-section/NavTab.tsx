import React from 'react'

import { Icon } from '@material-ui/core'

interface INavTab {
  activeTab: string
  handleTab: (param: string) => void
}

const NavTab = (props: INavTab) => {
  return (
    <div className="grid grid-cols-2 w-full font-bold text-dark-2 bg-light-3">
      <div
        className={`flex flex-row gap-x-2 p-3 border-info-2 cursor-pointer justify-center ${
          props.activeTab === 'call' ? 'border-b-2' : ''
        }`}
        onClick={() => props.handleTab('call')}
      >
        <Icon>videocam</Icon>
        <p>Panggilan</p>
      </div>
      <div
        className={`flex flex-row gap-x-2 p-3 border-info-2 cursor-pointer justify-center ${
          props.activeTab === 'missed-call' ? 'border-b-2' : ''
        }`}
        onClick={() => props.handleTab('missed-call')}
      >
        <Icon>call_missed</Icon>
        <p>Tak Terjawab</p>
      </div>
    </div>
  )
}

export default NavTab
