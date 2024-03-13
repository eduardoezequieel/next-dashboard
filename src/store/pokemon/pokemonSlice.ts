import { SimplePokemon } from '@/app/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PokemonState {
  favorites: {
    [key: string]: SimplePokemon;
  };
}

const initialState: PokemonState = {
  favorites: {},
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setFavorites(state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {
      state.favorites = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const { id } = action.payload;
      if (state.favorites[id]) {
        delete state.favorites[id];
      } else {
        state.favorites[id] = action.payload;
      }
    },
  },
});

export const { toggleFavorite, setFavorites } = pokemonSlice.actions;

export default pokemonSlice.reducer;
