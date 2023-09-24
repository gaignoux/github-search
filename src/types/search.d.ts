import { TRepository } from "@base/types/repository";
import { PayloadAction } from "@reduxjs/toolkit";

export type TSearchState = {
  favorites: TRepository[];
  search: string;
};

export type TFavoriteRate = { name: string; value: number };

export type TSearchReducer = {
  add: (state: TSearchState, action: PayloadAction<TRepository>) => void;
  setSearch: (state: TSearchState, action: PayloadAction<string>) => void;
  remove: (state: TSearchState, action: PayloadAction<TRepository>) => void;
  rateFavorite: (
    state: TSearchState,
    action: PayloadAction<TFavoriteRate>,
  ) => void;
};
