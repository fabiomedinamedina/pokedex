import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/pokemons';

interface PokemonsFavoriteState {
  favorites: { [key: number]: SimplePokemon },
}

// const getInitialState = (): PokemonsFavoriteState => {
//   // if (typeof localStorage === 'undefined') return {};

//   const favorites = JSON.parse(localStorage.getItem('favorites-pokemons') ?? '{}');
//   return favorites;
// }

const initialState: PokemonsFavoriteState = {
  favorites: {}
  // ...getInitialState(),
};

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    setFavoritePokemons(state: PokemonsFavoriteState, action: PayloadAction<{ [key: number]: SimplePokemon }>) {
      state.favorites = action.payload;
    },

    toggleFavorite(state: PokemonsFavoriteState, action: PayloadAction<SimplePokemon>) {

      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
        return;
      }
      state.favorites[id] = action.payload;

      //TODO: No se debe hacer en Redux debido a que Redux no debe tener efectos secundarios y deben ser funciones puras que no deben salir al exterior ni ser asincronas.
      // localStorage.setItem('favorites-pokemons', JSON.stringify(state));

    }
  }
});


// Action creators are generated for each case reducer function
export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;