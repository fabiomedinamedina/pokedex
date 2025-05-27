import Image from 'next/image'
import React from 'react'
import { Type } from '@/pokemons/interfaces/pokemon';

interface Props {
  id: number;
  name: string;
  types: Type[];
}

export const HeroSection = ({ id, name, types }: Props) => {
  const bgColorClass = `pokemon-${types[0].type.name}`;

  return (
    <div className={`relative flex flex-col p-8 w-full justify-center rounded-lg ${bgColorClass}`} >
      <div className="w-8/12">
        <p className='text-white/50 text-7xl font-light'>#{id.toString().padStart(3, '0')}</p>
        <h1 className='capitalize text-white text-5xl font-bold'>{name}</h1>
        <div className="flex flex-row gap-1 items-center justify-start mt-2">
          {
            types.map((type, index) => (
              <span key={index} className={`inline-flex items-center rounded-md px-2 py-1 text-sm font-medium ring-1 ring-inset capitalize type-${type.type.name}`}>
                <svg className='w-6 h-6 bg-red text-red'>
                  <use xlinkHref={`/icons-types-color.svg#${type.type.name}`} />
                </svg>
                {type.type.name}
              </span>
            ))
          }
        </div>
      </div>
      <div className="w-4/12">
        <div className="absolute top-10  right-10 flex h-[300px] w-[300px] items-center justify-center">
          <Image
            alt={`Imagen de Pokemon ${name}`}
            width={140}
            height={140}
            className="h-full w-full"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            priority={id <= 10}
            loading={id <= 10 ? 'eager' : 'lazy'}
          />
        </div>
      </div>
    </div>
  )
}