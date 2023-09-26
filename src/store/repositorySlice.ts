import { createSlice } from "@reduxjs/toolkit";
import { TSearchReducer, TSearchState } from "@base/types/search";
import { TRepository } from "@base/types/repository";

export const repositorySlice = createSlice<
  TSearchState,
  TSearchReducer,
  "repository"
>({
  name: "repository",
  initialState: {
    favorites: [] as TRepository[],
    search: "",
  },
  reducers: {
    add: (state: TSearchState, { payload }) => {
      if (!state.favorites.includes(payload)) {
        state.favorites = [...state.favorites, payload];
      }
    },
    remove: (state: TSearchState, { payload }) => {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== payload.id,
      );
    },
    setSearch: (state: TSearchState, { payload }) => {
      state.search = payload;
    },
    rateFavorite: (state: TSearchState, { payload }) => {
      state.favorites = state.favorites.map((favorite) => {
        if (favorite.id === payload.id) {
          favorite.rate = payload.value;
        }

        return favorite;
      });
    },
    setPageInfo: (state: TSearchState, { payload }) => {
      state.pageInfo = payload;
    },
  },
});

export const repositoryReducer = repositorySlice.reducer;

export const { add, remove, setSearch, rateFavorite, setPageInfo } =
  repositorySlice.actions;
