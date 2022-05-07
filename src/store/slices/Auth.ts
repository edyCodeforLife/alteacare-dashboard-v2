import { createSlice, PayloadAction } from '@reduxjs/toolkit'

/* Reducers for Authentication features */

// Define a type for the state
type IAuthState = {
  accessToken: string
  refreshToken: string
}

// Define the initial state using that type
const initialState: IAuthState = {
  accessToken: '',
  refreshToken: '',
}

export const Auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload
    },
  },
})

export const { setAccessToken, setRefreshToken } = Auth.actions

export default Auth.reducer
