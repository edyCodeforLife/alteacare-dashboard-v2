import React from 'react'

interface INavTab {
  activeTab: string
  handleTab: (param: string) => void
}

const NavTab = (props: INavTab) => {
  return (
    <div className="flex flex-col gap-y-5 py-2 px-4 bg-light-3">
      <div className="flex flex-row justify-between">
        <p className="font-bold">Perjanjian Sementara</p>
        <button className="btn-secondary">Tambah</button>
      </div>
      <div className="flex flex-row gap-x-5 text-sm font-semibold">
        <div
          className={`cursor-pointer ${
            props.activeTab === 'waiting' ? 'border-b-2 border-info-2 text-info-2' : 'text-dark-2 '
          }`}
          onClick={() => props.handleTab('waiting')}
        >
          <p>Menunggu Pembayaran</p>
        </div>
        <div
          className={`cursor-pointer ${
            props.activeTab === 'cancellation'
              ? 'border-b-2 border-info-2 text-info-2'
              : 'text-dark-2 '
          }`}
          onClick={() => props.handleTab('cancellation')}
        >
          <p>Pembatalan</p>
        </div>
      </div>
    </div>
  )
}

export default NavTab
