import { PokemonCard, PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import Image from "next/image";

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(response => response.json());

  const pokemons: SimplePokemon[] = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));

  // throw new Error("No se pudo establecer conexión con la API");

  return pokemons;
}

export default async function PokemonsPage() {

  const pokemons = await getPokemons(100);

  return (
    <div className="p-4 pb-6">
      <h1>Pokemons Page</h1>
      <div className="flex flex-col">
        <PokemonGrid pokemons={pokemons} />
      </div>
    </div>
  );
}