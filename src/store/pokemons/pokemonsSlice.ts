import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/pokemons';

interface PokemonsFavoriteState {
  [key: number]: SimplePokemon,
}

const getInitialState = (): PokemonsFavoriteState => {
  if (typeof localStorage === 'undefined') return {};

  const favorites = JSON.parse(localStorage.getItem('favorites-pokemons') ?? '{}');
  return favorites;
}

const initialState: PokemonsFavoriteState = {
  ...getInitialState(),
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

      //TODO: No se debe hacer en Redux debido a que Redux no debe tener efectos secundarios y deben ser funciones puras que no deben salir al exterior ni ser asincronas.
      // localStorage.setItem('favorites-pokemons', JSON.stringify(state));

    }
  }
});


// Action creators are generated for each case reducer function
export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;