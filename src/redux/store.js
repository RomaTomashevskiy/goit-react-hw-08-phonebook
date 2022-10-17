import { configureStore  , getDefaultMiddleware } from "@reduxjs/toolkit";
import {createdauthSlice} from './auth/auth-slice'
import { contactReduser } from "./contacts/contact-slice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'


const authPersistConfig = {
  key: 'auth',
   storage,
  whitelist: ['token']
}

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig , createdauthSlice),
        contacts: contactReduser
    },
     middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
  devTools: process.env.NODE_ENV === 'development',
});


    export const persistor = persistStore(store)