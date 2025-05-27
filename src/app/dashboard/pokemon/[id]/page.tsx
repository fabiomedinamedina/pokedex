import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Pokemon, PokemonSpecies } from '@/pokemons';
import { HeroSection, PropertiesSection, StatsSection, InformationSection, MovesSection, AbilitiesSection, SpritesSection } from '@/pokemons';
interface Props {
  params: { id: string }
}

export async function generateStaticParams() {

  const staticInitialPokemons = Array.from({ length: 151 }).map((v, i) => `${i + 1}`);

  return staticInitialPokemons.map(id => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pokemon = await getPokemon(params.id);
  return {
    title: `Pokémon ${pokemon.name}`,
  }
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  try {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      cache: 'force-cache',
      // next: { revalidate: 60 * 60 * 30 * 6 }
    }).then(res => res.json());

    return pokemon;
  } catch (error) {
    notFound();
  }
}

const getPokemonSpecies = async (id: string): Promise<PokemonSpecies> => {
  try {
    const species = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`, {
      next: { revalidate: 60 * 60 * 30 * 6 }
    }).then(res => res.json());

    return species;
  } catch (error) {
    notFound();
  }
}

export default async function PokemonPage({ params }: Props) {
  const { id, name, types, weight, height, base_experience, stats, moves, abilities, sprites } = await getPokemon(params.id);
  const species = await getPokemonSpecies(params.id);

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