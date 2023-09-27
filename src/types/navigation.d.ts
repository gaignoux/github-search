import { PayloadAction } from "@reduxjs/toolkit";

/**
 * Represents the state of navigation.
 */
export type TNavigationState = {
  /**
   * The current navigation state.
   */
  current: string;
};

/**
 * Represents a reducer for navigation state.
 */
export type TNavigationReducer = {
  /**
   * Set the current navigation state.
   * @param state - The current navigation state.
   * @param action - The action containing the new navigation state.
   */
  set: (state: TNavigationState, action: PayloadAction<string>) => void;
};
