import React from 'react'

import { Icon } from '@material-ui/core'

import FamilyList from '@/components/molecules/dashboard/patient/FamilyList'
import PersonalDetail from '@/components/molecules/dashboard/patient/PersonalDetail'

type Props = {}

const PatientDetail = (props: Props) => {
  return (
    <div className="flex flex-col">
      <PersonalDetail />
      <div className="p-4 bg-light-3">
        <div className="flex flex-row justify-between items-center">
          <p className="font-semibold text-main-darker">Daftar Keluarga</p>
          <button className="w-fit font-bold text-main-primary">
            <div className="flex flex-row items-center">
              <Icon fontSize="small">add</Icon>
              <p>Tambah</p>
            </div>
          </button>
        </div>
      </div>
      <FamilyList />
    </div>
  )
}

export default PatientDetail
