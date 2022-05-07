import React from 'react'

import Status from '@/components/molecules/dashboard/call/detail-section/Status'
import Notes from '@/components/molecules/dashboard/call/detail-section/verified/Notes'
import OrderID from '@/components/molecules/dashboard/call/detail-section/verified/OrderID'
import PatientDetail from '@/components/molecules/dashboard/call/detail-section/verified/PatientDetail'
import PatientInformation from '@/components/molecules/dashboard/call/detail-section/verified/PatientInformation'
import SpecialistDetail from '@/components/molecules/dashboard/call/detail-section/verified/SpecialistDetail'
import DocumentUploader from '@/components/molecules/reusable/DocumentUploader'

const VerifiedTab = () => {
  return (
    <div className="flex flex-col text-dark-3">
      <OrderID />
      <div className="flex flex-col">
        <div className="flex py-2 bg-light-3">
          <p className="mx-4 text-sm font-semibold">Spesialis</p>
        </div>
        <SpecialistDetail />
        <div className="flex py-2 bg-light-3">
          <p className="mx-4 text-sm font-semibold">Pasien</p>
        </div>
        <PatientDetail />
        <div className="flex py-2 bg-light-3">
          <p className="mx-4 text-sm font-semibold">Catatan</p>
        </div>
        <Notes />
        <div className="flex py-2 bg-light-3">
          <p className="mx-4 text-sm font-semibold">Informasi</p>
        </div>
        <PatientInformation />
        <div className="flex py-2 bg-light-3">
          <p className="mx-4 text-sm font-semibold">Dokumen Lampiran</p>
        </div>
        <DocumentUploader />
        <div className="flex py-2 bg-light-3">
          <p className="mx-4 text-sm font-semibold">Status</p>
        </div>
        <Status />
      </div>
    </div>
  )
}

export default VerifiedTab
