import { Metadata } from 'next';
import { Pokemon } from '@/pokemons';
import { notFound } from 'next/navigation';

interface Props {
  params:{ id: string}
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const pokemon = await getPokemon(params.id);
  return {
    title: `Pokémon ${pokemon.name}`
  }
}

const getPokemon = async (id: string): Promise<Pokemon> => {

  try {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      next: { revalidate: 60 * 60 * 30 * 6 }
    }).then(res => res.json());
  
    return pokemon;
  } catch (error) {
    notFound();
  }
  
}

export default function PokemonPage({params}: Props) {

  
  return (
    <div>
      <h1>Pokémon {params.id}</h1>
    </div>
  );
}