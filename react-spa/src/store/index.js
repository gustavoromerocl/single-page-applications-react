import {
    configureStore,
    combineReducers
} from '@reduxjs/toolkit';

import {
    persistStore,
    persistReducer
} from 'redux-persist';

import userReducer from './user';
import videosReducer from './videos';
import storage from 'redux-persist/lib/storage';

const reducer = combineReducers({
    user: userReducer,
    videos: videosReducer
});

const persistConfig = {
    key: 'root',
    storage: storage,
    whiteList: ['user'], //que todas las props que se especifiquen se guarden y el resto no
    /* blackList: [] //que todas las props que se especifiquen no se guarden y el resto sí */
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store);