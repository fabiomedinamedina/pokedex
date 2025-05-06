import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(response => response.json());
  const pokemons: SimplePokemon[] = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name
  }));

  // throw new Error("No se pudo establecer conexión con la API");

  return pokemons;
}

export default async function PokemonsPage() {

  const pokemons = await getPokemons(100);

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