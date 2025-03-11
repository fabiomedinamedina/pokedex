import Image from 'next/image';

import { PokemonCard, SimplePokemon } from '..';

interface Props{
  pokemons: SimplePokemon[];
}


export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-3 gap-y-4">
      {
        pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
          // <div>span</div>
        ))
      }
    </div>
  )
}