import Image from 'next/image';
import Link from 'next/link';

import { SimplePokemon } from '..';

import { CgEye, CgHeart } from 'react-icons/cg';

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = async ({ pokemon }: Props) => {

  const { id, name } = pokemon;

  return (
    <div className="relative flex flex-col items-center rounded-[10px] border-[1px] border-gray-300 w-full mx-auto p-3 bg-white bg-clip-border shadow-v shadow-gray-300">
      <div className="relative flex w-full justify-center">
        <div className="relative flex h-28 w-full justify-center rounded-lg bg-red-100" >
        </div>
        <div className="absolute -bottom-12 flex h-[140px] w-[140px] items-center justify-center">
          <Image
            alt="Imagen"
            width={140}
            height={140}
            className="h-full w-full"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          />
        </div>
      </div>
      <div className="mt-14 flex flex-col items-center">
        <h4 className="text-lg font-bold text-gray-600 capitalize">
          {name}
        </h4>
        <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
          <CgHeart size={15} className="me-1" /> Badge
        </span>
      </div>
      <div className="flex flex-row w-full mt-3 px-3 gap-2 items-center justify-between">
        <div className="flex flex-col items-center justify-center">
          <p className="text-xs font-normal text-gray-400">#{id.padStart(4, '0')}</p>
        </div>
        <div className="flex flex-row gap-1 items-center justify-center">
          <Link href="#">
            <CgHeart size={20} className="text-gray-400 hover:text-red-normal transition ease-linear duration-200" />
          </Link>
          <Link href={`/dashboard/pokemon/${id}`}>
            <CgEye size={20} className="text-gray-400 hover:text-yellow-normal transition ease-linear duration-200" />
          </Link>
        </div>
      </div>
    </div>
  )
}