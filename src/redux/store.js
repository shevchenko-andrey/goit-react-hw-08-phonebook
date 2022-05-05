import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { combineReducers } from '@reduxjs/toolkit';
import { filterReduser } from './filterSlice';
import { authReduser } from './authSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

// import { persistedReducer } from "./redusers";

// import { rootReducer } from "./redusers";
const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const rootReducer = combineReducers({
  [contactsApi.reducerPath]: contactsApi.reducer,
  filter: filterReduser,
  auth: persistReducer(authConfig, authReduser),
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
  ],
});
setupListeners(store.dispatch);
export const persistor = persistStore(store);
