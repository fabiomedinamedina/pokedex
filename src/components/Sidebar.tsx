import Image from 'next/image';
import { CgPokemon } from 'react-icons/cg';
import { CiCalculator2, CiGrid41 } from 'react-icons/ci';

import { SidebarMenuItem } from '@/components';

const menuItems = [
  {
    path: '/dashboard/main',
    icon: <CiGrid41 size={30} />,
    title: 'Dashboard',
    subTitle: 'Visualización'
  },
  {
    path: '/dashboard/counter',
    icon: <CiCalculator2 size={30} />,
    title: 'Counter',
    subTitle: 'Contador Client Side'
  },
  {
    path: '/dashboard/pokemons',
    icon: <CgPokemon size={30} />,
    title: 'Pokédex',
    subTitle: 'Buscador de Pokémons'
  }
]

export const Sidebar = () => {
  return (
    <div id="menu" className="w-[400px] bg-gradient-to-b from-red-normal to-red-dark min-h-screen z-10 text-white left-0 h-screen overflow-y-auto">
      <div id="logo" className="my-4 px-6 pt-2">
        <Image
          alt='Logo Pokédex'
          width={230}
          height={52}
          src="/logo-pokedex.svg"
        />
        <p className="text-white text-sm">App Course NextJS</p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-white text-xs">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span className="text-sm md:text-base font-bold">
            Fabio Medina
          </span>
        </a>
      </div>

      <div id="nav" className="flex flex-col w-full px-6 gap-2">
        {
          menuItems.map(item => (
            <SidebarMenuItem key={item.path} {...item} />
          ))
        }
      </div>
    </div>
  )
}