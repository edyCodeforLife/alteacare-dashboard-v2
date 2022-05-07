import React from 'react'

import DocumentUploader from '@/components/molecules/reusable/DocumentUploader'

const PatientNotes = () => {
  return (
    <div className="flex flex-col gap-y-5">
      {/* notes */}
      <div className="flex flex-col gap-y-2 px-4">
        <p className="text-sm font-semibold text-dark-1">Note</p>
        <textarea
          className="p-3 h-40 border outline-none resize-none"
          placeholder="Tulis catatan pasien disini"
        />
        <p className="text-sm text-main-primary">Karakter yang tersedia: 500 kata</p>
      </div>

      {/* document uploader */}
      <DocumentUploader />
    </div>
  )
}

export default PatientNotes
