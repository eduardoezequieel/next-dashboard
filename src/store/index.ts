import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import pokemonReducer from './pokemon/pokemonSlice';
import { localStorageMiddleware } from './middlewares/localStorageMiddleware';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemon: pokemonReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
