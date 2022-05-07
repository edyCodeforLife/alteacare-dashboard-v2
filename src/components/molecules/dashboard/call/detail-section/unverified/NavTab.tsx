import React from 'react'

import { WarningRounded } from '@material-ui/icons'

interface INavTab {
  activeTab: string
  handleTab: (param: string) => void
}

const NavTab = (props: INavTab) => {
  return (
    <div className="flex flex-col gap-y-5 py-2 px-4 bg-light-3">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-x-2 items-center text-error-3">
          <WarningRounded />
          <p className="text-xs">Lengkapi data pasien</p>
        </div>
        <button className="py-2 px-3 font-bold text-white bg-dark-4 rounded">
          Lanjutkan ke pembayaran
        </button>
      </div>
      <div className="flex flex-row justify-between">
        <p className="font-semibold text-dark-2">Order ID : 66870080</p>
        <button className="text-sm text-error-1 border-b border-error-1">Batal</button>
      </div>
      <div className="flex flex-row gap-x-5 text-sm font-semibold">
        <div
          className={`cursor-pointer ${
            props.activeTab === 'family-member'
              ? 'border-b-2 text-info-2 border-info-2 '
              : 'text-dark-2'
          }`}
          onClick={() => props.handleTab('family-member')}
        >
          <p>Daftar Keluarga</p>
        </div>
        <div
          className={`border-info-2 cursor-pointer ${
            props.activeTab === 'patient' ? 'border-b-2 text-info-2 border-info-2 ' : ' text-dark-2'
          }`}
          onClick={() => props.handleTab('patient')}
        >
          <p>Pasien</p>
        </div>
        <div
          className={`cursor-pointer ${
            props.activeTab === 'notes' ? 'border-b-2 text-info-2 border-info-2 ' : 'text-dark-2'
          }`}
          onClick={() => props.handleTab('notes')}
        >
          <p>Note</p>
        </div>
        <div
          className={`cursor-pointer ${
            props.activeTab === 'specialist'
              ? 'border-b-2 text-info-2 border-info-2 '
              : 'text-dark-2'
          }`}
          onClick={() => props.handleTab('specialist')}
        >
          <p>Spesialis</p>
        </div>
      </div>
    </div>
  )
}

export default NavTab
