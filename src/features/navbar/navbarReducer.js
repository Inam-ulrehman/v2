import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isNavBarOpen: false,
}

const navbar = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    closeNavbar: (state) => {
      state.isNavBarOpen = false
    },
    openNavbar: (state) => {
      state.isNavBarOpen = true
    },
  },
})

export const { closeNavbar, openNavbar } = navbar.actions
export default navbar.reducer
