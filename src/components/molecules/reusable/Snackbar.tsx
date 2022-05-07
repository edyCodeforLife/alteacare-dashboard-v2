import React from 'react'

import { Icon } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/store'
import { hideSnackbar } from '@/store/slices/Snackbar'

const Snackbar = () => {
  const isVisible = useSelector((state: RootState) => state.snackbar.visible)
  const snackbarProps = useSelector((state: RootState) => state.snackbar)
  const dispatch = useDispatch()

  return (
    <>
      {isVisible && (
        <div className={`w-full ${snackbarProps.bg}`}>
          <div className="flex flex-row gap-x-3 items-center py-5 px-4 text-white">
            {/* conditional rendering icon */}
            {snackbarProps.type === 'error' && <Icon>error</Icon>}
            {snackbarProps.type === 'success' && <Icon>check_circle</Icon>}
            <p className="grow text-sm">{snackbarProps.text}</p>
            <button onClick={() => dispatch(hideSnackbar())}>
              <Icon>close</Icon>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Snackbar
