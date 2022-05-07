import React from 'react'

interface INavTab {
  activeTab: string
  handleTab: (param: string) => void
}

const NavTab = (props: INavTab) => {
  // const dispatch = useDispatch()
  // const activeTab = useSelector((state: RootState) => state.consultationTab.activeConsultationTab)

  // const handleTab = (param: string) => {
  //   dispatch(setActiveTab(param))
  // }

  return (
    <div className="flex flex-col gap-y-5 py-3 px-4 bg-light-3">
      <div className="flex flex-row gap-x-5 text-sm font-semibold">
        <div
          className={`cursor-pointer ${
            props.activeTab === 'ongoing' ? 'border-b-2 border-info-2 text-info-2' : 'text-dark-2 '
          }`}
          onClick={() => props.handleTab('ongoing')}
        >
          <p>Berjalan</p>
        </div>
        <div
          className={`cursor-pointer ${
            props.activeTab === 'finish' ? 'border-b-2 border-info-2 text-info-2' : 'text-dark-2 '
          }`}
          onClick={() => props.handleTab('finish')}
        >
          <p>Selesai</p>
        </div>
        <div
          className={`cursor-pointer ${
            props.activeTab === 'cancelled'
              ? 'border-b-2 border-info-2 text-info-2'
              : 'text-dark-2 '
          }`}
          onClick={() => props.handleTab('cancelled')}
        >
          <p>Dibatalkan</p>
        </div>
      </div>
    </div>
  )
}

export default NavTab
