import { SimplePokemon } from '@/app/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonState {
  [key: string]: SimplePokemon;
}

const initialState: PokemonState = { '1': { id: '1', name: 'bulbasaur' } };

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const { id } = action.payload;
      if (state[id]) {
        delete state[id];
      } else {
        state[id] = action.payload;
      }
    },
  },
});

export const { toggleFavorite } = pokemonSlice.actions;

export default pokemonSlice.reducer;
