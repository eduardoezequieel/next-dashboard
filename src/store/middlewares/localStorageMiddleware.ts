import { Action, Middleware } from '@reduxjs/toolkit';
import { RootState } from '..';

export const localStorageMiddleware: Middleware = (state) => (next) => (action) => {
  const result = next(action);

  const { type } = action as Action;
  if (type.startsWith('pokemon/')) {
    const { pokemon } = state.getState() as RootState;
    localStorage.setItem('pokemon', JSON.stringify(pokemon));
  }

  return result;
};
