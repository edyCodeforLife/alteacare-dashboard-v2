import React from 'react'

import { Icon } from '@material-ui/core'

import { convertBytes } from '@/helpers/converter'

import useDocumentUploader from './hooks/useDocumentUploader'

type Props = {}

const DocumentUploader = (props: Props) => {
  const { uploadProgress, uploadedFile, enableCRUD, handleUploadFile, uploadDocFile } =
    useDocumentUploader()

  return (
    <div className="py-2 px-8 w-full">
      <div className="flex flex-col my-2 w-full text-sm">
        {/* {appointmentDetail !== null &&
          appointmentDetail.medical_document.length > 0 &&
          // data available
          appointmentDetail.medical_document.map((res, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-row justify-between py-4 text-xs border-b border-gray-100"
              >
                <p className="font-semibold">{truncateString(res.original_name)}</p>
                <div className="flex flex-row gap-x-5 items-center">
                  <p className="text-right text-dark3">{res.size}</p>
                  <button
                    className="text-sm text-mainColor"
                    onClick={() => handleViewFile(res.url)}
                  >
                    Lihat
                  </button>
                  conditional rendering
                  {enableCRUD && (
                    <button
                      className="text-sm font-semibold text-error1"
                      onClick={() => handleDeleteDocument(res.id)}
                    >
                      Hapus
                    </button>
                  )}
                </div>
              </div>
            )
          })} */}
        {/* uploading document progress */}
        {uploadProgress > 0 && (
          <div className="flex flex-row justify-between py-4 text-xs border-b border-gray-100">
            <p className="font-semibold">{uploadedFile.name}</p>
            <p className="text-right text-dark-3">{convertBytes(uploadedFile.size)}</p>
            <div className="flex flex-row gap-x-3 items-center">
              <p className="text-dark-3">{uploadProgress}%</p>
              {/* progress bar */}
              <div className="w-36 h-1 bg-light-1">
                <div className="h-1 bg-dark-3" style={{ width: `${uploadProgress}%` }}></div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* upload document btn */}
      <div className="flex flex-row justify-between my-3 w-full text-xs">
        <div className="flex flex-col gap-y-1 text-dark-2">
          <p className="font-semibold">Unggah Berkas</p>
          <p className="text-xxs">Pemeriksaan penunjang</p>
        </div>
        <button
          className={`flex flex-row items-center gap-x-2 ${
            enableCRUD ? 'text-main-primary cursor-pointer' : 'text-dark-4 cursor-not-allowed'
          }`}
          onClick={() => uploadDocFile()}
          disabled={!enableCRUD}
        >
          <input id="uploadDocument" type="file" onChange={handleUploadFile} hidden />
          <Icon>attach_file</Icon>
          <p className="font-semibold">Unggah</p>
        </button>
      </div>
    </div>
  )
}

export default DocumentUploader
