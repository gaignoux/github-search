import { AnyAction, configureStore, Store } from "@reduxjs/toolkit";
import { repositoryReducer } from "@base/store/repositorySlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { persistReducer } from "redux-persist";
import storage from "@base/lib/storage";
import logger from "redux-logger";
import { navigationReducer } from "@base/store/navigationSlice";
import { TSearchState } from "@base/types/search";
import { TNavigationState } from "@base/types/navigation";

/**
 * Configuration for persisting the repository slice state.
 */
const repositoryPersistConfig = {
  key: "repository",
  storage: storage,
  whitelist: ["favorites", "search"],
};

/**
 * Configuration for persisting the navigation slice state.
 */
const navigationPersistConfig = {
  key: "navigation",
  storage: storage,
  whitelist: ["current"],
};

/**
 * Redux store for managing application state.
 *
 * @type {Store<any, AnyAction>}
 * @name store
 */
const store: Store<any, AnyAction> = configureStore({
  reducer: {
    repository: persistReducer(repositoryPersistConfig, repositoryReducer),
    navigation: persistReducer(navigationPersistConfig, navigationReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

/**
 * Type representing the root state of the Redux store.
 *
 * @type {ReturnType<typeof store.getState>}
 * @name RootState
 */
type RootState = ReturnType<typeof store.getState>;

/**
 * Type representing the dispatch function with specific app dispatch type.
 *
 * @type {typeof store.dispatch}
 * @name AppDispatch
 */
type AppDispatch = typeof store.dispatch;

/**
 * Custom hook for using the dispatch function with specific app dispatch type.
 *
 * @function
 * @name useAppDispatch
 * @returns {AppDispatch} The app-specific dispatch function.
 */
const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();

/**
 * Custom hook for selecting data from the Redux store with type inference.
 *
 * @function
 * @name useAppSelector
 * @template {RootState} - The root state type.
 * @param {Selector<RootState>} selector - A selector function to extract data from the store.
 * @returns {ReturnType<Selector<RootState>>} The selected data from the store.
 */
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
export { useAppDispatch, useAppSelector };
