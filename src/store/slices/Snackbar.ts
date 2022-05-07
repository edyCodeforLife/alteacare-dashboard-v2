import { createSlice, PayloadAction } from '@reduxjs/toolkit'

/* Reducers for reusable snackbar */

// Define a type for the state
type ISnackbarState = {
  visible: boolean
  text: string
  type: string
  bg: string
}

// Define the initial state using that type
const initialState: ISnackbarState = {
  visible: false,
  text: '',
  type: '',
  bg: '',
}

export const Auth = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    showSnackbar: (state) => {
      state.visible = true
    },
    hideSnackbar: (state) => {
      state.visible = false
    },
    setSnackbarProps: (state, { payload }: PayloadAction<ISnackbarState>) => {
      return {
        ...state,
        ...payload,
      }
    },
  },
})

export const { showSnackbar, hideSnackbar, setSnackbarProps } = Auth.actions

export default Auth.reducer
