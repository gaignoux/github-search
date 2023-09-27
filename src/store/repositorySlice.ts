import { createSlice, PayloadAction, Reducer, Slice } from "@reduxjs/toolkit";
import {
  TFavoriteRate,
  TSearchReducer,
  TSearchState,
} from "@base/types/search";
import { TRepository } from "@base/types/repository";
import { PageInfo } from "@base/interfaces/search";

/**
 * Redux slice for managing repository state.
 *
 * @type {Slice<TSearchState, TSearchReducer>}
 * @name repositorySlice
 */
export const repositorySlice: Slice<TSearchState, TSearchReducer> = createSlice<
  TSearchState,
  TSearchReducer,
  "repository"
>({
  name: "repository",
  initialState: {
    favorites: [] as TRepository[],
    search: "",
    after: null,
    before: null,
  },
  reducers: {
    /**
     * Action to add a repository to favorites.
     *
     * @param {TSearchState} state - The current repository state.
     * @param {PayloadAction<TRepository>} payload - The payload containing the repository to add.
     */
    add: (state: TSearchState, { payload }: PayloadAction<TRepository>) => {
      if (!state.favorites.includes(payload)) {
        state.favorites = [...state.favorites, payload];
      }
    },
    /**
     * Action to remove a repository from favorites.
     *
     * @param {TSearchState} state - The current repository state.
     * @param {PayloadAction<TRepository>} payload - The payload containing the repository to remove.
     */
    remove: (state: TSearchState, { payload }: PayloadAction<TRepository>) => {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== payload.id,
      );
    },
    /**
     * Action to set the search query.
     *
     * @param {TSearchState} state - The current repository state.
     * @param {PayloadAction<string>} payload - The payload containing the new search query.
     */
    setSearch: (state: TSearchState, { payload }: PayloadAction<string>) => {
      state.search = payload;
    },
    /**
     * Action to rate a favorite repository.
     *
     * @param {TSearchState} state - The current repository state.
     * @param {PayloadAction<TFavoriteRate>} payload - The payload containing the rating for a repository.
     */
    rateFavorite: (
      state: TSearchState,
      { payload }: PayloadAction<TFavoriteRate>,
    ) => {
      state.favorites = state.favorites.map((favorite) => {
        if (favorite.id === payload.id) {
          favorite.rate = payload.value;
        }

        return favorite;
      });
    },
    /**
     * Action to set the page info.
     *
     * @param {TSearchState} state - The current repository state.
     * @param {PayloadAction<PageInfo | undefined>} payload - The payload containing page information.
     */
    setPageInfo: (
      state: TSearchState,
      { payload }: PayloadAction<PageInfo | undefined>,
    ) => {
      state.pageInfo = payload;
    },
    /**
     * Action to set the 'after' cursor.
     *
     * @param {TSearchState} state - The current repository state.
     * @param {PayloadAction<string | null>} payload - The payload containing the 'after' cursor value.
     */
    setAfter: (
      state: TSearchState,
      { payload }: PayloadAction<string | null>,
    ) => {
      state.after = payload;
    },
    /**
     * Action to set the 'before' cursor.
     *
     * @param {TSearchState} state - The current repository state.
     * @param {PayloadAction<string | null>} payload - The payload containing the 'before' cursor value.
     */
    setBefore: (
      state: TSearchState,
      { payload }: PayloadAction<string | null>,
    ) => {
      state.before = payload;
    },
  },
});

/**
 * The repository reducer for managing repository state.
 *
 * @type {Reducer<TSearchState>}
 * @name repositoryReducer
 */
export const repositoryReducer: Reducer<TSearchState> = repositorySlice.reducer;

/**
 * Action creators for the repository slice.
 *
 * @type {TSearchReducer}
 * @name repositorySlice.actions
 */
export const {
  add,
  remove,
  setSearch,
  rateFavorite,
  setPageInfo,
  setAfter,
  setBefore,
} = repositorySlice.actions;
