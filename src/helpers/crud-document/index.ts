/**
 * upload document helper
 * @param {int} appointmentID
 * @param {obj} formData (uploaded file)
 * @param {event} onUploadProgress (for progress bar)
 */
export const uploadDocument = async (
  appointmentID: number,
  formData: any,
  onUploadProgress: number
) => {
  // inject API here
  // try {
  //   // 1st request to get file ID from uploaded file
  //   const resp1 = await ApiFile.post('/file/v1/file/upload', formData, {
  //     headers: { Authorization: `Bearer ${LocalStorage('access_token')}` },
  //     onUploadProgress,
  //   })
  //   // 2nd request to add doc based on file ID
  //   return await Api.post(
  //     '/appointment/v1/document/add',
  //     {
  //       appointment_id: appointmentID,
  //       file: resp1.data.data.id,
  //     },
  //     {
  //       headers: {
  //         Authorization: `Bearer ${LocalStorage('access_token')}`,
  //       },
  //     }
  //   )
  // } catch (error) {
  //   throw error
  // }
}

/**
 * delete document helper
 * @param {int} appointmentID
 * @param {string} fileID
 */
export const deleteDocument = async (appointmentID: number, docID: number) => {
  // inject API here
  // try {
  //   await Api.post(
  //     '/appointment/v1/document/remove',
  //     {
  //       appointment_id: appointmentID,
  //       document_id: docID,
  //     },
  //     {
  //       headers: {
  //         Authorization: `Bearer ${LocalStorage('access_token')}`,
  //       },
  //     }
  //   );
  // } catch (error) {
  //   throw error;
  // }
}
