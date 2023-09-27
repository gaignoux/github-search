import { TRepository } from "@base/types/repository";
import { PayloadAction } from "@reduxjs/toolkit";
import { PageInfo } from "@base/interfaces/search";

/**
 * Represents the state of a search operation.
 */
export type TSearchState = {
  /**
   * An array of favorite repositories.
   */
  favorites: TRepository[];
  /**
   * The search query string.
   */
  search: string;
  /**
   * The cursor for pagination, indicating the start point for fetching more data.
   */
  after: string | null;
  /**
   * The cursor for pagination, indicating the end point for fetching more data.
   */
  before: string | null;
  /**
   * Optional pagination information.
   */
  pageInfo?: PageInfo;
};

/**
 * Represents a favorite repository's rate.
 */
export type TFavoriteRate = { id: string; value: number };

/**
 * Represents a set of reducer functions for managing the search state.
 */
export type TSearchReducer = {
  /**
   * Add a repository to the search state.
   */
  add: (state: TSearchState, action: PayloadAction<TRepository>) => void;
  /**
   * Set the search query in the search state.
   */
  setSearch: (state: TSearchState, action: PayloadAction<string>) => void;
  /**
   * Remove a repository from the search state.
   */
  remove: (state: TSearchState, action: PayloadAction<TRepository>) => void;
  /**
   * Rate a favorite repository.
   */
  rateFavorite: (
    state: TSearchState,
    action: PayloadAction<TFavoriteRate>,
  ) => void;
  /**
   * Set pagination information.
   */
  setPageInfo: (
    state: TSearchState,
    action: PayloadAction<PageInfo | undefined>,
  ) => void;
  /**
   * Set the 'after' cursor for pagination.
   */
  setAfter: (state: TSearchState, action: PayloadAction<string | null>) => void;
  /**
   * Set the 'before' cursor for pagination.
   */
  setBefore: (
    state: TSearchState,
    action: PayloadAction<string | null>,
  ) => void;
};
