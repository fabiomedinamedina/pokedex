'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

interface Props {
  path: string;
  icon: JSX.Element;
  title: string;
  subTitle: string;
}

export const SidebarMenuItem = ({ path, icon, title, subTitle }: Props) => {

  const currentPath = usePathname();

  return (
    <Link
    href={path}
    className={`w-full px-2 rounded inline-flex space-x-2 items-center py-3 ${ (currentPath === path) && 'bg-yellow-normal shadow-v shadow-yellow-dark hover:bg-yellow-normal'}  hover:bg-white/20 transition ease-linear duration-200`}>
      <div className="text-white">
        { icon }
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{ title }</span>
        <span className="text-sm text-white/50 hidden md:block">{ subTitle }</span>
      </div>
    </Link>
  )
}