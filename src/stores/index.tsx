import {  legacy_createStore as createStore } from 'redux'
import reducers from "./reducers"
import storage from 'redux-persist/lib/storage';
import midlewares from "./middleware"
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
  }
export const persistedReducer = persistReducer(persistConfig, reducers) 

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const store = createStore(persistedReducer,midlewares)
export const persistor = persistStore(store)
