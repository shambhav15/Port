// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice with initial state and reducer
const toggleSlice = createSlice({
  name: 'toggle',
  initialState: false,
  reducers: {
    toggle: (state) => !state,
  },
});

// Create the Redux store using configureStore
const store = configureStore({
  reducer: {
    toggle: toggleSlice.reducer,
  },
});

// Export the toggle action for convenience
export const { toggle } = toggleSlice.actions;

export default store;
