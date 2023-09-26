import { TRepository } from "@base/types/repository";
import { PayloadAction } from "@reduxjs/toolkit";
import { PageInfo } from "@base/interfaces/search";

export type TSearchState = {
  favorites: TRepository[];
  search: string;
  pageInfo?: PageInfo;
};

export type TFavoriteRate = { id: string; value: number };

export type TSearchReducer = {
  add: (state: TSearchState, action: PayloadAction<TRepository>) => void;
  setSearch: (state: TSearchState, action: PayloadAction<string>) => void;
  remove: (state: TSearchState, action: PayloadAction<TRepository>) => void;
  rateFavorite: (
    state: TSearchState,
    action: PayloadAction<TFavoriteRate>,
  ) => void;
  setPageInfo: (
    state: TSearchState,
    action: PayloadAction<PageInfo | undefined>,
  ) => void;
};
