import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { carReducer } from "./carReducer";

const carsPersistConfig = {
  key: "cars",
  storage,
  whitelist: [],
};

const store = configureStore({
  reducer: {
    cars: persistReducer(carsPersistConfig, carReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
