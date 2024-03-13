'use client';

import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '.';
import { PokemonState, setFavorites } from './pokemon/pokemonSlice';

export const Providers = ({ children }: React.PropsWithChildren) => {
  const getInitialState = () => {
    const pokemon = localStorage.getItem('pokemon');
    if (pokemon) return JSON.parse(pokemon) as PokemonState;

    return {
      favorites: {},
    };
  };

  useEffect(() => {
    const initialState = getInitialState();
    store.dispatch(setFavorites(initialState.favorites));
  }, []);

  return <Provider store={store}>{children}</Provider>;
};
