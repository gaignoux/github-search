import { PayloadAction } from "@reduxjs/toolkit";

export type TNavigationState = {
  current: string;
};

export type TNavigationReducer = {
  set: (state: TNavigationState, action: PayloadAction<string>) => void;
};
