import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type DarkMode = {
  darkMode: boolean,
};

const initialState: DarkMode = {
  darkMode: false,
};

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        darkMode: action.payload,
      };
    },
  },
});

export default darkModeSlice.reducer;
export const { actions } = darkModeSlice;
