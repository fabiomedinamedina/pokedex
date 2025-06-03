'use client';

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { SimplePokemon } from "@/pokemons/interfaces/simplePokemon";
import { Pokemon } from "@/pokemons/interfaces/pokemon";
import { useEffect, useState } from 'react';
import { StatusDisplay } from "@/components";
import Image from "next/image";

const getPokemons = (favorites: SimplePokemon[]): Promise<Pokemon[]> => {
  const pokemonPromises = favorites.map(({ id }) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      next: { revalidate: 60 * 60 * 30 * 6 }
    }).then(res => res.json());
  });
  return Promise.all(pokemonPromises);
}

export const FavoritesPokemons = () => {
  const favoritePokemons = useAppSelector(state => state.pokemons.favorites);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);



  useEffect(() => {
    getPokemons(Object.values(favoritePokemons))
      .then(setPokemons)
      .catch(error => console.error('Error loading pokemons:', error));
  }, [favoritePokemons]);

  return (
    <>
      {
        Object.values(favoritePokemons).length === 0
          ? (
            <StatusDisplay
              icon={
                <Image
                  alt='Icono de favoritos no agregados'
                  src="/no-favorites-icon.svg"
                  width={300}
                  height={244}
                />
              }
              title='No tienes favoritos aún'
              description='Oooops! no se has agregado ningún pokémon a los favoritos.'
              href={{
                title: 'Ver Pokémons',
                path: '/dashboard/pokemons'
              }}
            />
          )
          : (< PokemonGrid pokemons={pokemons} />)
      }
    </>

  )
}