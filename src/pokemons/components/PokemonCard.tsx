import Image from 'next/image';
import Link from 'next/link';
import { Pokemon } from '..';
import { CgEye, CgHeart } from 'react-icons/cg';

interface Props {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name, types } = pokemon;
  const bgColorClass = `pokemon-${types[0].type.name}`;

  return (
    <div className="relative flex flex-col items-center rounded-[10px] border-[1px] border-gray-300 w-full mx-auto p-3 bg-white bg-clip-border shadow-v shadow-gray-300">
      <div className="relative flex w-full justify-center">
        <div className={`relative flex h-28 w-full justify-center rounded-lg ${bgColorClass}`} >
        </div>
        <div className="absolute -bottom-12 flex h-[140px] w-[140px] items-center justify-center">
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
      <div className="mt-14 flex flex-col items-center">
        <h4 className="text-lg font-bold text-gray-600 capitalize">
          {name}
        </h4>
        <div className="flex flex-row gap-1 items-center justify-center">
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
      <div className="flex flex-row w-full mt-3 px-3 gap-2 items-center justify-between">
        <div className="flex flex-col items-center justify-center">
          <p className="text-xs font-normal text-gray-400">#{id.toString().padStart(3, '0')}</p>
        </div>
        <div className="flex flex-row gap-1 items-center justify-center">
          <Link href="#">
            <CgHeart size={20} className="text-gray-400 hover:text-red-normal transition ease-linear duration-200" />
          </Link>
          <Link href={`/dashboard/pokemons/${name}`}>
            <CgEye size={20} className="text-gray-400 hover:text-yellow-normal transition ease-linear duration-200" />
          </Link>
        </div>
      </div>
    </div>
  )
}