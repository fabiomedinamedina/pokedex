import { PokemonGrid, PokemonsResponse, Pokemon } from "@/pokemons";


export const metadata = {
  title: 'Mundo Pokémon | Pokédex [Curso NextJS - Fabio Medina]',
  description: 'Accede a toda la información de cada Pokémon, de forma clara y sin complicaciones.',
};

const getPokemons = async (limit = 20, offset = 0): Promise<Pokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(response => response.json());

  const pokemonPromises = data.results.map(pokemon => {
    const id = parseInt(pokemon.url.split('/').at(-2)!);
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      next: { revalidate: 60 * 60 * 30 * 6 }
    }).then(res => res.json());
  });

  const pokemons = await Promise.all(pokemonPromises);
  return pokemons;
}

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="px-12 py-6">
      <div className="flex flex-col w-full justify-end items-start my-9 p-10 bg-[url(/bg-pokemon-page-alt.jpg)] rounded-lg bg-cover bg-no-repeat bg-center h-80">
        <h1 className="text-7xl font-extrabold text-white drop-shadow-md">Mundo Pokémon</h1>
        <p className="text-white text-xl drop-shadow-sm">
          Accede a toda la información de cada Pokémon, de forma clara y sin complicaciones.
        </p>
      </div>
      <div className="flex flex-col">
        <PokemonGrid pokemons={pokemons} />
      </div>
    </div>
  );
}