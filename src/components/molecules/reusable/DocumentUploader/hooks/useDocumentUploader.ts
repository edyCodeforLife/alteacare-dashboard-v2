import { useEffect, useState } from 'react'

import { batch, useDispatch } from 'react-redux'

import { showSnackbar, setSnackbarProps } from '@/store/slices/Snackbar'

const useDocumentUploader = () => {
  const dispatch = useDispatch()
  const [uploadedFile, setUploadedFile] = useState<any>([])
  const [uploadProgress, setUploadProgress] = useState<number>(0)
  const [enableCRUD, setEnableCRUD] = useState<boolean>(true) // for conditional validation on CRUD feature

  useEffect(() => {}, []) // eslint-disable-line react-hooks/exhaustive-deps

  // open doc file
  const handleViewFile = (value: string) => {
    window.open(value, '_blank')
  }

  // delete document
  const handleDeleteDocument = async (docID: number) => {
    // ajax here
    // await deleteDocument(appointmentId, docID);
    // re-fetch doc after upload file
    // getMedicalDocument();
  }

  // upload doc file
  const uploadDocFile = () => {
    document.getElementById('uploadDocument').click()
  }

  // onchange input type file
  const handleUploadFile = async (e: any) => {
    const file = e.target.files[0]
    if (file === undefined) return // if user not selected any file
    const fileType = file.type
    const fileSize = file.size
    const validFileFormat = ['image/gif', 'image/jpeg', 'image/jpg', 'image/png', 'application/pdf']

    // file size exceed limit
    if (fileSize >= 10240000) {
      batch(() => {
        dispatch(showSnackbar())
        dispatch(
          setSnackbarProps({
            visible: true,
            text: 'File hanya bisa di upload maximum 10 MB',
            type: 'error',
            bg: 'bg-error-3',
          })
        )
      })
      return false
    }
    // file format invalid
    if (validFileFormat.indexOf(fileType) === -1) {
      batch(() => {
        dispatch(showSnackbar())
        dispatch(
          setSnackbarProps({
            visible: true,
            text: 'File hanya dapat berbentuk gambar atau PDF',
            type: 'error',
            bg: 'bg-error-3',
          })
        )
      })
      return false
    }

    // file valid
    const formData = new FormData()
    formData.append('file', file, file.name)
    // start uploading file
    // setUploadProgress(0);
    // setUploadedFile(file);
    // await uploadDocument(appointmentId, formData, event => {
    //   const progress = Math.round((100 * event.loaded) / event.total);
    //   setUploadProgress(progress);
    // });
    // setUploadProgress(0);
    // re-fetch doc after upload file
    // getMedicalDocument();
  }

  return {
    uploadedFile,
    uploadProgress,
    enableCRUD,
    uploadDocFile,
    handleUploadFile,
    handleViewFile,
    handleDeleteDocument,
  }
}

export default useDocumentUploader
