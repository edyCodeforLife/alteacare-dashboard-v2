// list of reducers for each features
import { combineReducers } from 'redux'

import AuthSlicers from '@/store/slices/Auth'
import SnackbarSlicers from '@/store/slices/Snackbar'

// combine all reducers
const combinedReducer = combineReducers({
  auth: AuthSlicers,
  snackbar: SnackbarSlicers,
})

export default combinedReducer
