import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Pokemon, PokemonSpecies, PokemonsResponse } from '@/pokemons';
import { HeroSection, PropertiesSection, StatsSection, InformationSection, MovesSection, AbilitiesSection, SpritesSection } from '@/pokemons';
interface Props {
  params: { name: string }
}

export async function generateStaticParams() {

  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`).then(res => res.json());

  const staticInitialPokemons = data.results.map(pokemon => ({ name: pokemon.name }));

  return staticInitialPokemons.map(({ name }) => ({ name }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pokemon = await getPokemonByName(params.name);
  return {
    title: `Pokémon ${pokemon.name} | Pokédex [Curso NextJS - Fabio Medina]`,
  }
}

const getPokemonByName = async (name: string): Promise<Pokemon> => {
  try {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
      cache: 'force-cache',
      // next: { revalidate: 60 * 60 * 30 * 6 }
    }).then(res => res.json());

    return pokemon;
  } catch (error) {
    notFound();
  }
}

const getPokemonSpeciesByName = async (name: string): Promise<PokemonSpecies> => {
  try {
    const species = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`, {
      next: { revalidate: 60 * 60 * 30 * 6 }
    }).then(res => res.json());

    return species;
  } catch (error) {
    notFound();
  }
}

export default async function PokemonPage({ params }: Props) {
  const { id, name, types, weight, height, base_experience, stats, moves, abilities, sprites } = await getPokemonByName(params.name);
  const species = await getPokemonSpeciesByName(params.name);

  return (
    <div className='px-12 py-12'>
      <HeroSection id={id} name={name} types={types} />
      <PropertiesSection weight={weight} height={height} base_experience={base_experience} />
      <div className="flex flex-row w-full gap-10 mt-10 text-gray-600">
        <div className="flex flex-col w-1/2 justify-center  rounded-[10px] border-[1px] border-gray-300 bg-clip-border shadow-v shadow-gray-300 p-10">
          <h2 className="text-2xl font-bold mb-2">Stats</h2>
          <StatsSection stats={stats} type={types[0]} />
        </div>
        <div className="flex flex-col w-1/2 gap-4">
          <InformationSection species={species} type={types[0]} />
          <MovesSection moves={moves} />
          <AbilitiesSection abilities={abilities} />
          <SpritesSection sprites={sprites} />
        </div>
      </div>

    </div>
  );
}