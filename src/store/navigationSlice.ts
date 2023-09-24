import { createSlice } from "@reduxjs/toolkit";
import { TNavigationState, TNavigationReducer } from "@base/types/navigation";

export const navigationSlice = createSlice<
  TNavigationState,
  TNavigationReducer,
  "navigation"
>({
  name: "navigation",
  initialState: {
    current: "/",
  },
  reducers: {
    set: (state: TNavigationState, { payload }) => {
      state.current = payload;
    },
  },
});

export const navigationReducer = navigationSlice.reducer;

export const { set } = navigationSlice.actions;
