import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/pokemons';

interface PokemonsFavoriteState {
  [key: number]: SimplePokemon,
}

const initialState: PokemonsFavoriteState = {
  1: { id: 1, name: 'bulbasaur' },
  6: { id: 6, name: 'charizard' },
  8: { id: 8, name: 'wartortle' },
  3: { id: 3, name: 'venusaur' },
};

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite(state: PokemonsFavoriteState, action: PayloadAction<SimplePokemon>) {

      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state[id]) {
        delete state[id];
        return;
      }

      state[id] = action.payload;

    }
  }
});


// Action creators are generated for each case reducer function
export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;