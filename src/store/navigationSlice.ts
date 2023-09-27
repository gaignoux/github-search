import { createSlice, PayloadAction, Reducer, Slice } from "@reduxjs/toolkit";
import { TNavigationState, TNavigationReducer } from "@base/types/navigation";

/**
 * Redux slice for managing navigation state.
 *
 * @type {Slice<TNavigationState, TNavigationReducer>}
 * @name navigationSlice
 */
export const navigationSlice: Slice<TNavigationState, TNavigationReducer> =
  createSlice<TNavigationState, TNavigationReducer, "navigation">({
    name: "navigation",
    initialState: {
      current: "/",
    },
    reducers: {
      /**
       * Action to set the current navigation route.
       *
       * @param {TNavigationState} state - The current navigation state.
       * @param {PayloadAction<string>} payload - The payload containing the new route.
       */
      set: (state: TNavigationState, { payload }: PayloadAction<string>) => {
        state.current = payload;
      },
    },
  });

/**
 * The navigation reducer for managing navigation state.
 *
 * @type {Reducer<TNavigationState>}
 * @name navigationReducer
 */
export const navigationReducer: Reducer<TNavigationState> =
  navigationSlice.reducer;

/**
 * Action creators for the navigation slice.
 *
 * @type {TNavigationReducer}
 * @name navigationSlice.actions
 */
export const { set } = navigationSlice.actions;
