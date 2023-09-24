import { configureStore } from "@reduxjs/toolkit";
import { repositoryReducer } from "@base/store/repositorySlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { persistReducer } from "redux-persist";
import storage from "@base/store/customStorage";
import logger from "redux-logger";
import { navigationReducer } from "@base/store/navigationSlice";

const repositoryPersistConfig = {
  key: "repository",
  storage: storage,
  whitelist: ["favorites", "search"],
};

const navigationPersistConfig = {
  key: "navigation",
  storage: storage,
  whitelist: ["current"],
};

const store = configureStore({
  reducer: {
    repository: persistReducer(repositoryPersistConfig, repositoryReducer),
    navigation: persistReducer(navigationPersistConfig, navigationReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
export { useAppDispatch, useAppSelector };
